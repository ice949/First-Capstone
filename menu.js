const menuOverlay = document.querySelector('.mobileMenu');
const cross = document.getElementById('crossIcon');
const button = document.getElementById('humbergar');
function toggleMenu() {
  menuOverlay.style.position = 'inherit';

  cross.style.display = 'block';
}

function closeMenu() {
  menuOverlay.style.position = 'fixed';
}

button.addEventListener('click', () => toggleMenu());

cross.addEventListener('click', () => closeMenu());