# 🚀 Step-by-Step Render.com Deployment Guide

## Complete Guide to Deploy Your Corporate Jargon Bingo Game

Follow these exact steps to deploy your game to Render.com for **FREE**!

---

## Prerequisites

Before starting, you need:
- ✅ A GitHub account (free)
- ✅ A Render.com account (free)
- ✅ Your game files (already created!)

**Time Required:** 10-15 minutes

---

## Step 1: Create a GitHub Repository

### 1.1 Go to GitHub
- Open https://github.com
- Sign in (or create a free account)

### 1.2 Create New Repository
1. Click the **"+"** button in top-right corner
2. Select **"New repository"**

### 1.3 Configure Repository
Fill in these details:
- **Repository name**: `corporate-jargon-bingo`
- **Description**: `Multiplayer Corporate Jargon Bingo Game`
- **Visibility**: Choose **Public** (required for free Render hosting)
- **Initialize**: Leave unchecked (we have files already)
- Click **"Create repository"**

### 1.4 Push Your Code to GitHub

**Option A: Use GitHub Desktop (Easier)**
1. Download GitHub Desktop: https://desktop.github.com
2. Install and sign in
3. Click "Add" → "Add Existing Repository"
4. Browse to your `corporate-jargon-bingo` folder
5. Click "Publish repository"

**Option B: Use Command Line**
```bash
# Navigate to your project folder
cd corporate-jargon-bingo

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Corporate Jargon Bingo"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/corporate-jargon-bingo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Verify:** Go to your GitHub repository URL - you should see all your files!

---

## Step 2: Sign Up for Render.com

### 2.1 Create Account
1. Go to https://render.com
2. Click **"Get Started"** or **"Sign Up"**
3. Choose **"Sign up with GitHub"** (easiest option)
4. Authorize Render to access your GitHub account

---

## Step 3: Deploy Your Game on Render

### 3.1 Create New Web Service
1. Once logged in, click **"New +"** button (top-right)
2. Select **"Web Service"**

### 3.2 Connect Your Repository
1. You'll see a list of your GitHub repositories
2. Find **"corporate-jargon-bingo"**
3. Click **"Connect"** next to it

**Don't see your repo?**
- Click "Configure account" to give Render access to your repos
- Or use "Public Git repository" and paste your repo URL

### 3.3 Configure Web Service

Fill in these **EXACT** settings:

**Basic Settings:**
- **Name**: `corporate-jargon-bingo` (or any unique name you prefer)
- **Region**: Choose closest to your location (e.g., "Oregon (US West)")
- **Branch**: `main`
- **Root Directory**: Leave blank
- **Runtime**: Select **"Node"** (should auto-detect)

**Build & Deploy Settings:**
- **Build Command**: 
  ```
  npm install
  ```

- **Start Command**:
  ```
  npm start
  ```

**Advanced Settings:**
- **Plan**: Select **"Free"** (should be selected by default)
- **Environment Variables**: None needed!
- **Auto-Deploy**: Leave checked (Yes)

### 3.4 Deploy!
1. Scroll to the bottom
2. Click **"Create Web Service"**
3. Wait 2-3 minutes while Render builds and deploys

**What's happening:**
```
[1/4] Installing dependencies... ✓
[2/4] Building your app... ✓
[3/4] Starting server... ✓
[4/4] Deploying... ✓
```

---

## Step 4: Access Your Live Game!

### 4.1 Get Your URL
Once deployment is complete (you'll see "Live" status):
1. At the top of the page, you'll see your URL
2. It will be something like: `https://corporate-jargon-bingo.onrender.com`
3. Click the URL to open your game!

### 4.2 Test Your Game
1. Open the URL in your browser
2. Enter your name
3. Leave room code blank
4. Click "Join Game"
5. Share the room code with others!

**🎉 Congratulations! Your game is now live and accessible to anyone with the URL!**

---

## Step 5: Share With Your Team

### Share These Details:

**For the Host (You):**
```
🎯 Corporate Jargon Bingo Game

URL: https://your-app-name.onrender.com

Instructions:
1. Open the URL
2. Enter your name
3. Leave room code BLANK
4. Click "Join Game"
5. Share the room code with your team!
```

**For Players:**
```
🎯 Join Our Bingo Game!

URL: https://your-app-name.onrender.com
Room Code: [You'll get this from the host]

Instructions:
1. Open the URL
2. Enter your name
3. Enter the room code
4. Click "Join Game"
5. Have fun!
```

---

## Important Render.com Notes

### Free Tier Limitations (Important!)

**Sleep After Inactivity:**
- Free tier apps sleep after 15 minutes of inactivity
- First load after sleep takes 30-60 seconds to wake up
- Subsequent loads are instant

**How to Handle:**
1. **Before Meeting**: Open the URL 2 minutes early to wake it up
2. **Keep Alive**: Someone needs to keep the page open during meetings
3. **Upgrade**: Pay $7/month for an always-on instance (optional)

**Monthly Limits:**
- 750 hours/month of free runtime (more than enough!)
- Unlimited bandwidth
- Automatic HTTPS

---

## Managing Your Deployment

### View Logs
1. Go to your Render dashboard
2. Click on your service
3. Click "Logs" tab
4. See real-time server activity

### Update Your Game
1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Updated game"
   git push
   ```
3. Render automatically redeploys (2-3 minutes)

### Environment Variables (If Needed Later)
1. Go to your service dashboard
2. Click "Environment" tab
3. Add variables (e.g., PORT is automatic)

### Custom Domain (Optional)
1. Go to "Settings" tab
2. Click "Custom Domains"
3. Add your domain
4. Update DNS records as shown

---

## Troubleshooting

### Problem: "Application failed to deploy"
**Solution:**
- Check build logs for errors
- Verify `package.json` has correct dependencies
- Make sure `npm install` and `npm start` work locally first

### Problem: "Service Unavailable 503"
**Solution:**
- App is sleeping (free tier)
- Wait 30 seconds and refresh
- The first load after sleep is slow

### Problem: "Can't find module"
**Solution:**
- Add missing dependency to `package.json`
- Run `npm install <package-name> --save` locally
- Push changes to GitHub

### Problem: WebSocket connection fails
**Solution:**
- This shouldn't happen - Render supports WebSockets
- Check browser console for errors
- Try different browser

---

## Monitoring Your Game

### Check Status
1. Dashboard shows "Live" or "Building"
2. Green = working, Red = error
3. Click service name for details

### Monitor Usage
1. Go to "Metrics" tab
2. See CPU, memory, requests
3. Free tier is plenty for most games!

---

## Cost Breakdown

### Free Tier (Current)
- **Cost**: $0/month
- **Runtime**: 750 hours/month
- **Bandwidth**: Unlimited
- **SSL**: Free automatic HTTPS
- **Limitation**: Sleeps after 15 min inactivity

### Starter Plan (Optional Upgrade)
- **Cost**: $7/month
- **Runtime**: Always on
- **Bandwidth**: Unlimited
- **SSL**: Free automatic HTTPS
- **Benefit**: No sleep, instant loads

**Recommendation:** Start with free tier, upgrade only if needed!

---

## Quick Reference Commands

### Local Testing
```bash
npm start
# Open http://localhost:3000
```

### Deploy Updates
```bash
git add .
git commit -m "Your update message"
git push
# Render auto-deploys in 2-3 minutes
```

### Check Render Status
```bash
# Go to: https://dashboard.render.com
# View your service
# Check logs
```

---

## Next Steps After Deployment

1. ✅ **Test thoroughly** - Play a game with friends
2. ✅ **Share URL** - Send to your team
3. ✅ **Bookmark** - Save Render dashboard
4. ✅ **Monitor** - Check logs during first few games
5. ✅ **Enjoy** - Have fun playing!

---

## Success Checklist

Before your first corporate event:
- [ ] Game deployed to Render.com
- [ ] URL tested and working
- [ ] Created a game room successfully
- [ ] Tested with at least 2 players
- [ ] Verified terms are being called
- [ ] Confirmed win detection works
- [ ] Shared URL with team
- [ ] Set calendar reminder to wake app 2 min before event

---

## Support & Help

**Render.com Help:**
- Docs: https://render.com/docs
- Support: https://render.com/support
- Community: https://community.render.com

**Game Issues:**
- Check `QUICK-START.md` for gameplay help
- Check `README.md` for full documentation
- Test locally first with `npm start`

---

## 🎉 You're Done!

Your Corporate Jargon Bingo game is now:
- ✅ Hosted on Render.com
- ✅ Accessible worldwide
- ✅ Free forever (with sleep)
- ✅ Auto-deploys on updates
- ✅ Secured with HTTPS
- ✅ Ready to use!

**Your game URL**: `https://your-app-name.onrender.com`

**Share this URL with your team and start leveraging synergies for maximum paradigm shifts! 🎯**

---

## Visual Deployment Flow

```
Local Computer          GitHub              Render.com
     │                     │                     │
     │  git push          │                     │
     ├─────────────────> │  webhook            │
     │                     ├──────────────────> │
     │                     │                     │ [Build]
     │                     │                     │ [Deploy]
     │                     │                     │
     │                     │              [✓ Live!]
     │                     │                     │
     │  Access: https://your-app.onrender.com   │
     │ <─────────────────────────────────────── │
```

Happy Bingo-ing! 🎯🎉