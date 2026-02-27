// --- FAQ Toggle with Keyboard Support ---
document.querySelectorAll('.faq-item').forEach(item => {
    const toggle = () => {
        const isOpen = item.getAttribute('aria-expanded') === 'true';
        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) {
                other.setAttribute('aria-expanded', 'false');
            }
        });
        item.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    };

    item.addEventListener('click', toggle);
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    });
});
