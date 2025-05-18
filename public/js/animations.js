// Custom animation utilities for the portfolio site

// Function to initialize intersection observer for animations
function initIntersectionAnimations() {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(function (section) {
        observer.observe(section);
    });
}

// Function to initialize parallax scrolling effect
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Select elements to apply parallax effect
        const heroElements = document.querySelectorAll('[data-parallax]');
        
        heroElements.forEach(element => {
            const speed = element.getAttribute('data-parallax-speed') || 0.15;
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Initialize subtle hover effects for image containers
function initHoverEffects() {
    const imageContainers = document.querySelectorAll('.hover-effect-container');
    
    imageContainers.forEach(container => {
        container.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            container.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        container.addEventListener('mouseleave', () => {
            container.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
        });
    });
}

// Initialize all animations when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initIntersectionAnimations();
    // Uncomment these as needed:
    initParallax();
    initHoverEffects();
});
