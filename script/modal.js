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
let themeButton = document.querySelector('.change__theme')
let settingBlock = document.querySelector('.settigs_block')
let htmlPage = document.querySelector('html')
let settingsHeading = document.querySelector('.settings_heading')
let burgerSvg = document.querySelector('.burger_svg')
let buttonBtn = document.querySelector('.button')
let downloadBtn = document.querySelector('.download')
let containerStats = document.querySelector('.container')
let cancelSvg = document.querySelector('.svg_close')
let downloadHeading = document.querySelector('.download__heading')
let modalBlock = document.querySelector('.modal-content')
let requests = document.querySelectorAll('.requests')
let h4 = document.querySelectorAll('h4');
let td = document.querySelectorAll('td')
let tdNew = ''

const currentTheme = localStorage.getItem("theme");
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
  settingsBlock.style.display = "none";
  downloadBlock.style.display = "none";

}
const openBannedSited = () => {
  statsBlock.style.display = "none";
  appHeading.style.display = "none";
  bannedSitesContent.style.display = "block";
  downloadBlock.style.display = "none";
  settingsBlock.style.display = "none";
  listMenu.style.display = "none";
  burgerMenu.style.display = 'block'
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



if (currentTheme == "dark") {
  document.body.classList.add("black");
  htmlPage.classList.add("black");
  displayContent.classList.add("app_black");
  settingsBlock.classList.add("black");
  settingsHeading.classList.add("black");
  themeButton.classList.add("button_black")
  burgerSvg.classList.add("black");
  appHeading.classList.add("black")
  statsBlock.classList.add("black")
  bannedSitesBtn.classList.add("black")
  downloadBtn.classList.add("black")
  containerStats.classList.add("black")
  settingButton.classList.add("svg_black")
  settingsBlock.classList.add("black")
  cancelSvg.classList.add("svg_black")
  modalBlock.classList.add("black")
}

themeButton.addEventListener('click', function () {
  document.body.classList.toggle("black");
  htmlPage.classList.toggle("black");
  displayContent.classList.toggle("app_black");
  settingsBlock.classList.toggle("black");
  settingsHeading.classList.toggle("black");
  themeButton.classList.toggle("button_black");
  burgerSvg.classList.toggle("black");
  appHeading.classList.toggle("black");
  statsBlock.classList.toggle("black");
  bannedSitesBtn.classList.toggle("black")
  downloadBtn.classList.toggle("black")
  containerStats.classList.toggle("black")
  downloadHeading.classList.toggle("black")
  settingButton.classList.toggle("svg_black")
  cancelSvg.classList.toggle("svg_black")
  modalBlock.classList.toggle("black")
  // td.forEach(() => {
  //   classList.toggle("white")
  // });
  // h4.forEach(() => {
  //   classList.toggle("white")
  // });
  // requests.forEach(() => {
  //   classList.toggle("white")
  // });


  let theme = "light";
  if (document.body.classList.contains("black")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
})

