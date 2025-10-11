// Pricing data for different regions
const pricingData = {
    IN: {
        symbol: '₹',
        currency: 'INR',
        name: 'India (₹)',
        yoga: {
            single: '2,800',
            pack: '10,000',
            perSession: '2,500'
        },
        rehab: {
            single: '3,200',
            pack: '11,500',
            perSession: '2,875'
        }
    },
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
    },
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
};

// WhatsApp number (replace with your actual number)
const whatsappNumber = '919876543210'; // Format: country code + number (no + or spaces)

// Current selected region
let currentRegion = 'IN';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: 'ease-out'
    });

    // Load saved region from localStorage or default to IN
    const savedRegion = localStorage.getItem('selectedRegion') || 'IN';
    currentRegion = savedRegion;
    document.getElementById('regionSelector').value = savedRegion;
    updatePrices(savedRegion);

    // Region selector change event
    document.getElementById('regionSelector').addEventListener('change', function(e) {
        const region = e.target.value;
        currentRegion = region;
        localStorage.setItem('selectedRegion', region);
        updatePrices(region);
    });

    // Setup all WhatsApp buttons
    setupWhatsAppButtons();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Update prices on the page based on selected region
function updatePrices(region) {
    const data = pricingData[region];
    
    // Update currency symbols
    document.querySelectorAll('.currency-symbol').forEach(el => {
        el.textContent = data.symbol;
    });
    
    // Update Yoga prices
    document.querySelector('.yoga-single-price').textContent = data.yoga.single;
    document.querySelector('.yoga-pack-price').textContent = data.yoga.pack;
    document.querySelector('.yoga-pack-per-session').textContent = data.yoga.perSession;
    
    // Update Rehab prices
    document.querySelector('.rehab-single-price').textContent = data.rehab.single;
    document.querySelector('.rehab-pack-price').textContent = data.rehab.pack;
    document.querySelector('.rehab-pack-per-session').textContent = data.rehab.perSession;
    
    // Update region display
    document.getElementById('currentRegion').textContent = data.name;
}

// Setup WhatsApp buttons with dynamic links
function setupWhatsAppButtons() {
    // Free trial buttons
    const trialButtons = document.querySelectorAll('.book-trial-btn');
    trialButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsAppTrial();
        });
    });

    // Sticky book button
    document.getElementById('stickyBookBtn').addEventListener('click', function(e) {
        e.preventDefault();
        openWhatsAppTrial();
    });

    // Plan booking buttons
    const planButtons = document.querySelectorAll('.book-plan-btn');
    planButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const service = this.getAttribute('data-service');
            const plan = this.getAttribute('data-plan');
            openWhatsAppPlan(service, plan);
        });
    });
}

// Open WhatsApp for free trial
function openWhatsAppTrial() {
    const region = currentRegion;
    const regionData = pricingData[region];
    
    const message = `Hi Charak! 😊

I'd like to book a FREE 45-minute trial session for 1-on-1 Yoga.

📍 Region: ${regionData.name}
⏰ Preferred time: Between 8:00 AM - 10:00 PM IST
📅 This week works for me

Looking forward to starting my yoga journey!

My name: [Your Name]`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Open WhatsApp for paid plan
function openWhatsAppPlan(service, plan) {
    const region = currentRegion;
    const regionData = pricingData[region];
    
    // Determine price based on service and plan
    let price = '';
    if (service === '1-on-1 Yoga') {
        price = plan === 'Single Session' ? regionData.yoga.single : regionData.yoga.pack;
    } else {
        price = plan === 'Single Session' ? regionData.rehab.single : regionData.rehab.pack;
    }
    
    const message = `Hi Charak! 😊

I'd like to book the following plan:

📋 Service: ${service}
💳 Plan: ${plan}
💰 Price: ${regionData.symbol}${price} (${regionData.currency})
📍 Region: ${regionData.name}

⏰ Preferred time slots: Between 8:00 AM - 10:00 PM IST

Please let me know the available dates and payment details.

My name: [Your Name]`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Add subtle parallax effect on scroll
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // Add any scroll-based effects here
            ticking = false;
        });
        ticking = true;
    }
});

// Console welcome message
console.log(`
╔═══════════════════════════════════════╗
║                                       ║
║   Welcome to Charak Yoga & Rehab!    ║
║                                       ║
║   Transform Your Life Through Yoga    ║
║                                       ║
╚═══════════════════════════════════════╝

Need help? Contact us via:
📱 WhatsApp: +91 98765 43210
📧 Email: charak.yoga@example.com
📷 Instagram: @charakyoga
`);

