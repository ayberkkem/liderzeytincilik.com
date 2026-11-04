// ========================================
// LIDER ZEYTİNAĞI - JavaScript
// Touch & Mouse Dostu
// ========================================

document.addEventListener('DOMContentLoaded', function() {

    // Mobil Menü
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Navigasyon linklerine tıklayınca mobil menüyü kapat
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Navbar scroll efekti
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '12px 0';
            navbar.style.background = 'rgba(244, 247, 240, 0.98)';
            navbar.style.boxShadow = '0 4px 15px rgba(27, 67, 50, 0.15)';
        } else {
            navbar.style.padding = '18px 0';
            navbar.style.background = 'rgba(244, 247, 240, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(27, 67, 50, 0.08)';
        }
    });

    // Üretim adımlarını scroll'da aktive et (IntersectionObserver)
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.step').forEach(step => observer.observe(step));

    // Form gönderimi
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Gönderiliyor...';
            btn.style.opacity = '0.7';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
                btn.disabled = false;
                alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
                this.reset();
            }, 1200);
        });
    }

    // Dokunmatik cihazlarda :active stillerini tetiklemek için
    document.addEventListener('touchstart', function() {}, {passive: true});
});