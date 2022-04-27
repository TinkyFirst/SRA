let burgerMenu = document.querySelector('.burger__menu');
let listMenu = document.querySelector('.list__settings');
let burgerMenuExit = document.querySelector('.cancel');
let displayContent = document.querySelector('.App')
let bannedSitesBtn = document.querySelector('.show_banned');
let bannedSitesContent = document.querySelector('.container');
let appHeading = document.querySelector('.app__heading')
let statsBlock = document.querySelector('.stats__block')
let settingsBlock = document.querySelector('.settigs_block')
let settingButton = document.querySelector('.svg_setting')
let downloadBlock = document.querySelector('.download__block')
let downloadButton = document.querySelector('.download')

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
const openSettings = () => {
    statsBlock.style.display = "none";
    appHeading.style.display = "none";
    bannedSitesContent.style.display = "none";
    settingsBlock.style.display = "block";
    listMenu.style.display = "none";
    burgerMenu.style.display = 'block'
}
const openDownload = () => {
    statsBlock.style.display = "none";
    appHeading.style.display = "none";
    bannedSitesContent.style.display = "none";
    settingsBlock.style.display = "none";
    downloadBlock.style.display = "block"
    listMenu.style.display = "none";
    burgerMenu.style.display = 'block'
}
settingButton.addEventListener('click', openSettings)
downloadButton.addEventListener('click', openDownload)