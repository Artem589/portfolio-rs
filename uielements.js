const UI = {
  hamburger: document.querySelector(".hamburger"),
  nav: document.querySelector(".nav-list"),
  link: document.querySelectorAll(".nav-link"),
  portfolioBtn: document.querySelectorAll(".btn"),
  portfolioImg: document.querySelectorAll(".portfolio-image"),
  switchLanguage: document.querySelectorAll(".lang"),
  translate: document.querySelectorAll("[data-i18n]"),
  colorTheme: document.querySelector(".change-theme"),
  htmlBlocks: document.querySelectorAll(".skills, .portfolio, .video, .price"),
  html: document.querySelector('html')
};

console.log(UI.html)

export default UI;