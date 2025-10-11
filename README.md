# Charak Yoga & Rehab Website 🧘‍♂️

A beautiful, modern, and fully responsive website for a yoga and rehabilitation coaching business. Features animated scroll effects, multi-currency pricing, and WhatsApp integration.

## ✨ Features

- 🎨 **Beautiful Design** - Modern, clean interface with sage green theme
- 📱 **Mobile-First** - Fully responsive on all devices
- 🌍 **Multi-Region Support** - Automatic pricing for India, USA, and Canada
- 💬 **WhatsApp Integration** - Direct booking with pre-filled messages
- ✨ **Smooth Animations** - Scroll-based fade-in effects using AOS library
- 🚀 **Fast Loading** - Optimized performance with minimal dependencies
- ♿ **Accessible** - WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling
- **Vanilla JavaScript** - No frameworks needed
- **AOS Library** - Animate on scroll effects
- **Google Fonts** - Poppins & Playfair Display

## 📋 Sections Included

1. **Hero Section** - Eye-catching introduction with CTAs
2. **Services** - 1-on-1 Yoga & 1-on-1 Rehab details
3. **Pricing** - Dynamic pricing based on region selection
4. **How It Works** - 4-step process explanation
5. **FAQ** - Common questions answered
6. **Testimonials** - Social proof from happy clients
7. **Contact/Footer** - Multiple contact methods

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser. That's it!

### Option 2: Local Server (Recommended)
For best results, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using VS Code
# Install "Live Server" extension and click "Go Live"
```

Then visit `http://localhost:8000`

## 🔧 Customization Guide

### 1. Update Contact Information

Edit `script.js` and change:
```javascript
const whatsappNumber = '919876543210'; // Your WhatsApp number
```

Edit `index.html` and update:
- Email address in footer
- Instagram handle/link
- WhatsApp number display

### 2. Update Pricing

Edit `script.js` in the `pricingData` object:
```javascript
const pricingData = {
    IN: {
        yoga: {
            single: '2,800',    // Single session price
            pack: '10,000',     // 4-session pack price
            perSession: '2,500' // Price per session in pack
        },
        // ... same for rehab
    },
    // ... same for US and CA
};
```

### 3. Change Colors

Edit the Tailwind config in `index.html` (in the `<script>` tag):
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                sage: {
                    // Customize your color palette
                }
            }
        }
    }
}
```

### 4. Replace Images

Current images are placeholders from Unsplash. Replace them with your own:

In `index.html`, find all `<img>` tags and update the `src` attribute:
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

**Recommended image sizes:**
- Hero image: 600×800px
- Service images: 600×400px
- Keep images under 500KB each

### 5. Update Text Content

Edit `index.html` and modify:
- Your name and title
- Service descriptions
- FAQ questions and answers
- Testimonials (or remove the section)
- Footer text

### 6. Modify Regions

To add/remove regions, edit `script.js`:
```javascript
const pricingData = {
    UK: {  // Add new region
        symbol: '£',
        currency: 'GBP',
        name: 'UK (£)',
        // ... pricing
    }
};
```

Then update the `<select>` in `index.html`:
```html
<option value="UK">🇬🇧 UK (£)</option>
```

## 📱 WhatsApp Integration

The site automatically generates WhatsApp deep links with pre-filled messages including:
- Selected service (Yoga or Rehab)
- Chosen plan (Single or Pack)
- Current region and currency
- Preferred time slots

**Format:** `https://wa.me/{NUMBER}?text={ENCODED_MESSAGE}`

## 🎨 Animation Customization

Animations use the AOS (Animate On Scroll) library. You can customize in `index.html`:

```html
<div data-aos="fade-up"           <!-- Animation type -->
     data-aos-duration="800"      <!-- Duration in ms -->
     data-aos-delay="100"         <!-- Delay in ms -->
     data-aos-once="true">        <!-- Animate once -->
    Content
</div>
```

**Available animations:**
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `slide-up`, `slide-down`
- And many more (see [AOS documentation](https://michalsnik.github.io/aos/))

## 🌐 Deployment

### Deploy to Netlify (Free & Easy)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your entire folder
3. Your site is live! 🎉

**Custom domain (optional):**
- Buy a domain from Namecheap/GoDaddy (~₹500/year)
- Connect it in Netlify's domain settings

### Deploy to Vercel

```bash
npx vercel
```

### Deploy to GitHub Pages

1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch → Save
5. Your site is live at `username.github.io/repo-name`

## 📂 File Structure

```
charak-yoga-website/
├── index.html          # Main HTML file
├── script.js           # JavaScript logic
├── styles.css          # Custom CSS styles
├── README.md           # Documentation
└── assets/             # (Create this folder)
    ├── images/         # Your photos
    └── icons/          # Custom icons
```

## ✅ Pre-Launch Checklist

- [ ] Update WhatsApp number
- [ ] Update email address
- [ ] Update Instagram link
- [ ] Verify all pricing is correct
- [ ] Replace placeholder images
- [ ] Test on mobile device
- [ ] Test WhatsApp links
- [ ] Check all internal links work
- [ ] Proofread all text content
- [ ] Test region selector
- [ ] Verify contact methods work

## 🐛 Troubleshooting

**Animations not working?**
- Check browser console for errors
- Ensure AOS library is loading (check internet connection)
- Clear browser cache

**WhatsApp links not working?**
- Verify phone number format (country code + number, no + or spaces)
- Test in an actual mobile browser
- Check message encoding

**Prices not updating?**
- Check browser console for JavaScript errors
- Verify `script.js` is loading
- Clear localStorage: `localStorage.clear()`

## 📝 License

This website is for Charak Yoga & Rehab. Modify and use as needed.

## 🤝 Support

For questions or customization help:
- 📧 Email: charak.yoga@example.com
- 📱 WhatsApp: +91 98765 43210
- 📷 Instagram: @charakyoga

---

**Made with ❤️ for better health & wellness**

## 🔮 Future Enhancements (Optional)

- [ ] Add booking calendar integration
- [ ] Create blog section
- [ ] Add video testimonials
- [ ] Implement email signup form
- [ ] Add Google Analytics
- [ ] Create admin dashboard
- [ ] Multiple language support
- [ ] Dark mode toggle

