

/* menu */

const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');

let show = true;

menuToggle.addEventListener('click', () => {

  document.body.style.overflow = show ? 'hidden' : 'initial';

  menuSection.classList.toggle('on', show);
  show = !show;
})