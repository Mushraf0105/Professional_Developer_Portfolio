// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        navToggle.classList.toggle('open');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.classList.remove('open');
        });
    });
}

// Dynamic Scroll Progress Indicator
const scrollProgressBar = document.getElementById('scroll-progress-bar');

function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (scrollHeight > 0 && scrollProgressBar) {
        const progress = (scrollTop / scrollHeight) * 100;
        scrollProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

// Dark / Light Theme Toggle with LocalStorage Memory
const themeToggleBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
        localStorage.setItem('portfolio-theme', theme);
    } catch (e) {
        // Fallback for private browsing or disabled localStorage
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(targetTheme);
    });
}

// Synchronize with OS theme changes if user has no manual override saved
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        try {
            if (!localStorage.getItem('portfolio-theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        } catch (e) { }
    });
}

// Active Nav Link Highlighting on Scroll
const sections = document.querySelectorAll('section[id]');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        const activeLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
        if (activeLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                activeLink.classList.add('active');
            } else {
                activeLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Contact Form Submission Handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm && formMessage) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            formMessage.textContent = 'Please fill out all fields before submitting.';
            formMessage.className = 'form-message error';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.className = 'form-message error';
            return;
        }

        // Simulate successful submission
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.className = 'form-message success';
        contactForm.reset();

        // Clear status message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    });
}

// Dynamic Typewriter Effect (Hero Section)
const typedTextSpan = document.getElementById('typed-text');
const words = [
    'MERN Stack Developer',
    'Full-Stack Developer',
    'React.js & Node.js Specialist',
    'Passionate Problem Solver'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typedTextSpan) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1800; // Pause at end of completed word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400; // Pause before starting next word
    }

    setTimeout(typeEffect, typeSpeed);
}

if (typedTextSpan) {
    setTimeout(typeEffect, 600);
}

// Scroll Reveal Animations (Native IntersectionObserver)
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
} else {
    revealElements.forEach(el => el.classList.add('active'));
}

// Interactive Project Category Filter Tabs
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');

if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('is-hidden');
                } else {
                    card.classList.add('is-hidden');
                }
            });
        });
    });
}

// Floating Back to Top Button with Circular Progress Ring
const scrollTopBtn = document.getElementById('scroll-top-btn');
const progressCircle = document.getElementById('progress-circle');
const circumference = 2 * Math.PI * 20; // ~125.66

function handleScrollTopButton() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (scrollTopBtn) {
        if (scrollTop > 350) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    if (progressCircle && scrollHeight > 0) {
        const progress = Math.min(1, Math.max(0, scrollTop / scrollHeight));
        const offset = circumference - (progress * circumference);
        progressCircle.style.strokeDashoffset = offset;
    }
}

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

window.addEventListener('scroll', handleScrollTopButton, { passive: true });
handleScrollTopButton();



