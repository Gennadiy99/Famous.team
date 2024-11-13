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
// ****** Переделка кликов страницы *****
// функция для обращения ко всем пунктам списка click__list

const listClick = document.querySelectorAll('.click__list');
const windMod = document.querySelectorAll('.modWindow')
const iconRotate = document.querySelectorAll('.icon-right')

// закрытие всех модальных окон./ откл кр.цвета/ поворот иконки.
function closeAllModal(){
  windMod.forEach((wind) =>{
    wind.classList.add('mod__hidden');
    wind.classList.remove('mod__open');
  })
  listClick.forEach((list)=>{
    list.classList.remove('color-active');
  })
  iconRotate.forEach((icon)=>{
    icon.classList.remove('rotate_up');
    icon.classList.add('rotate_down');
  })
}
// При клике "Закрытие Окон" получение id окна с кликом и открытие его.

listClick.forEach((elem) => {
  elem.addEventListener("click", () => {
    closeAllModal();

    elem.querySelector('.icon-right').classList.add('rotate_up');
    elem.classList.add('color-active');

    const targetId = elem.getAttribute('data-target');
    const targetWindow = document.getElementById(targetId);
    
    targetWindow.classList.add('mod__open');
    targetWindow.classList.remove('mod__hidden');
    
  });
});
// Новая формула для Закрытие всех Мод-Окно через Крестик.
const closeIcon = document.querySelectorAll('.icon-cancel');
closeIcon.forEach((icon)=>{
  icon.addEventListener('click',()=>{
    const modWind = icon.closest('.modWindow');
    modWind.classList.remove('mod__open');
    modWind.classList.add('mod__hidden');

    listClick.forEach((list)=>{
      list.classList.remove('color-active');
    })

    iconRotate.forEach((icon)=>{
      icon.classList.remove('rotate_up');
      icon.classList.add('rotate_down');
    })
  })
})
console.log(closeIcon);

