# 🎨 Customization Guide - Charak Yoga Website

This guide will help you personalize the website with your own content, images, and information.

---

## 📝 Step 1: Update Your Contact Information

### WhatsApp Number

**File:** `script.js` (Line 40)

```javascript
// Replace with YOUR WhatsApp number
// Format: country code + number (no + or spaces)
const whatsappNumber = '919876543210'; // Change this!
```

**Example formats:**
- India: `919876543210` (91 + 10-digit number)
- USA: `14155551234` (1 + 10-digit number)
- Canada: `16135551234` (1 + 10-digit number)

### Email Address

**File:** `index.html` (Search for "charak.yoga@example.com")

Find and replace ALL instances with your real email:
```html
<!-- In the footer -->
<span>charak.yoga@example.com</span>

<!-- Change to -->
<span>your.email@gmail.com</span>
```

### Instagram

**File:** `index.html` (Search for "instagram.com/charakyoga")

Replace with your Instagram handle:
```html
<!-- Find -->
<a href="https://instagram.com/charakyoga" target="_blank">

<!-- Change to -->
<a href="https://instagram.com/YOUR_HANDLE" target="_blank">
```

---

## 💰 Step 2: Set Your Pricing

**File:** `script.js` (Lines 2-38)

### For India (INR):
```javascript
IN: {
    symbol: '₹',
    currency: 'INR',
    name: 'India (₹)',
    yoga: {
        single: '2,800',      // Single session price
        pack: '10,000',       // 4-pack price
        perSession: '2,500'   // Per-session in pack
    },
    rehab: {
        single: '3,200',      // Single rehab session
        pack: '11,500',       // 4-pack rehab
        perSession: '2,875'   // Per-session in pack
    }
}
```

### For USA (USD):
```javascript
US: {
    symbol: '$',
    currency: 'USD',
    name: 'USA ($)',
    yoga: {
        single: '40',
        pack: '150',
        perSession: '37.50'
    },
    rehab: {
        single: '50',
        pack: '180',
        perSession: '45'
    }
}
```

### For Canada (CAD):
```javascript
CA: {
    symbol: 'C$',
    currency: 'CAD',
    name: 'Canada (C$)',
    yoga: {
        single: '55',
        pack: '200',
        perSession: '50'
    },
    rehab: {
        single: '65',
        pack: '240',
        perSession: '60'
    }
}
```

**💡 Tip:** Make sure `perSession` = `pack` ÷ 4

---

## 🖼️ Step 3: Add Your Images

### Create Images Folder

Create this folder structure:
```
Charak website/
├── assets/
│   └── images/
│       ├── hero-yoga.jpg       (Main background image)
│       ├── yoga-service.jpg    (1-on-1 Yoga service)
│       ├── rehab-service.jpg   (1-on-1 Rehab service)
│       └── profile.jpg         (Your photo - optional)
```

### Replace Image URLs

**File:** `index.html`

Find these lines and replace with your images:

#### Hero Section (Line ~110):
```html
<!-- Current (Unsplash placeholder) -->
<img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=800&fit=crop" 

<!-- Change to -->
<img src="assets/images/hero-yoga.jpg"
```

#### Yoga Service (Line ~125):
```html
<!-- Current -->
<img src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop"

<!-- Change to -->
<img src="assets/images/yoga-service.jpg"
```

#### Rehab Service (Line ~155):
```html
<!-- Current -->
<img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"

<!-- Change to -->
<img src="assets/images/rehab-service.jpg"
```

### Image Requirements:
- **Format:** JPG or WebP
- **Size:** Under 500KB each (use [TinyPNG](https://tinypng.com) to compress)
- **Dimensions:**
  - Hero: 600×800px (portrait)
  - Services: 600×400px (landscape)

---

## 📱 Step 4: Update Your Name & Bio

**File:** `index.html`

### Header Name (Line ~65):
```html
<h1 class="font-display text-xl font-bold text-sage-800">Charak</h1>
<p class="text-xs text-sage-600">Yoga & Rehab Coach</p>

<!-- Change "Charak" to your name -->
```

### Hero Section (Line ~95):
```html
<h1 class="font-display text-4xl md:text-6xl font-bold text-sage-900 mb-6 leading-tight">
    Transform Your Life Through<br>
    <span class="text-sage-600">Personalized Yoga</span>
</h1>
<p class="text-lg text-sage-700 mb-4 leading-relaxed">
    This is <strong>Charak</strong>, a certified Yoga & Rehab Coach. Thank you for connecting! 😊
</p>

<!-- Update with your intro -->
```

---

## 🎨 Step 5: Change Colors (Optional)

**File:** `index.html` (Lines 15-30)

The site uses a "sage green" theme. To change:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                sage: {
                    // Change these hex color codes
                    500: '#76895f',  // Main brand color
                    600: '#5d6d4a',  // Darker variant
                    700: '#4a563c',  // Even darker
                    // ... etc
                }
            }
        }
    }
}
```

**Suggested Themes:**

### Ocean Blue:
```javascript
ocean: {
    500: '#4A90A4',
    600: '#357A8F',
    700: '#286575',
}
```

### Warm Orange:
```javascript
warm: {
    500: '#E07A5F',
    600: '#C5644D',
    700: '#A54E3B',
}
```

### Purple Zen:
```javascript
zen: {
    500: '#8B7AB8',
    600: '#7461A0',
    700: '#5E4F88',
}
```

---

## ❓ Step 6: Customize FAQ Section

**File:** `index.html` (Search for "Frequently Asked Questions")

Add/remove/modify questions:

```html
<div class="bg-white rounded-xl shadow-lg p-6">
    <h3 class="font-display text-xl font-bold text-sage-900 mb-3">
        ❓ Your Question Here?
    </h3>
    <p class="text-sage-700">
        Your answer here...
    </p>
</div>
```

---

## 💬 Step 7: Update Testimonials

**File:** `index.html` (Search for "What People Say")

### Option A: Add Real Testimonials

Replace the dummy testimonials with real ones:

```html
<div class="bg-sage-50 rounded-xl p-8 shadow-lg">
    <div class="flex items-center gap-1 mb-4">
        <span class="text-yellow-500">⭐⭐⭐⭐⭐</span>
    </div>
    <p class="text-sage-700 italic mb-6">
        "Your client's testimonial here..."
    </p>
    <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-sage-300 rounded-full flex items-center justify-center text-sage-700 font-bold">
            J  <!-- First letter of name -->
        </div>
        <div>
            <p class="font-semibold text-sage-900">John Doe</p>
            <p class="text-sm text-sage-600">Job Title, City</p>
        </div>
    </div>
</div>
```

### Option B: Remove Section

Delete the entire testimonials section (around Line 390-480) if you don't have testimonials yet.

---

## ⏰ Step 8: Update Business Hours

**File:** `index.html` (Search for "8:00–22:00 IST")

Change to your actual availability:

```html
<p class="text-sm text-sage-600 mt-4">
    ⏰ Trial slots available: 8:00 AM – 10:00 PM IST
</p>

<!-- Change to your hours -->
```

---

## 🌍 Step 9: Add/Remove Regions

To add a new region (e.g., UK, Australia):

### In `script.js`:
```javascript
const pricingData = {
    // ... existing regions
    UK: {
        symbol: '£',
        currency: 'GBP',
        name: 'UK (£)',
        yoga: {
            single: '35',
            pack: '130',
            perSession: '32.50'
        },
        rehab: {
            single: '45',
            pack: '160',
            perSession: '40'
        }
    }
};
```

### In `index.html`:
```html
<select id="regionSelector">
    <option value="IN">🇮🇳 India (₹)</option>
    <option value="US">🇺🇸 USA ($)</option>
    <option value="CA">🇨🇦 Canada (C$)</option>
    <option value="UK">🇬🇧 UK (£)</option>  <!-- Add this -->
</select>
```

---

## 🔧 Step 10: Modify Services

**File:** `index.html` (Search for "Services I Offer")

### Change Service Names:
```html
<h3 class="font-display text-3xl font-bold text-sage-900 mb-4">
    🧘‍♂️ 1-on-1 Yoga  <!-- Change this -->
</h3>
```

### Update Service Descriptions:
```html
<p class="text-sage-700 mb-4 leading-relaxed">
    Your service description here...
</p>
```

### Modify Service Features:
```html
<ul class="space-y-2 mb-6">
    <li class="flex items-start gap-2">
        <span class="text-sage-500 mt-1">✓</span>
        <span class="text-sage-700">Your feature here</span>
    </li>
    <!-- Add more features -->
</ul>
```

---

## 🎬 Step 11: Add Videos (Optional)

### YouTube Videos:

1. Upload your video to YouTube
2. Set it as "Unlisted" (if you don't want it public)
3. Get the video ID from URL: `youtube.com/watch?v=VIDEO_ID`
4. Add to `index.html`:

```html
<div class="aspect-video">
    <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
```

---

## ✅ Testing Your Changes

After making changes:

1. **Save all files**
2. **Open `index.html` in browser** (or refresh if already open)
3. **Test each change:**
   - Click all buttons
   - Test region selector
   - Verify prices update
   - Test WhatsApp links on mobile
   - Check all images load
   - Test on different screen sizes

---

## 🆘 Common Issues

### Prices not updating?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check for JavaScript errors in browser console (F12)

### Images not showing?
- Check file paths match exactly (case-sensitive)
- Ensure images are in `assets/images/` folder
- File names should have no spaces

### WhatsApp link not working?
- Verify phone number format in `script.js`
- Test on actual mobile device
- Check there are no extra spaces or characters

### Colors not changing?
- Make sure you saved the file
- Clear browser cache
- Check for syntax errors in Tailwind config

---

## 📚 Additional Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs) - For styling
- [AOS Library](https://michalsnik.github.io/aos/) - For animations
- [Unsplash](https://unsplash.com) - Free stock photos
- [TinyPNG](https://tinypng.com) - Compress images
- [Coolors](https://coolors.co) - Color palette generator

---

## 💡 Pro Tips

1. **Keep it simple** - Don't overcomplicate the design
2. **Use high-quality images** - First impression matters
3. **Test on mobile** - Most visitors will be on phones
4. **Keep text concise** - People scan, they don't read
5. **Clear CTAs** - Make it obvious how to book
6. **Fast loading** - Compress all images
7. **Regular updates** - Keep testimonials fresh

---

**Need help?** Re-read the README.md or DEPLOYMENT.md files, or ask for assistance! 🙏

Happy customizing! 🎨✨

