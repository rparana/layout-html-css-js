btnMenu = document.querySelector('.nav-toggle');
btnClose = document.querySelector('.close');
header = document.querySelector('.header');
menu = document.querySelector('.nav');

btnMenu.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.toggle('active');
})

btnClose.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.toggle('active');
})

document.addEventListener("scroll", () => {
    console.log(this.scrollY)
    if (this.scrollY > 100) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});