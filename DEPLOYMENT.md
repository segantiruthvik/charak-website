# 🚀 Deployment Guide - Charak Yoga Website

Step-by-step instructions to get your website live on the internet.

## Option 1: Netlify (Recommended - Easiest)

### Why Netlify?
- ✅ 100% FREE
- ✅ No credit card required
- ✅ Automatic HTTPS/SSL
- ✅ Fast global CDN
- ✅ Drag & drop deployment

### Steps:

1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "Sign Up" (use GitHub, Google, or email)

2. **Deploy Your Site**
   - Click "Add new site" → "Deploy manually"
   - Drag the entire `Charak website` folder into the box
   - Wait 30 seconds... Done! 🎉

3. **Your Site is Live!**
   - You'll get a URL like: `random-name-123.netlify.app`
   - Click "Site settings" → "Change site name" to customize it
   - Example: `charak-yoga.netlify.app`

4. **Add Custom Domain (Optional)**
   - Buy a domain from:
     - [Namecheap](https://namecheap.com) (~₹500/year)
     - [GoDaddy](https://godaddy.com) (~₹700/year)
     - [Domain.com](https://domain.com)
   
   - In Netlify:
     - Go to "Domain settings"
     - Click "Add custom domain"
     - Enter your domain (e.g., `charakyoga.com`)
     - Follow the DNS setup instructions

### Update Your Site:
Just drag the folder again! Netlify will automatically update.

---

## Option 2: Vercel (Great Alternative)

### Why Vercel?
- ✅ FREE forever
- ✅ Lightning fast
- ✅ Automatic HTTPS
- ✅ Simple CLI

### Steps:

1. **Create Account**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Deploy via Website**
   - Click "New Project"
   - Import your folder (upload as ZIP or connect Git)
   - Click "Deploy"
   - Done! 🎉

3. **Deploy via CLI (Alternative)**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   
   # Navigate to your folder
   cd "C:\Users\jai matha di222\Downloads\websites I create\Charak website"
   
   # Deploy
   vercel
   ```

4. **Custom Domain**
   - Go to project settings
   - Add your domain
   - Update DNS records

---

## Option 3: GitHub Pages (Free with Git)

### Why GitHub Pages?
- ✅ FREE forever
- ✅ Works well with version control
- ✅ Simple setup

### Steps:

1. **Create GitHub Account**
   - Visit [github.com](https://github.com)
   - Sign up for free

2. **Create Repository**
   - Click "New repository"
   - Name it: `charak-yoga-website`
   - Make it public
   - Don't initialize with README

3. **Upload Files**
   - Click "uploading an existing file"
   - Drag all your files (index.html, script.js, styles.css, etc.)
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: main → / (root) → Save
   - Wait 2 minutes

5. **Your Site is Live!**
   - URL: `https://yourusername.github.io/charak-yoga-website`

### Custom Domain:
   - Add a file named `CNAME` with your domain
   - Update DNS records at your domain provider

---

## Option 4: Cloudflare Pages (Super Fast)

### Why Cloudflare?
- ✅ FREE
- ✅ Fastest CDN in the world
- ✅ Unlimited bandwidth

### Steps:

1. **Create Account**
   - Visit [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign up for free

2. **Create Project**
   - Click "Create a project"
   - Connect Git repo OR upload files
   - Deploy!

3. **Done!**
   - Your site is live on Cloudflare's global network

---

## Comparing Options

| Feature | Netlify | Vercel | GitHub Pages | Cloudflare |
|---------|---------|--------|--------------|------------|
| **Ease of Use** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Speed** | Fast | Very Fast | Fast | Fastest |
| **Free Plan** | Generous | Generous | Unlimited | Unlimited |
| **Custom Domain** | Easy | Easy | Medium | Easy |
| **Updates** | Drag & drop | CLI/Git | Git only | Git/Upload |
| **Best For** | Beginners | Developers | Git users | Performance |

---

## 🌍 Buying a Domain

### Recommended Registrars:

1. **Namecheap** (Best prices)
   - Go to [namecheap.com](https://namecheap.com)
   - Search for: `charakyoga.com` or `charakyoga.in`
   - Prices: ₹500-800/year (.in) or $10-15/year (.com)

2. **GoDaddy** (Most popular)
   - [godaddy.com](https://godaddy.com)
   - Often has sales
   - Easy management

3. **Cloudflare** (Best value)
   - [cloudflare.com/products/registrar](https://cloudflare.com/products/registrar)
   - At-cost pricing (no markup)
   - Free WHOIS privacy

### Domain Name Ideas:
- `charakyoga.com`
- `charakyoga.in`
- `charakhealthcare.com`
- `yogawithcharak.com`
- `charakyogacoach.com`
- `charakyogastudio.com`

---

## 📊 Adding Analytics (Optional)

### Google Analytics (Free):

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account and property
3. Copy your tracking ID (e.g., `G-XXXXXXXXXX`)
4. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔒 SSL/HTTPS

All recommended platforms automatically provide FREE SSL certificates!
- Netlify: Automatic
- Vercel: Automatic
- GitHub Pages: Automatic
- Cloudflare: Automatic

No setup needed! 🎉

---

## ✅ Post-Deployment Checklist

After deploying, test everything:

- [ ] Site loads properly on desktop
- [ ] Site loads properly on mobile
- [ ] All images load
- [ ] Region selector works
- [ ] Prices update correctly
- [ ] WhatsApp buttons open correctly
- [ ] All links work
- [ ] Animations work smoothly
- [ ] Contact info is correct
- [ ] Instagram link works
- [ ] Email link works
- [ ] Site looks good on different browsers (Chrome, Firefox, Safari)

---

## 🆘 Troubleshooting

### Site not loading?
- Wait 2-5 minutes after deployment
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private mode

### Images not showing?
- Check file paths are correct
- Ensure images folder was uploaded
- Check image file names match HTML

### WhatsApp not working?
- Test on actual mobile device
- Desktop WhatsApp Web should work too
- Verify phone number format in script.js

### Custom domain not working?
- DNS changes take 24-48 hours
- Verify DNS records are correct
- Check domain registrar settings

---

## 📞 Need Help?

If you get stuck:
1. Check the README.md file
2. Google the specific error message
3. Ask ChatGPT or Claude for help
4. Contact support of your hosting platform

---

## 🎯 Recommended Approach

**For beginners:** Start with **Netlify**
- Drag & drop is easiest
- Great free tier
- Simple custom domain setup

**For developers:** Use **Vercel**
- Better CLI tools
- Git integration
- Fast deployments

**For simplicity:** Use **GitHub Pages**
- Free forever
- Version control built-in
- Great for portfolios

---

**Your website will be live in less than 5 minutes! 🚀**

Good luck with your yoga business! 🧘‍♂️✨

