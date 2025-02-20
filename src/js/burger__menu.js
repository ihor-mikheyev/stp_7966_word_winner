const burgerButton = document.querySelector('burger');
const nav = document.querySelector('.nav');

burgerButton.hidden = false;

burgerButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});
