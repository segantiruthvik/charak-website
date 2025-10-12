// Pricing data (single currency USD)
const pricingData = {
    yoga: {
        oneOnOne: {
            price: '149',
            name: '1-on-1 Yoga Session',
            description: 'Personalized yoga session'
        },
        couples: {
            price: '199',
            name: 'Couples Yoga Classes',
            description: '4 sessions per week'
        }
    },
    rehab: {
        oneOnOne: {
            price: '149',
            name: '1-on-1 Rehab Session',
            description: 'Therapeutic rehab session'
        },
        couples: {
            price: '199',
            name: 'Couples Rehab Classes',
            description: '4 sessions per week'
        }
    }
};

// WhatsApp number
const whatsappNumber = '919100704559'; // Format: country code + number (no + or spaces)

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: 'ease-out'
    });

    // Setup all WhatsApp buttons
    setupWhatsAppButtons();

    // Setup pricing navigation arrows
    setupPricingNavigation();

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

// Setup WhatsApp buttons
function setupWhatsAppButtons() {
    // All booking buttons
    const bookButtons = document.querySelectorAll('.book-btn');
    bookButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const sessionType = this.getAttribute('data-session');
            const price = this.getAttribute('data-price');
            openWhatsApp(sessionType, price);
        });
    });
    
    // Free session button
    const freeSessionBtn = document.getElementById('freeSessionBtn');
    if (freeSessionBtn) {
        freeSessionBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openFreeSessionWhatsApp();
        });
    }
}

// Open WhatsApp with simple message
function openWhatsApp(sessionType, price) {
    const message = `Hey Charak! I am interested in ${sessionType} at $${price}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Open WhatsApp for free session
function openFreeSessionWhatsApp() {
    const message = `Hey Charak! I am interested in a FREE session.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Setup pricing navigation arrows
function setupPricingNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pricingContainer = document.getElementById('pricingContainer');
    
    if (prevBtn && nextBtn && pricingContainer) {
        prevBtn.addEventListener('click', function() {
            const cardWidth = pricingContainer.querySelector('.min-w-\\[75vw\\]').offsetWidth + 24; // 24px for gap
            pricingContainer.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            const cardWidth = pricingContainer.querySelector('.min-w-\\[75vw\\]').offsetWidth + 24; // 24px for gap
            pricingContainer.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        });
    }
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


