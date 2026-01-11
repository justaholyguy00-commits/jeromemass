# Gloria in Excelsis Deo | 天主在天受光荣

A beautiful bilingual Catholic Mass companion web app with English and Mandarin Chinese translations.

🌐 **Live Site:** [jeromemass.com](https://jeromemass.com)

## Features

- 📖 **Order of Mass** - Complete bilingual texts with toggleable Pinyin
- 💬 **Daily Quotes** - Rotating quotes from Scripture, Saints & Theologians  
- 📝 **Reflections** - Personal faith reflections
- 📱 **Mobile-first design** - Hamburger menu, adjustable fonts
- ⚡ **Fast** - Built with React + Vite + Tailwind CSS

---

## Quick Start

```bash
npm install
npm run dev
```

---

## Deployment to Vercel (FREE)

### 1. Create GitHub Repo & Push Code

```bash
cd jeromemass
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jeromemass.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"Add New Project"** → Select your repo
3. Click **"Deploy"**

### 3. Connect Domain (GoDaddy)

In Vercel: **Settings → Domains → Add `jeromemass.com`**

In GoDaddy DNS:
- **A Record:** `@` → `76.76.21.21`
- **CNAME:** `www` → `cname.vercel-dns.com`

---

## 🔐 Git Account Switching Guide

### Option 1: Use HTTPS with Token (Recommended)

**Log out of current account:**
```bash
# Clear stored credentials
git config --global --unset credential.helper
git credential-cache exit 2>/dev/null

# On macOS, remove from Keychain:
git credential-osxkeychain erase
host=github.com
protocol=https
# Press Enter twice

# On Windows:
git credential-manager-core erase
host=github.com
protocol=https
# Press Enter twice
```

**Set up new account:**
```bash
# Create a Personal Access Token on GitHub:
# GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
# Generate with 'repo' scope

# When you push, use your token as password:
git push -u origin main
# Username: your-other-username
# Password: ghp_xxxxxxxxxxxx (your token)
```

### Option 2: Use SSH Keys (Most Flexible)

**Generate SSH key for second account:**
```bash
# Generate new key
ssh-keygen -t ed25519 -C "your-other-email@example.com" -f ~/.ssh/id_github_other

# Start SSH agent
eval "$(ssh-agent -s)"

# Add the key
ssh-add ~/.ssh/id_github_other

# Copy public key
cat ~/.ssh/id_github_other.pub
# Copy this output
```

**Add to GitHub:**
1. Go to GitHub (other account) → Settings → SSH Keys
2. Click "New SSH key"
3. Paste the public key

**Configure SSH to use the right key:**
```bash
# Edit or create ~/.ssh/config
nano ~/.ssh/config
```

Add:
```
# Default GitHub account
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519

# Second GitHub account
Host github-other
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_github_other
```

**Use the second account:**
```bash
# Instead of:
git remote add origin git@github.com:username/repo.git

# Use:
git remote add origin git@github-other:other-username/repo.git
git push -u origin main
```

### Option 3: Per-Repository Config

```bash
# Set user for just this repo
cd jeromemass
git config user.name "Your Other Name"
git config user.email "other-email@example.com"

# Use SSH with alias (see Option 2) or HTTPS with token
git remote set-url origin https://github.com/other-username/jeromemass.git
```

### Quick Check: Which Account Am I Using?

```bash
# Check global config
git config --global user.name
git config --global user.email

# Check local repo config
git config user.name
git config user.email

# Test SSH connection
ssh -T git@github.com
```

---

## Updating Content

### Add New Quotes
Edit `src/data/quotesData.js`:
```javascript
{ id: 32, text: "Your quote", source: "Author", category: "saints" }
```

### Add New Reflections
Edit `src/data/reflectionsData.js` following the existing format.

After changes:
```bash
git add .
git commit -m "Added new content"
git push
```

Vercel auto-deploys in ~30 seconds!

---

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Lucide React icons
- Google Fonts (Cormorant Garamond, Noto Serif SC)

---

*Ad Maiorem Dei Gloriam* 🙏
# jeromemass
