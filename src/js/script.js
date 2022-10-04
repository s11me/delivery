const humburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('active');
});
close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const elem = document.querySelector('.pageup');
window.onscroll = () => {
    if (window.scrollY > 700){
        elem.classList.remove('show');
    } else if (window.scrollY < 700){
        elem.classList.add('show');
    }
};