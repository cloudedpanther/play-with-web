const menuOpenBtn = document.querySelector("header .header-column .menu-button");
const menuScreen = document.querySelector(".menu-container");
const menuBackground = menuScreen.querySelector(".menu-background");
const menuBar = menuScreen.querySelector(".menu-bar")
const menuCloseBtn = document.querySelector(".menu-bar .menu-header .menu-button");

const BRIGHTEN = "brighten-background";
const DARKEN = "darken-background";
const MENU_SLIDE_IN = "menu-slide-in";
const MENU_SLIDE_OUT = "menu-slide-out";

function handleMenuClose() {
    menuBackground.classList.remove(DARKEN);
    menuBackground.classList.add(BRIGHTEN);
    menuBar.classList.remove(MENU_SLIDE_IN);
    menuBar.classList.add(MENU_SLIDE_OUT);
    setTimeout(() => {
        menuScreen.classList.add(HIDDEN_CLASS);
    }, 500);    
}

function handleMenuOpen() {
    menuScreen.classList.remove(HIDDEN_CLASS);
    menuBackground.classList.remove(BRIGHTEN);
    menuBackground.classList.add(DARKEN);
    menuBar.classList.remove(MENU_SLIDE_OUT);
    menuBar.classList.add(MENU_SLIDE_IN);
}

function init() {
    menuOpenBtn.addEventListener("click", handleMenuOpen);
    menuBackground.addEventListener("click", handleMenuClose);
    menuCloseBtn.addEventListener("click", handleMenuClose);
}

init();