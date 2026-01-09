# 🎯 Corporate Jargon Bingo

A fun, multiplayer bingo game featuring all your favorite corporate buzzwords! Perfect for meetings, conferences, or team building events.

## 🎮 Features

- **Real-time Multiplayer**: Play with unlimited players using WebSocket connections
- **Room System**: Create private rooms with unique codes or join existing ones
- **Host Controls**: Game host can call random terms and reset the game
- **Unique Cards**: Each player gets a randomized 5x5 bingo card
- **Win Detection**: Automatic detection of winning patterns (rows, columns, diagonals)
- **Beautiful UI**: Modern, responsive design that works on all devices
- **90+ Corporate Terms**: Featuring classics like "Synergy", "Circle Back", "Low-Hanging Fruit", and more!

## 🚀 Quick Start

### Local Setup

1. **Install Dependencies**
   ```bash
   cd corporate-jargon-bingo
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

The server will run on port 3000 by default.

## 🎲 How to Play

### For the Host

1. **Enter your name** on the join screen
2. **Leave room code blank** to create a new room
3. Click "Join Game" - you'll be assigned as the host
4. **Share the room code** with other players
5. **Wait for players** to join the lobby
6. Click "Start Game" when everyone is ready
7. **Call random terms** using the "Call Random Term" button
8. Players mark their cards when terms are called
9. First to get BINGO wins!

### For Players

1. **Enter your name** on the join screen
2. **Enter the room code** shared by the host
3. Click "Join Game"
4. Wait for the host to start the game
5. **Click squares** on your bingo card when terms are called
6. Get 5 in a row (horizontal, vertical, or diagonal) to win!

## 🌐 Deployment Options

### Option 1: Deploy to Heroku (Free)

1. Install Heroku CLI: `https://devcenter.heroku.com/articles/heroku-cli`

2. Login and create app:
   ```bash
   heroku login
   heroku create your-bingo-game
   ```

3. Deploy:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

4. Open your game:
   ```bash
   heroku open
   ```

### Option 2: Deploy to Railway (Easy)

1. Go to [Railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Connect your GitHub repository
4. Railway will auto-detect Node.js and deploy
5. Get your public URL from the deployment

### Option 3: Deploy to Render (Free)

1. Go to [Render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your repository
4. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click "Create Web Service"

### Option 4: Use ngrok for Testing

For quick testing with remote players:

```bash
# Install ngrok
npm install -g ngrok

# In one terminal, start the game
npm start

# In another terminal, expose port 3000
ngrok http 3000
```

Share the ngrok URL with players!

## 📁 Project Structure

```
corporate-jargon-bingo/
├── public/
│   ├── index.html      # Main game interface
│   ├── styles.css      # Game styling
│   └── client.js       # Client-side game logic
├── server.js           # WebSocket server
├── jargon-terms.js     # List of corporate terms
├── package.json        # Dependencies
└── README.md          # This file
```

## 🎯 Game Rules

### Winning Patterns

You can win with any of these patterns:
- **5 horizontal squares** in any row
- **5 vertical squares** in any column
- **5 diagonal squares** (either direction)

The center square is **FREE** and automatically marked!

### Gameplay

1. Host creates a room and starts the game
2. Host calls out random corporate jargon terms
3. Players click squares matching called terms
4. First player to complete a pattern wins
5. Host can reset the game to play again

## 🔧 Technical Details

- **Frontend**: Pure JavaScript (no frameworks)
- **Backend**: Node.js with Express
- **Real-time**: WebSocket (ws library)
- **Styling**: Modern CSS with gradients and animations
- **Responsive**: Works on desktop, tablet, and mobile

## 🎨 Customization

### Add Your Own Terms

Edit `jargon-terms.js` to add your own corporate buzzwords:

```javascript
const JARGON_TERMS = [
  "Your Custom Term",
  "Another Buzzword",
  // ... add more
];
```

### Change Colors

Edit `public/styles.css` to customize the color scheme:

```css
/* Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Primary button color */
.btn-primary { background: #667eea; }
```

## 🐛 Troubleshooting

**Connection Issues**
- Make sure the server is running on port 3000
- Check your firewall settings
- Verify WebSocket support in your browser

**Room Not Found**
- Room codes are case-sensitive
- Rooms are deleted when all players leave
- Create a new room if needed

**Game Not Starting**
- Only the host can start the game
- Make sure at least one player has joined

## 📝 License

MIT License - Feel free to use this for your corporate events!

## 🎉 Have Fun!

May the odds be ever in your favor, and remember to always "circle back" and "touch base" for maximum synergy! 🎯