/**
 * ==============================================================================
 * STUDENT PORTFOLIO JAVASCRIPT
 * Department: B.Tech Artificial Intelligence & Data Science
 * Institution: Sanjay Godawat University, Kolhapur
 * 
 * Features:
 * 1. Mobile menu toggle with accessibility (ARIA) handling
 * 2. Active navbar link highlighting via IntersectionObserver
 * 3. Sticky navbar styling on scroll
 * 4. Interactive project filtering by category
 * 5. One-click copy email to clipboard with toast notification
 * 6. Contact form validation and interactive response
 * 7. Back-to-top floating button logic
 * 8. Dynamic copyright year update
 * ==============================================================================
 */

// Run when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ----------------------------------------------------------------------------
  // 1. DOM ELEMENT REFERENCES
  // ----------------------------------------------------------------------------
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toastNotification = document.getElementById('toastNotification');
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');
  const currentYearSpan = document.getElementById('currentYear');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Set current year dynamically in footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // ----------------------------------------------------------------------------
  // 2. MOBILE NAVIGATION DRAWER
  // ----------------------------------------------------------------------------
  if (menuToggle && navLinks) {
    // Toggle mobile menu open/closed
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('is-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking any nav link
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
      if (
        navLinks.classList.contains('is-open') &&
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    navLinks.classList.add('is-open');
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    navLinks.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  // ----------------------------------------------------------------------------
  // 3. STICKY NAVBAR & BACK-TO-TOP BUTTON VISIBILITY ON SCROLL
  // ----------------------------------------------------------------------------
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Add shadow and darker background when scrolled past 20px
    if (header) {
      if (currentScrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Toggle Back to Top button visibility
    if (backToTopBtn) {
      if (currentScrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // Scroll smoothly to top on click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ----------------------------------------------------------------------------
  // 4. ACTIVE NAVIGATION LINK HIGHLIGHTING
  // ----------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Highlights section currently in primary viewport
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinkItems.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  // ----------------------------------------------------------------------------
  // 5. INTERACTIVE PROJECT FILTERING
  // ----------------------------------------------------------------------------
  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active filter button state
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');

          if (filterValue === 'all') {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.4s ease forwards';
          } else if (cardCategory === filterValue) {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.4s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ----------------------------------------------------------------------------
  // 6. ONE-CLICK EMAIL COPY FEATURE
  // ----------------------------------------------------------------------------
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const emailLink = document.getElementById('emailLink');
      const emailToCopy = emailLink ? emailLink.textContent.trim() : 'your.email@example.com';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for older browsers or insecure contexts
          const tempInput = document.createElement('input');
          tempInput.value = emailToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }
        showToast('✓ Email address copied to clipboard!');
      } catch (err) {
        showToast('Unable to auto-copy. Email: ' + emailToCopy);
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 7. TOAST NOTIFICATION UTILITY
  // ----------------------------------------------------------------------------
  let toastTimeout;
  function showToast(message) {
    if (!toastNotification) return;

    toastNotification.textContent = message;
    toastNotification.removeAttribute('hidden');
    toastNotification.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove('show');
      setTimeout(() => {
        toastNotification.setAttribute('hidden', '');
      }, 300);
    }, 3200);
  }

  // ----------------------------------------------------------------------------
  // 8. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
  // ----------------------------------------------------------------------------
  if (contactForm) {
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const subjectInput = document.getElementById('userSubject');
    const messageInput = document.getElementById('userMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Live validation clearing on input
    if (nameInput) nameInput.addEventListener('input', () => { if (nameError) nameError.textContent = ''; });
    if (emailInput) emailInput.addEventListener('input', () => { if (emailError) emailError.textContent = ''; });
    if (subjectInput) subjectInput.addEventListener('input', () => { if (subjectError) subjectError.textContent = ''; });
    if (messageInput) messageInput.addEventListener('input', () => { if (messageError) messageError.textContent = ''; });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        if (nameError) nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      // Validate Email
      const emailValue = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValue) {
        if (emailError) emailError.textContent = 'Please enter your email address.';
        isValid = false;
      } else if (!emailPattern.test(emailValue)) {
        if (emailError) emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        if (subjectError) subjectError.textContent = 'Please enter a subject.';
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        if (messageError) messageError.textContent = 'Please enter your message.';
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      // Form is valid: show honest verification feedback & direct mailto link
      const submitBtn = document.getElementById('formSubmitBtn');
      const originalBtnHTML = submitBtn ? submitBtn.innerHTML : 'Validate & Compose';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Verifying...</span>';
      }

      setTimeout(() => {
        const enteredName = nameInput.value.trim();
        const enteredEmail = emailInput.value.trim();
        const enteredSubject = subjectInput.value.trim();
        const enteredMessage = messageInput.value.trim();

        const emailLink = document.getElementById('emailLink');
        const targetEmail = emailLink ? emailLink.textContent.trim() : 'your.email@example.com';

        // Construct a direct mailto URL so the user can send the message via their email client
        const mailtoUrl = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(enteredSubject)}&body=${encodeURIComponent('Hello,\n\nName: ' + enteredName + '\nEmail: ' + enteredEmail + '\n\nMessage:\n' + enteredMessage)}`;

        if (formAlert) {
          formAlert.className = 'form-alert demo-notice';
          formAlert.removeAttribute('hidden');
          formAlert.innerHTML = `
            <div class="alert-header">
              <strong>✓ Form Inputs Validated</strong>
            </div>
            <p class="alert-body">
              <strong>Notice:</strong> This portfolio is currently running in static demo mode and is not connected to a live email backend. Your message has <em>not</em> been transmitted across the web.
            </p>
            <p class="alert-body">
              To send this message directly to <strong>${escapeHtml(targetEmail)}</strong>, click the button below to open your email app with your message pre-filled:
            </p>
            <div class="alert-actions">
              <a href="${mailtoUrl}" class="btn btn-sm btn-primary">
                <span>Send via Email App</span>
                <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          `;
        }

        showToast('✓ Form details verified (Demo Mode)');
        contactForm.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        }

        // Hide alert after 14 seconds so user has time to click the mailto button
        setTimeout(() => {
          if (formAlert) formAlert.setAttribute('hidden', '');
        }, 14000);
      }, 500);
    });
  }

  // Safe HTML Escaping for Form Feedback
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ----------------------------------------------------------------------------
  // 9. SUBTLE GLASS CARD MOUSE HIGHLIGHT EFFECT
  // ----------------------------------------------------------------------------
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

});
