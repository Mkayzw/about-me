// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Initialize Particles.js with optimized settings
particlesJS('particles-js', {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 1000 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.3,
            random: true,
            animation: { enable: true, speed: 0.5, minimumValue: 0.1, sync: false }
        },
        size: {
            value: 2,
            random: true,
            animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'bounce' },
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detectsOn: 'canvas',
        events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Enhanced navigation scroll effect
const navbar = document.getElementById('navbar');
gsap.to(navbar, {
    scrollTrigger: {
        start: 'top -100',
        end: 99999,
        toggleClass: { className: 'nav-scrolled', targets: navbar }
    }
});

// Enhanced hero section animations with better timing
window.addEventListener('load', () => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    timeline
        .from('.glowing-border', {
            opacity: 0,
            y: -20,
            duration: 0.8
        })
        .to('#hero-title', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'elastic.out(1, 0.75)'
        }, '-=0.3')
        .to('#hero-subtitle', {
            opacity: 1,
            duration: 1,
        }, '-=0.4')
        .to('#hero-cta', {
            opacity: 1,
            duration: 0.6,
            y: 0
        }, '-=0.2')
        .to('#hero-cta-secondary', {
            opacity: 1,
            duration: 0.6,
            y: 0
        }, '-=0.4')
        .to('#tech-stack', {
            opacity: 1,
            duration: 0.6,
            y: 0,
            stagger: 0.1
        }, '-=0.2');

    // Animate floating shapes
    gsap.to('.floating-shape', {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-10, 10)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
            amount: 2,
            from: 'random'
        }
    });
});

// Enhanced skill animations with stagger effect
const skills = [
    { name: 'HTML/CSS', level: 90, color: '#E34F26' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'React', level: 80, color: '#61DAFB' },
    { name: 'Node.js', level: 75, color: '#339933' },
    { name: 'Python', level: 70, color: '#3776AB' },
    { name: 'UI/UX Design', level: 85, color: '#FF61F6' }
];

const skillsContainer = document.querySelector('#skills .grid');
skills.forEach((skill, index) => {
    const skillElement = document.createElement('div');
    skillElement.className = 'card-hover p-6 rounded-xl transform-3d hover:scale-105 transition-transform';
    skillElement.innerHTML = `
        <div class="relative z-10">
            <h3 class="text-xl font-semibold mb-4 gradient-text">${skill.name}</h3>
            <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div class="skill-bar h-full rounded-full relative" 
                    style="--skill-level: ${skill.level}%; background: linear-gradient(90deg, ${skill.color}, ${skill.color}dd)">
                    <div class="absolute inset-0 shine"></div>
                </div>
            </div>
            <div class="mt-4 flex justify-between items-center">
                <span class="text-sm text-gray-400">${skill.name}</span>
                <span class="text-sm font-semibold gradient-text">${skill.level}%</span>
            </div>
        </div>
    `;
    
    gsap.from(skillElement, {
        scrollTrigger: {
            trigger: skillElement,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1
    });
    
    skillsContainer.appendChild(skillElement);
});

// Enhanced project card animations with stagger
const projects = [
    {
        title: 'ZimHustleHub',
        description: 'A freelance platform built with MERN stack (MongoDB, Express.js, React, Node.js). Features include JWT authentication, Socket.io for real-time chat, Redux for state management, and Stripe for secure payments.',
        image: 'images/zimhustlehub.svg',
        tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'JWT', 'Redux', 'Stripe', 'Tailwind CSS'],
        link: 'https://hustlehubzim.netlify.app'
    },
    {
        title: 'Shopie',
        description: 'A full-stack e-commerce platform combining React frontend with Django REST backend. Utilizes PostgreSQL for data storage, Redux for state management, and integrates Stripe payment gateway.',
        image: 'images/shopie.svg',
        tags: ['React', 'Django REST', 'PostgreSQL', 'Redux', 'Stripe', 'JWT', 'Bootstrap', 'Python'],
        link: 'https://shopie-frontend.vercel.app'
    },
    {
        title: 'Food Delivery App',
        description: 'A mobile-first food delivery application built with React Native and Firebase. Features real-time order tracking with Cloud Firestore, Node.js/Express backend, and Google Maps integration.',
        image: 'images/food-delivery.svg',
        tags: ['React Native', 'Firebase', 'Node.js', 'Express.js', 'Cloud Firestore', 'Google Maps API', 'Redux'],
        link: 'https://food-delivery-frontend.vercel.app'
    }
];

const projectsContainer = document.querySelector('#projects .grid');
projects.forEach((project, index) => {
    const projectElement = document.createElement('div');
    projectElement.className = 'group relative overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-card/90';
    projectElement.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="block">
            <div class="relative aspect-video overflow-hidden">
                <img src="${project.image}" alt="${project.title}" 
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-background/90 to-background/0"></div>
            </div>
            <div class="relative space-y-4 p-6">
                <h3 class="text-xl font-semibold tracking-tight text-foreground/90">
                    ${project.title}
                    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </h3>
                <p class="text-sm text-muted-foreground line-clamp-3">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(tag => `
                        <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <div class="pt-4">
                    <span class="inline-flex items-center text-sm font-semibold text-foreground">
                        View Project
                        <svg class="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </span>
                </div>
            </div>
        </a>
    `;
    
    // Enhanced animations with GSAP
    gsap.from(projectElement, {
        scrollTrigger: {
            trigger: projectElement,
            start: 'top 85%',
            end: 'top 15%',
            toggleActions: 'play none none reverse',
            scrub: 1
        },
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out'
    });
    
    projectsContainer.appendChild(projectElement);
});

// Enhanced section animations
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
            scrub: 1,
            markers: false
        },
        y: 50,
        opacity: 0,
        duration: 1
    });
});

// Enhanced form animations
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    input.addEventListener('blur', () => {
        gsap.to(input, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        el.style.setProperty('--scroll-offset', `${scrolled * speed}px`);
    });
});

// Form submission handling
const contactForm = document.querySelector('#contact-form');
const submitBtn = document.querySelector('#submit-btn');
const loadingSpinner = document.querySelector('#loading-spinner');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending...';
    loadingSpinner.classList.remove('hidden');
    
    try {
        const templateParams = {
            from_name: contactForm.name.value,
            from_email: contactForm.email.value,
            message: contactForm.message.value,
        };
        
        await emailjs.send(
            'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
            templateParams
        );
        
        // Show success message
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
        
    } catch (error) {
        console.error('Error:', error);
        showNotification('Failed to send message. Please try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'Send Message';
        loadingSpinner.classList.add('hidden');
    }
});

// Notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white transform transition-all duration-300 translate-y-full ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(full)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Social media links
const socialLinks = [
    { icon: '🔗', url: 'https://www.linkedin.com/in/codewizardry23zw', label: 'LinkedIn' },
    { icon: '🐙', url: 'https://github.com/Mkayzw', label: 'GitHub' },
    { icon: '📷', url: 'https://www.instagram.com/i_am_mkay_zw/#', label: 'Instagram' },
    { icon: '🐦', url: 'https://twitter.com/your_twitter', label: 'Twitter' },
    { icon: '✉️', url: 'mailto:your.email@example.com', label: 'Email' }
];

const socialContainer = document.querySelector('footer .flex');
socialLinks.forEach(link => {
    const socialElement = document.createElement('a');
    socialElement.href = link.url;
    socialElement.target = '_blank';
    socialElement.rel = 'noopener noreferrer';
    socialElement.className = 'social-icon text-2xl hover:text-blue-400 transition-colors relative group';
    socialElement.innerHTML = `
        ${link.icon}
        <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            ${link.label}
        </span>
    `;
    socialContainer.appendChild(socialElement);
});

// Enhanced scroll animations
ScrollTrigger.batch('.fade-up', {
    start: 'top 85%',
    onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
    })
});

// Magnetic effect for buttons
document.querySelectorAll('.magnetic').forEach(button => {
    button.addEventListener('mousemove', e => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(button, {
            duration: 0.3,
            x: x * 0.2,
            y: y * 0.2,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            duration: 0.3,
            x: 0,
            y: 0,
            ease: 'power2.out'
        });
    });
});

// Parallax effect for sections
document.querySelectorAll('.parallax-section').forEach(section => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: (i, target) => -150 * target.dataset.speed || -50
    });
});

// Dark mode functionality
function initTheme() {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
        document.documentElement.classList.add('dark');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
        document.documentElement.classList.remove('dark');
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    
    themeToggleBtn.addEventListener('click', function() {
        // Toggle icons
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // If is set in localStorage
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
}

// Initialize dark mode
initTheme(); 