# 🎯 Quick Start Guide

## Start Playing in 60 Seconds!

### Step 1: Start the Server (5 seconds)

```bash
cd corporate-jargon-bingo
npm start
```

You should see:
```
🎯 Corporate Jargon Bingo server running on port 3000
Open http://localhost:3000 to play!
```

### Step 2: Open in Browser (5 seconds)

Open `http://localhost:3000` in your web browser

### Step 3: Create a Game (10 seconds)

**As the Host:**
1. Enter your name (e.g., "Sarah")
2. Leave room code blank
3. Click "Join Game"
4. You'll see a 6-character room code (e.g., "XY12AB")

### Step 4: Invite Players (10 seconds)

Share this info with your team:
```
🎯 Join our Corporate Jargon Bingo game!
URL: http://localhost:3000
Room Code: XY12AB
```

**Players:**
1. Open the URL
2. Enter your name
3. Enter the room code
4. Click "Join Game"

### Step 5: Start Playing! (30 seconds)

**Host Controls:**
- Wait for all players to join
- Click "Start Game"
- Click "Call Random Term" to call out buzzwords
- Players click matching squares on their cards
- First to get 5 in a row wins!

## 🎮 Gameplay Tips

- **FREE square** in the center is automatic
- **Only click squares** after terms are called
- **Win conditions**: 5 horizontal, vertical, or diagonal
- **Host can reset** the game anytime

## 📱 Playing Remotely?

### Option 1: Quick Test with ngrok

```bash
# Terminal 1
npm start

# Terminal 2
ngrok http 3000
```

Share the ngrok URL with remote players!

### Option 2: Deploy for Real

See `DEPLOYMENT.md` for free deployment to:
- Render.com (recommended)
- Railway.app
- Heroku

## 🎯 Sample Corporate Terms

The game includes 90+ terms like:
- "Synergy" ✨
- "Circle Back" 🔄
- "Low-Hanging Fruit" 🍎
- "Think Outside the Box" 📦
- "Move the Needle" 📊
- "Deep Dive" 🤿
- "Touch Base" ⚾
- And many more!

## 🎉 Perfect For

- Virtual team meetings
- Quarterly reviews
- Training sessions
- Conference calls
- Team building events
- Breaking the ice

## ❓ Troubleshooting

**Can't connect?**
- Make sure the server is running
- Check you're using the correct URL
- Verify the room code is correct

**Game won't start?**
- Only the host can start the game
- Make sure you're the first person in the room

**Server issues?**
- Stop with `Ctrl+C`
- Restart with `npm start`

## 🚀 Next Steps

1. ✅ Test locally with a friend
2. ✅ Add your own custom terms in `jargon-terms.js`
3. ✅ Deploy to production for company-wide fun
4. ✅ Share during your next all-hands meeting!

---

**Now go forth and synergize! May the best circle-backer win! 🎯**