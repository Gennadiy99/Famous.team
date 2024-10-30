let link_services = document.getElementById("services");
let link_about = document.getElementById("about_Us");
let link_cases = document.getElementById("cases");

// элементы для перекл иконки стрелки вверх/вниз.
let iconListServ = document.querySelector("#services i");
let iconListAbout = document.querySelector("#about_Us i");
let iconListCases = document.querySelector("#cases i");

const modWind_1 = document.getElementById("window_services");
const modWind_2 = document.getElementById("window_about");
const modWind_3 = document.getElementById("window_cases");

// откр/закр мод.окон кликом на СПИСОК
// установка color-active
// уст.иконки позиции вверх/вниз
link_services.addEventListener("click", function () {
  console.log("Клик по Списку");
  modWind_1.classList.toggle("mod__open");
  link_services.classList.toggle("color-active");
  iconListServ.classList.toggle("rotate_up");
});

link_about.addEventListener("click", function () {
  modWind_2.classList.toggle("mod__open");
  link_about.classList.toggle("color-active");
  iconListAbout.classList.toggle("rotate_up");
});

link_cases.addEventListener("click", function () {
  modWind_3.classList.toggle("mod__open");
  link_cases.classList.toggle("color-active");
  iconListCases.classList.toggle("rotate_up");
});
// Закрытие Мод окна СЕРВИС через иконку "крестик"
const closeServ = document.getElementById("services-close");
closeServ.addEventListener("click", function () {
  modWind_1.classList.toggle("mod__open");
  link_services.classList.toggle("color-active");
  iconListServ.classList.toggle("rotate_up");
});

// Закрытие Мод окна О НАС через иконку "крестик"
const closeAbout = document.getElementById("close-about");
closeAbout.addEventListener("click", function () {
  modWind_2.classList.toggle("mod__open");
  link_about.classList.toggle("color-active");
  iconListAbout.classList.toggle("rotate_up");
});

// Закрытие Мод окна Кейсы через иконку "крестик"
const closeCases = document.getElementById("close-cases");
closeCases.addEventListener("click", function () {
  modWind_3.classList.toggle("mod__open");
  link_cases.classList.toggle("color-active");
  iconListCases.classList.toggle("rotate_up");
});

// открытие бокового меню. (РАБОТАЕТпока только на центральной странице)
const navBar = document.querySelector(".nav-bar-menu");
let sideBar = document.querySelector(".side-menu");
navBar.addEventListener("click", function () {
  sideBar.classList.add("block-show");
});
// закрытие бокового меню.
const closeSideMenu = document.querySelector(".side-menu-beck");
closeSideMenu.addEventListener("click", function () {
  sideBar.classList.remove("block-show");
});
// Ссылки бокового меню на страницы
const ExitMain = document.getElementById("sideExitMain");
const ExitSevices = document.getElementById("sideExitSevices");
const ExitCases = document.getElementById("sideExitCases");

// Отображение и скрытие списка в боковом меню.
const nestedList = document.getElementById("nested-list");
const MainList = document.querySelector(".side-p");
MainList.addEventListener("click", function () {
  nestedList.classList.toggle("show");
});
// Клик на "О нас"
const sideAbout = document.getElementById("sideExitAbout");
sideAbout.addEventListener("click", function () {
  modWind_2.classList.toggle("mod__open");
  link_about.classList.toggle("color-active");
  iconListAbout.classList.toggle("rotate_up");
  sideBar.classList.toggle("block-show");
});
// Клик на Кейсы side-bar
const sideCases = document.getElementById("sideExitCases");
sideCases.addEventListener("click", function () {
  modWind_3.classList.toggle("mod__open");
  link_cases.classList.toggle("color-active");
  iconListCases.classList.toggle("rotate_up");
  sideBar.classList.toggle("block-show");
});


