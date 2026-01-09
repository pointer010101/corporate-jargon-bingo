const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const JARGON_TERMS = require('./jargon-terms');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Game state
const rooms = new Map();

class Room {
    constructor(code) {
        this.code = code;
        this.players = [];
        this.host = null;
        this.gameStarted = false;
        this.calledTerms = [];
        this.availableTerms = [...JARGON_TERMS];
    }

    addPlayer(player) {
        this.players.push(player);
        if (!this.host) {
            this.host = player;
            player.isHost = true;
        }
    }

    removePlayer(player) {
        this.players = this.players.filter(p => p !== player);
        
        // If host left, assign new host
        if (this.host === player && this.players.length > 0) {
            this.host = this.players[0];
            this.host.isHost = true;
        }
        
        return this.players.length === 0;
    }

    generateBingoCard() {
        const shuffled = [...JARGON_TERMS].sort(() => Math.random() - 0.5);
        const card = shuffled.slice(0, 24);
        // Insert FREE space in the middle (index 12)
        card.splice(12, 0, 'FREE');
        return card;
    }

    startGame() {
        this.gameStarted = true;
        this.calledTerms = [];
        this.availableTerms = [...JARGON_TERMS];
        
        // Generate unique bingo card for each player
        this.players.forEach(player => {
            player.bingoCard = this.generateBingoCard();
            this.sendToPlayer(player, {
                type: 'gameStarted',
                bingoCard: player.bingoCard
            });
        });
    }

    callRandomTerm() {
        if (this.availableTerms.length === 0) {
            this.availableTerms = [...JARGON_TERMS];
        }

        const randomIndex = Math.floor(Math.random() * this.availableTerms.length);
        const term = this.availableTerms.splice(randomIndex, 1)[0];
        
        this.calledTerms.push(term);
        
        this.broadcast({
            type: 'termCalled',
            term: term
        });
    }

    resetGame() {
        this.calledTerms = [];
        this.availableTerms = [...JARGON_TERMS];
        
        // Generate new cards for all players
        this.players.forEach(player => {
            player.bingoCard = this.generateBingoCard();
            this.sendToPlayer(player, {
                type: 'gameStarted',
                bingoCard: player.bingoCard
            });
        });
        
        this.broadcast({
            type: 'gameReset'
        });
    }

    broadcast(message, exclude = null) {
        this.players.forEach(player => {
            if (player !== exclude && player.ws.readyState === WebSocket.OPEN) {
                player.ws.send(JSON.stringify(message));
            }
        });
    }

    sendToPlayer(player, message) {
        if (player.ws.readyState === WebSocket.OPEN) {
            player.ws.send(JSON.stringify(message));
        }
    }

    getPlayersInfo() {
        return this.players.map(p => ({
            name: p.name,
            isHost: p.isHost
        }));
    }
}

function generateRoomCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function getOrCreateRoom(roomCode) {
    if (!roomCode) {
        // Generate new room
        let code;
        do {
            code = generateRoomCode();
        } while (rooms.has(code));
        
        const room = new Room(code);
        rooms.set(code, room);
        return room;
    } else {
        // Join existing room
        if (!rooms.has(roomCode)) {
            return null;
        }
        return rooms.get(roomCode);
    }
}

wss.on('connection', (ws) => {
    console.log('New client connected');
    
    let currentPlayer = null;
    let currentRoom = null;

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            
            switch (data.type) {
                case 'join':
                    handleJoin(data);
                    break;
                case 'startGame':
                    handleStartGame();
                    break;
                case 'callTerm':
                    handleCallTerm();
                    break;
                case 'bingo':
                    handleBingo(data);
                    break;
                case 'resetGame':
                    handleResetGame();
                    break;
            }
        } catch (error) {
            console.error('Error handling message:', error);
        }
    });

    function handleJoin(data) {
        const room = getOrCreateRoom(data.roomCode);
        
        if (!room) {
            ws.send(JSON.stringify({
                type: 'error',
                message: 'Room not found'
            }));
            return;
        }

        currentPlayer = {
            name: data.playerName,
            ws: ws,
            isHost: false,
            bingoCard: []
        };

        currentRoom = room;
        room.addPlayer(currentPlayer);

        // Send join confirmation to the player
        ws.send(JSON.stringify({
            type: 'joined',
            roomCode: room.code,
            isHost: currentPlayer.isHost,
            players: room.getPlayersInfo()
        }));

        // Notify other players
        room.broadcast({
            type: 'playerJoined',
            players: room.getPlayersInfo()
        }, currentPlayer);

        console.log(`${data.playerName} joined room ${room.code}`);
    }

    function handleStartGame() {
        if (!currentRoom || !currentPlayer.isHost) {
            ws.send(JSON.stringify({
                type: 'error',
                message: 'Only the host can start the game'
            }));
            return;
        }

        currentRoom.startGame();
        console.log(`Game started in room ${currentRoom.code}`);
    }

    function handleCallTerm() {
        if (!currentRoom || !currentPlayer.isHost) {
            ws.send(JSON.stringify({
                type: 'error',
                message: 'Only the host can call terms'
            }));
            return;
        }

        if (!currentRoom.gameStarted) {
            ws.send(JSON.stringify({
                type: 'error',
                message: 'Game has not started yet'
            }));
            return;
        }

        currentRoom.callRandomTerm();
    }

    function handleBingo(data) {
        if (!currentRoom) return;

        currentRoom.broadcast({
            type: 'playerWon',
            playerName: data.playerName
        });

        console.log(`${data.playerName} got BINGO in room ${currentRoom.code}!`);
    }

    function handleResetGame() {
        if (!currentRoom || !currentPlayer.isHost) {
            ws.send(JSON.stringify({
                type: 'error',
                message: 'Only the host can reset the game'
            }));
            return;
        }

        currentRoom.resetGame();
        console.log(`Game reset in room ${currentRoom.code}`);
    }

    ws.on('close', () => {
        if (currentRoom && currentPlayer) {
            const isEmpty = currentRoom.removePlayer(currentPlayer);
            
            if (isEmpty) {
                rooms.delete(currentRoom.code);
                console.log(`Room ${currentRoom.code} deleted (empty)`);
            } else {
                currentRoom.broadcast({
                    type: 'playerLeft',
                    players: currentRoom.getPlayersInfo()
                });
            }
            
            console.log(`${currentPlayer.name} left room ${currentRoom.code}`);
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🎯 Corporate Jargon Bingo server running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} to play!`);
});