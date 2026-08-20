/* =========================================================
   MOBILE MENU TOGGLE
   Opens/closes the dropdown card under the navbar pill.
   Also closes automatically when a link is tapped, or when
   you tap outside the menu.
========================================================= */

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMenu() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('active');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
}

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Close when a link inside the mobile menu is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close when tapping anywhere outside the menu
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});

// Close automatically if the window is resized back to desktop width
window.addEventListener('resize', () => {
  if (window.innerWidth > 860) closeMenu();
});
