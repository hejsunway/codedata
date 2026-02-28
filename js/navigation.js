// --- Mobile Menu Toggle ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.getAttribute('aria-hidden') === 'false';
        mobileMenu.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
        mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
        mobileMenuBtn.querySelector('i').className = isOpen ? 'fas fa-bars' : 'fas fa-times';
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.setAttribute('aria-hidden', 'true');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
        });
    });
}

// --- Active Navigation Link Highlighting (multi-page) ---
const navLinks = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.setAttribute('aria-current', 'true');
    } else {
        link.setAttribute('aria-current', 'false');
    }
});

// --- Close mobile menu on Escape ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.getAttribute('aria-hidden') === 'false') {
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
        mobileMenuBtn.focus();
    }
});
