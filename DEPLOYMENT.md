# 🚀 Deployment Guide

## Current Status

Your Corporate Jargon Bingo game is **ready to deploy**! The server is currently running locally on port 3000.

## 🌐 Quick Deployment Options

### Recommended: Deploy to Render (Free & Easy)

1. **Create a Render Account**
   - Go to https://render.com
   - Sign up with GitHub

2. **Deploy Your Game**
   - Click "New +" → "Web Service"
   - Choose "Public Git repository" or connect your GitHub
   - Repository URL: Upload the `corporate-jargon-bingo` folder to GitHub first
   
3. **Configure Settings**
   - **Name**: corporate-jargon-bingo
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

4. **Deploy**
   - Click "Create Web Service"
   - Wait 2-3 minutes for deployment
   - Your game will be live at: `https://your-app-name.onrender.com`

### Alternative 1: Railway.app (Super Fast)

1. Visit https://railway.app
2. Click "Start a New Project"
3. Choose "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Node.js and deploys
6. Get your public URL instantly!

### Alternative 2: Heroku (Classic Option)

```bash
# Install Heroku CLI
curl https://cli-assets.heroku.com/install.sh | sh

# Login to Heroku
heroku login

# Create app
heroku create my-corporate-bingo

# Deploy
git init
git add .
git commit -m "Deploy corporate bingo"
git push heroku main

# Open your game
heroku open
```

### Alternative 3: Quick Test with ngrok

Perfect for testing with remote players before official deployment:

```bash
# Install ngrok
npm install -g ngrok

# Terminal 1: Start game server
cd corporate-jargon-bingo
npm start

# Terminal 2: Expose to internet
ngrok http 3000
```

Copy the ngrok URL (e.g., `https://abc123.ngrok.io`) and share with players!

## 📱 How Players Join

Once deployed, share these instructions with your team:

### For the Game Host

1. Go to your game URL (e.g., `https://your-app.onrender.com`)
2. Enter your name
3. Leave room code blank (creates new room)
4. Click "Join Game"
5. **Share the 6-character room code** with all players
6. Wait for everyone to join the lobby
7. Click "Start Game" when ready
8. Use "Call Random Term" to play

### For Players

1. Go to the same game URL
2. Enter your name
3. Enter the **room code** from the host
4. Click "Join Game"
5. Wait in lobby for game to start
6. Click squares when terms are called
7. First to get BINGO wins! 🎉

## 🎯 Game URL Options

After deployment, you can:
- Share the direct URL: `https://your-app.onrender.com`
- Create a short link: Use bit.ly or tinyurl
- Send via email/Slack/Teams
- Add to meeting calendar invites
- Create QR code for easy mobile access

## ⚙️ Environment Variables (Optional)

If you want to customize the port:

**On Render/Railway/Heroku:**
- These platforms automatically set the PORT environment variable
- No action needed!

**For custom hosting:**
```bash
export PORT=8080
npm start
```

## 🔒 Security Note

This game uses WebSocket connections and is designed for corporate team events. For production use:
- Consider adding authentication
- Implement rate limiting
- Use HTTPS (automatic on Render/Railway/Heroku)

## 📊 Monitoring

Most platforms provide:
- Automatic HTTPS
- Server logs
- Uptime monitoring
- Auto-restarts on crashes

## 🎨 Custom Domain (Optional)

To use your own domain:

**On Render:**
1. Go to Settings → Custom Domain
2. Add your domain
3. Update DNS records as shown

**On Heroku:**
```bash
heroku domains:add www.yourdomain.com
```

## 💡 Tips for Corporate Events

1. **Test First**: Deploy and test with 2-3 people before the big event
2. **Share Early**: Send the URL 10 minutes before meeting starts
3. **Backup Plan**: Have ngrok ready as a backup
4. **Host Device**: Use a stable connection for the host
5. **Ice Breaker**: Perfect for virtual meetings and conferences!

## 🆘 Need Help?

Common issues:
- **App sleeping**: Free tiers may sleep after inactivity - first load takes 30 seconds
- **Connection issues**: Check if WebSockets are allowed on your network
- **Room not found**: Rooms expire when empty - create a new one

## 🎉 You're Ready!

Your Corporate Jargon Bingo game is ready to bring fun to your next meeting. Time to synergize and leverage those low-hanging fruits! 🎯