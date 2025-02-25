const burgerButton = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.nav-link');

burgerButton.hidden = false;

burgerButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// прокрутка з урахуванням висоти заголовка
menuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку посилання

    const targetId = this.getAttribute('href'); // Отримуємо id цільової секції
    const targetElement = document.querySelector(targetId); // Знаходимо елемент секції

    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight; // Висота вашого заголовка
      const targetOffsetTop = targetElement.offsetTop - headerHeight; // Відступ від верху сторінки з урахуванням висоти заголовка

      window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth', // Для плавної прокрутки
      });
    }
  });
});
