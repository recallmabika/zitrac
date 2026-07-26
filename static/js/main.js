(function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const iconOpen = document.getElementById('iconOpen');
    const iconClose = document.getElementById('iconClose');
    if (!menuBtn || !mobileMenu || !iconOpen || !iconClose) return;

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
    });
})();

(function() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    let current = 0;
    setInterval(() => {
        const next = (current + 1) % slides.length;
        slides[next].classList.add('is-active');
        slides[current].classList.remove('is-active');
        current = next;
    }, 6000);
})();

(function() {
    const cards = document.querySelectorAll('.stat-flip');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
})();

(function() {
    const track = document.getElementById('servicesTrack');
    const prevBtn = document.getElementById('servicesPrev');
    const nextBtn = document.getElementById('servicesNext');
    if (!track || !prevBtn || !nextBtn) return;

    const wrapper = track.parentElement;
    let currentIndex = 0;
    let autoplayTimer = null;
    let isAnimating = false;

    const DIRECTIONS = ['from-top', 'from-bottom'];
    const EXIT_MS = 700;
    const ENTER_MS = 900;

    function slideWidth() {
        const firstSlide = track.querySelector('.service-slide');
        return firstSlide ? firstSlide.getBoundingClientRect().width : wrapper.clientWidth;
    }

    function visibleCount() {
        return Math.round(wrapper.clientWidth / slideWidth());
    }

    function maxIndex() {
        const total = track.querySelectorAll('.service-slide').length;
        return Math.max(total - visibleCount(), 0);
    }

    function visibleSlides() {
        return Array.from(track.querySelectorAll('.service-slide')).filter(slide => {
            const rect = slide.getBoundingClientRect();
            const wrapRect = wrapper.getBoundingClientRect();
            return rect.right > wrapRect.left && rect.left < wrapRect.right;
        });
    }

    function jumpTo(index) {
        currentIndex = index;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${currentIndex * slideWidth()}px)`;
        void track.offsetWidth;
        track.style.transition = '';
    }

    function transitionTo(index) {
        if (isAnimating || index === currentIndex) return;
        isAnimating = true;

        const outgoing = visibleSlides();
        const spinClass = Math.random() > 0.5 ? 'spin-cw' : 'spin-ccw';

        outgoing.forEach(slide => {
            slide.classList.add('slide-exit', spinClass);
        });

        setTimeout(() => {
            jumpTo(index);
            const incoming = visibleSlides();
            const enterDirection = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
            const enterSpin = Math.random() > 0.5 ? 'spin-cw' : 'spin-ccw';

            outgoing.forEach(slide => slide.classList.remove('slide-exit', 'spin-cw', 'spin-ccw'));

            incoming.forEach(slide => {
                slide.classList.add('slide-enter', enterDirection, enterSpin);
            });

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    incoming.forEach(slide => {
                        slide.classList.add('slide-enter-active');
                    });
                });
            });

            setTimeout(() => {
                incoming.forEach(slide => {
                    slide.classList.remove('slide-enter', 'slide-enter-active', enterDirection, enterSpin);
                });
                isAnimating = false;
            }, ENTER_MS);
        }, EXIT_MS);
    }

    function goTo(direction) {
        const next = Math.min(Math.max(currentIndex + direction, 0), maxIndex());
        transitionTo(next);
    }

    function goToRandom() {
        const max = maxIndex();
        if (max <= 0) return;

        let next;
        do {
            next = Math.floor(Math.random() * (max + 1));
        } while (next === currentIndex && max > 0);

        transitionTo(next);
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(goToRandom, 6000);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    prevBtn.addEventListener('click', () => { goTo(-1); startAutoplay(); });
    nextBtn.addEventListener('click', () => { goTo(1); startAutoplay(); });

    window.addEventListener('resize', () => {
        currentIndex = Math.min(currentIndex, maxIndex());
        jumpTo(currentIndex);
    });

    wrapper.addEventListener('mouseenter', stopAutoplay);
    wrapper.addEventListener('mouseleave', startAutoplay);
    wrapper.addEventListener('touchstart', stopAutoplay, { passive: true });
    wrapper.addEventListener('touchend', startAutoplay, { passive: true });

    startAutoplay();
})();

(function() {
    const slides = document.querySelectorAll('.service-slide');
    if (!slides.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    slides.forEach(slide => observer.observe(slide));
})();

(function() {
    const btn = document.getElementById('scrollTopBtn');
    const servicesSection = document.getElementById('servicesSection');
    if (!btn || !servicesSection) return;

    const pastServices = () => {
        const rect = servicesSection.getBoundingClientRect();
        return rect.bottom <= 0; // section has scrolled fully above viewport
    };

    window.addEventListener('scroll', () => {
        btn.classList.toggle('is-visible', pastServices());
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

(function() {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(item => {
        const summary = item.querySelector('.faq-summary');
        const content = item.querySelector('.faq-content');
        if (!summary || !content) return;

        summary.addEventListener('click', (e) => {
            e.preventDefault();

            if (item.hasAttribute('open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                requestAnimationFrame(() => {
                    content.style.maxHeight = '0px';
                });
                content.addEventListener('transitionend', function handler() {
                    item.removeAttribute('open');
                    content.removeEventListener('transitionend', handler);
                }, { once: true });
            } else {
                item.setAttribute('open', '');
                content.style.maxHeight = '0px';
                requestAnimationFrame(() => {
                    content.style.maxHeight = content.scrollHeight + 'px';
                });
                content.addEventListener('transitionend', function handler() {
                    content.style.maxHeight = 'none';
                    content.removeEventListener('transitionend', handler);
                }, { once: true });
            }
        });
    });
})();

(function() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    els.forEach(el => observer.observe(el));
})();

(function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const submitBtn = document.getElementById('submitBtn');
    const submitLabel = document.getElementById('submitLabel');
    const submitSpinner = document.getElementById('submitSpinner');
    const banner = document.getElementById('formBanner');

    function showFieldError(input, message) {
        const errorEl = input.closest('div').querySelector('.field-error');
        input.classList.add('border-red-600');
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.remove('hidden');
        }
    }

    function clearFieldError(input) {
        const errorEl = input.closest('div').querySelector('.field-error');
        input.classList.remove('border-red-600');
        if (errorEl) {
            errorEl.textContent = '';
            errorEl.classList.add('hidden');
        }
    }

    function clearAllErrors() {
        form.querySelectorAll('.field-error').forEach(el => {
            el.textContent = '';
            el.classList.add('hidden');
        });
        form.querySelectorAll('input, textarea').forEach(el => el.classList.remove('border-red-600'));
    }

    function showBanner(type, title, text) {
        banner.classList.remove(
            'hidden', 'fade-out',
            'border-green-600', 'bg-green-50',
            'border-red-600', 'bg-red-50'
        );

        if (type === 'success') {
            banner.classList.add('border-green-600', 'bg-green-50');
            banner.innerHTML = `
                <p class="font-bold text-green-800">${title}</p>
                <p class="mt-1 text-sm text-green-700">${text}</p>
            `;
        } else {
            banner.classList.add('border-red-600', 'bg-red-50');
            banner.innerHTML = `
                <p class="font-bold text-red-800">${title}</p>
                <p class="mt-1 text-sm text-red-700">${text}</p>
            `;
        }

        banner.scrollIntoView({ behavior: 'smooth', block: 'center' });

        clearTimeout(banner._hideTimer);
        banner._hideTimer = setTimeout(() => {
            banner.classList.add('fade-out');
            setTimeout(() => {
                banner.classList.add('hidden');
                banner.classList.remove('fade-out');
            }, 500);
        }, 6000);
    }

    function validate() {
        clearAllErrors();
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name.value.trim()) {
            showFieldError(name, 'Please enter your name.');
            isValid = false;
        }

        if (!email.value.trim()) {
            showFieldError(email, 'Please enter your email address.');
            isValid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            showFieldError(email, 'That email address doesn\'t look right.');
            isValid = false;
        }

        if (!message.value.trim()) {
            showFieldError(message, 'Please add a short message.');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showFieldError(message, 'Message is a bit short — a few more details help us respond properly.');
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        if (!validate()) return;

        submitBtn.disabled = true;
        submitLabel.textContent = 'Sending...';
        submitSpinner.classList.remove('hidden');
        banner.classList.add('hidden');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
            });
            const data = await response.json();

            if (data.success) {
                showBanner('success', 'Message sent', 'Thanks — we\'ll get back to you within one business day.');
                form.reset();
            } else {
                showBanner('error', 'Something went wrong', data.error || 'Please check your details and try again, or email us directly at info@zitrac.co.zw.');
            }
        } catch (err) {
            showBanner('error', 'Connection issue', 'We couldn\'t reach the server. Please try again, or email us directly at info@zitrac.co.zw.');
        } finally {
            submitBtn.disabled = false;
            submitLabel.textContent = 'Send Message';
            submitSpinner.classList.add('hidden');
        }
    });
})();