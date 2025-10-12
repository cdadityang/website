document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('themeSwitch');
  const scrollArrow = document.getElementById('scrollArrow');
  const navbarMain = document.getElementById('navbar-main');
  const navbarContainer = document.getElementById('navbar-container');
  const navbarBrandDiv = document.getElementById('navbar-brand-div');
  const footerCurrentYear = document.getElementById('footer-current-year');

  // Check for saved theme in localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('html').setAttribute('data-bs-theme', 'dark');
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener('change', function() {
    if (themeSwitch.checked) {
      document.querySelector('html').setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.querySelector('html').setAttribute('data-bs-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });

  // Smooth scroll to Page 2 when arrow is clicked (custom slower animation)
  function smoothScrollTo(targetY, duration, onDone) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * eased);
      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else if (typeof onDone === 'function') {
        onDone();
      }
    }

    requestAnimationFrame(step);
  }

  scrollArrow.addEventListener('click', function() {
    const page2 = document.getElementById('page2');
    const targetY = page2.getBoundingClientRect().top + window.pageYOffset - 80;
    smoothScrollTo(targetY, 1000);
  });

  // Navbar class toggling when Page 2 is in view
  function applyNavbarPage2Styles() {
    if (navbarMain) {
      navbarMain.classList.add('bg-body-tertiary', 'shadow-sm');
    }
    if (navbarContainer) {
      navbarContainer.classList.remove('justify-content-end');
      navbarContainer.classList.add('justify-content-between');
    }
    if (navbarBrandDiv) {
      navbarBrandDiv.classList.remove('d-none');
      navbarBrandDiv.classList.add('d-flex');
    }
  }

  function revertNavbarToPage1Styles() {
    if (navbarMain) {
      navbarMain.classList.remove('bg-body-tertiary', 'shadow-sm');
    }
    if (navbarContainer) {
      navbarContainer.classList.remove('justify-content-between');
      navbarContainer.classList.add('justify-content-end');
    }
    if (navbarBrandDiv) {
      navbarBrandDiv.classList.remove('d-flex');
      navbarBrandDiv.classList.add('d-none');
    }
  }

  function checkAndApplyNavbarStyles() {
    if (window.scrollY >= 500) {
      applyNavbarPage2Styles();
    } else {
      revertNavbarToPage1Styles();
    }
  }

  checkAndApplyNavbarStyles();
  window.addEventListener('scroll', function() {
    checkAndApplyNavbarStyles();
  });

  // Update footer current year
  footerCurrentYear.textContent = new Date().getFullYear();
});