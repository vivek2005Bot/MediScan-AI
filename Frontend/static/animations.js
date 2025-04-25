// Enhanced animations and UI effects
document.addEventListener('DOMContentLoaded', function() {
  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.service-card, .tab-pane, .contact-info, .contact-form');
  
  function reveal() {
    revealElements.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  }
  
  // Add initial classes
  document.querySelectorAll('.service-card, .tab-pane, .contact-info, .contact-form').forEach(element => {
    element.classList.add('reveal');
  });
  
  // Listen for scroll event
  window.addEventListener('scroll', reveal);
  
  // Trigger on initial load
  reveal();
  
  // Animated counter for statistics (can be added to the website later)
  function animateCounter(element, target, duration = 2000) {
    if (!element) return;
    
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      element.textContent = Math.floor(start);
      
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  }
  
  // Hover effects for buttons
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      button.style.transform = 'translateY(-3px)';
      button.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.1)';
    });
    
    button.addEventListener('mouseleave', function() {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '';
    });
  });
  
  // Add pulse animation to emergency contact section
  const emergencyContact = document.querySelector('.emergency-contact');
  if (emergencyContact) {
    emergencyContact.classList.add('pulse-animation');
  }
  
  // Add CSS styles for animations to the document
  const animationStyles = document.createElement('style');
  animationStyles.textContent = `
    /* Reveal Animation */
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Stagger service cards */
    .services-grid .service-card:nth-child(1) { transition-delay: 0.1s; }
    .services-grid .service-card:nth-child(2) { transition-delay: 0.2s; }
    .services-grid .service-card:nth-child(3) { transition-delay: 0.3s; }
    .services-grid .service-card:nth-child(4) { transition-delay: 0.4s; }
    .services-grid .service-card:nth-child(5) { transition-delay: 0.5s; }
    .services-grid .service-card:nth-child(6) { transition-delay: 0.6s; }
    
    /* Pulse Animation for Emergency Contact */
    .pulse-animation {
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
      }
    }
    
    /* Upload area animation */
    .upload-area {
      transition: all 0.3s ease;
    }
    
    .upload-area.dragover {
      transform: scale(1.02);
      border-color: var(--primary);
      background-color: var(--primary-light);
    }
    
    /* Floating animation for chatbot button */
    .chatbot-toggle {
      animation: float 3s ease-in-out infinite;
    }
    
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-8px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    
    /* Nav links hover effect */
    .nav-links a::after {
      transition: width 0.3s ease;
    }
    
    /* Tab switching animation */
    .tab-pane {
      animation: fadeIn 0.5s ease forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Service icon pulse */
    .service-card:hover .icon {
      animation: iconPulse 0.5s ease;
    }
    
    @keyframes iconPulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
    
    /* Mobile menu animation */
    @media (max-width: 768px) {
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        flex-direction: column;
        background: white;
        padding: 0;
        height: 0;
        overflow: hidden;
        transition: height 0.3s ease;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
      }
      
      .nav-links.active {
        height: auto;
        padding: 20px 0;
      }
      
      .nav-links a {
        padding: 10px 0;
      }
    }
  `;
  
  document.head.appendChild(animationStyles);
});