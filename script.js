

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        if (navMenu.classList.contains('active')) {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    if (pageName === linkHref) {
      link.classList.add('active');
    } else if ((pageName === '' || pageName === 'index.html') && linkHref === 'index.html') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const header = document.querySelector('header');
  const checkScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  if (header) {
    checkScroll();
    window.addEventListener('scroll', checkScroll);
  }

  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.02,
      rootMargin: '0px 0px -10px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(element => {
      element.classList.add('reveal-active');
    });
  }

  const contactForm = document.getElementById('contactForm');
  const successModalOverlay = document.getElementById('successModalOverlay');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const serviceSelect = document.getElementById('service');
      const messageInput = document.getElementById('message');

      let isValid = true;

      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      if (serviceSelect && serviceSelect.value === '') {
        showError(serviceSelect, 'Please select a service');
        isValid = false;
      } else if (serviceSelect) {
        clearError(serviceSelect);
      }

      if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required');
        isValid = false;
      } else {
        clearError(messageInput);
      }

      if (isValid) {
        if (successModalOverlay) {
          successModalOverlay.classList.add('active');
        }

        contactForm.reset();
      }
    });

    if (closeModalBtn && successModalOverlay) {
      closeModalBtn.addEventListener('click', () => {
        successModalOverlay.classList.remove('active');
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && successModalOverlay.classList.contains('active')) {
          successModalOverlay.classList.remove('active');
        }
      });
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showError(inputElement, errorMessage) {
    const formGroup = inputElement.closest('.form-group');
    if (!formGroup) return;

    let errorSpan = formGroup.querySelector('.error-message');
    if (!errorSpan) {
      errorSpan = document.createElement('span');
      errorSpan.className = 'error-message';
      errorSpan.style.color = '#ff4a4a';
      errorSpan.style.fontSize = '0.8rem';
      errorSpan.style.marginTop = '6px';
      errorSpan.style.display = 'block';
      formGroup.appendChild(errorSpan);
    }
    
    errorSpan.innerText = errorMessage;
    inputElement.style.borderColor = '#ff4a4a';
    inputElement.style.boxShadow = '0 0 10px rgba(255, 74, 74, 0.15)';
  }

  function clearError(inputElement) {
    const formGroup = inputElement.closest('.form-group');
    if (!formGroup) return;

    const errorSpan = formGroup.querySelector('.error-message');
    if (errorSpan) {
      formGroup.removeChild(errorSpan);
    }

    inputElement.style.borderColor = '';
    inputElement.style.boxShadow = '';
  }
});
