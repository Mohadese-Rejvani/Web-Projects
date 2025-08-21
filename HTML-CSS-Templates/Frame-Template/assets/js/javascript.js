let lastScroll = 0;
const nav = document.querySelector('nav');

window.onscroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll === 0) {
    nav.style.top = '40px';
    nav.classList.remove('scrolled-up');

  } else if (currentScroll < lastScroll) {
    nav.style.top = '0px';
    nav.classList.add('scrolled-up');
    
  } else {
    nav.style.top = '-100px';
    nav.classList.remove('scrolled-up');
  }

  lastScroll = currentScroll;
};