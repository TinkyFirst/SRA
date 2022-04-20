let burgerMenu = document.querySelector('.burger__menu');
let listMenu = document.querySelector('.list__settings');
let burgerMenuExit = document.querySelector('.cancel');
let displayContent = document.querySelector('.App')
let bannedSitesBtn = document.querySelector('.show_banned');
let bannedSitesContent = document.querySelector('.container');
let appHeading = document.querySelector('.app__heading')
let statsBlock = document.querySelector('.stats__block')

const openMenu = () => {
    burgerMenu.style.display = "none";
    listMenu.style.display = "flex";
}
const closeMenu = () => {
    listMenu.style.display = "none";
    burgerMenu.style.display = "block";
    displayContent.style.display = "block";
    bannedSitesContent.style.display = "none";
    statsBlock.style.display = "flex";
    appHeading.style.display = "block";

}
const openBannedSited = () => {
    statsBlock.style.display = "none";
    appHeading.style.display = "none";
    bannedSitesContent.style.display = "block";
}