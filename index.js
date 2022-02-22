import i18Obj from "./translate.js";
import UI from "./uielements.js";

let lang = "en";
let theme = "light";

function toggleMenu() {
  UI.hamburger.classList.toggle("open");
  UI.nav.classList.toggle("open");
}

function closeMenu() {
  UI.hamburger.classList.remove("open");
  UI.nav.classList.remove("open");
}

function changeImage(event) {
  const season = event.target.dataset.i18n;
  if (season) {
    UI.portfolioImg.forEach(
      (img, index) =>
        (img.src = `./assets/portfolio/${season}/${index + 1}.jpg`)
     
    );
    
  }
}

function changeClassActive(event) {
  const changeColorBtn = event.target.classList;
  if (changeColorBtn.value === "btn") {
    UI.portfolioBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
  }
  if (changeColorBtn.value === "lang") {
    lang = event.target.textContent;
    UI.switchLanguage.forEach((language) => {
      language.classList.remove("active");
    });
  }
  return changeColorBtn.add("active");
}

function getTranslate(language) {

  UI.translate.forEach((i) => i.textContent = i18Obj[language][i.dataset.i18n]);
}

function changeColorTheme() {
  UI.colorTheme.classList.toggle("active");
  UI.htmlBlocks.forEach((i) => i.classList.toggle("light-theme"));
  
  const checkClass = UI.colorTheme.classList.contains("active");
  checkClass ? (theme = "light") : (theme = "dark");
  UI.html.classList.toggle("light");
}


function setLocalStorage() {
  localStorage.setItem("lang", lang);
}

function getLocalStorage() {
  if (localStorage.getItem("lang")) {
    const lang = localStorage.getItem("lang");
    getTranslate(lang);
  }
}

UI.hamburger.addEventListener("click", toggleMenu);
UI.link.forEach((link) => link.addEventListener("click", closeMenu));
UI.portfolioBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    changeImage(e), changeClassActive(e);
  })
);

UI.switchLanguage.forEach((lang) =>
  lang.addEventListener("click", (e) => {
    let translate = e.target.textContent;
    changeClassActive(e);
    getTranslate(translate);
  })
);

UI.colorTheme.addEventListener("click", changeColorTheme);

window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);





