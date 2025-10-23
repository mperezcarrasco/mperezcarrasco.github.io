/**
 * Modern Portfolio 2.0 - Enhanced JavaScript
 * Adds modern interactivity and animations
 */

(function() {
  'use strict';

  // Page Loader
  window.addEventListener('load', function() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 500);
    }
  });

  // Smooth scroll reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-reveal class
  document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
  });

  // Mobile navigation enhancements
  document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (mobileMenuToggle && sidebar && overlay) {
      function openMobileMenu() {
        sidebar.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        // Animate menu items
        const navLinks = sidebar.querySelectorAll('.nav-link');
        navLinks.forEach((link, index) => {
          link.style.animation = `slideInLeft 0.5s ease ${index * 0.1}s forwards`;
        });
      }

      function closeMobileMenu() {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
      }

      mobileMenuToggle.addEventListener('click', openMobileMenu);
      overlay.addEventListener('click', closeMobileMenu);

      // Close menu when clicking a link
      const sidebarLinks = document.querySelectorAll('#sidebar .nav-link');
      sidebarLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
      });

      // Close mobile menu on window resize
      window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
          closeMobileMenu();
        }
      });
    }
  });

  // Enhanced modal animations
  document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
      modal.addEventListener('show.bs.modal', function() {
        const modalContent = this.querySelector('.modal-content');
        if (modalContent) {
          modalContent.style.animation = 'fadeInUp 0.5s ease';
        }
      });
    });
  });

  // Parallax effect for hero sections
  window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
  });

  // Dynamic typing effect for hero text (optional)
  function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  // Card hover effects with 3D tilt
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
      });

      card.addEventListener('mouseleave', function() {
        card.style.transform = '';
      });
    });
  });

  // Smooth scrolling for anchor links
  document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  });

  // Active navigation link highlighting
  window.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath) {
        link.classList.add('active');
      }
    });
  });

  // Image lazy loading fallback
  document.addEventListener('DOMContentLoaded', function() {
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        img.src = img.dataset.src || img.src;
      });
    } else {
      // Fallback for browsers that don't support lazy loading
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
      document.body.appendChild(script);
    }
  });

  // Cursor trail effect (optional, can be enabled)
  let cursorTrailEnabled = false;

  if (cursorTrailEnabled) {
    const coords = { x: 0, y: 0 };
    const circles = [];
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'];

    for (let i = 0; i < 20; i++) {
      const circle = document.createElement('div');
      circle.style.position = 'fixed';
      circle.style.width = '10px';
      circle.style.height = '10px';
      circle.style.borderRadius = '50%';
      circle.style.backgroundColor = colors[i % colors.length];
      circle.style.pointerEvents = 'none';
      circle.style.zIndex = '9999';
      circle.style.transition = 'transform 0.1s, opacity 0.3s';
      circles.push(circle);
      document.body.appendChild(circle);
    }

    window.addEventListener('mousemove', function(e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 5 + 'px';
        circle.style.top = y - 5 + 'px';
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
        circle.style.opacity = (circles.length - index) / circles.length;

        const nextCircle = circles[index + 1] || circles[0];
        x += (parseFloat(nextCircle.style.left || x) - x) * 0.3;
        y += (parseFloat(nextCircle.style.top || y) - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }

  // Performance: Debounce scroll and resize events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Add scroll progress indicator
  document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      z-index: 10000;
      transition: width 0.1s ease;
      width: 0%;
    `;
    document.body.appendChild(progressBar);

    const updateProgress = debounce(() => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.pageYOffset;
      const progress = (scrolled / documentHeight) * 100;
      progressBar.style.width = progress + '%';
    }, 10);

    window.addEventListener('scroll', updateProgress);
  });

  // Add ripple effect to buttons
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          left: ${x}px;
          top: ${y}px;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  });

  // Console message
  console.log('%c🚀 Modern Portfolio 2.0 ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 16px; padding: 10px 20px; border-radius: 5px;');
  console.log('%cBuilt with modern web technologies', 'color: #667eea; font-size: 12px;');

})();
