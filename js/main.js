btnMenu = document.querySelector('.nav-toggle');
btnClose = document.querySelector('.close');
menu = document.querySelector('.nav');

btnMenu.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.toggle('active');
})

btnClose.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.toggle('active');
})