let burgerMenu = document.querySelector('.burger__menu');
let listMenu = document.querySelector('.list__settings');
let burgerMenuExit = document.querySelector('.cancel');
const openMenu = () => {
    burgerMenu.style.display = "none";
    listMenu.style.display = "flex";
}
const closeMenu = () => {
    listMenu.style.display = "none";
    burgerMenu.style.display = "block";
}