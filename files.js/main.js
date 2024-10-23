let link_services = document.getElementById('services');
let link_about = document.getElementById('about_Us');
let link_cases = document.getElementById('cases');

const modWind_1 = document.getElementById('window_services');
const modWind_2 = document.getElementById('window_about');
const modWind_3 = document.getElementById('window_cases');

link_services.addEventListener('click', function(){
  modWind_1.classList.toggle('mod__open');
  link_services.classList.toggle('color-active');
})
link_about.addEventListener('click', function(){
  modWind_2.classList.toggle('mod__open');
  link_about.classList.toggle('color-active');
})

link_cases.addEventListener('click', function(){
  modWind_3.classList.toggle('mod__open');
  link_cases.classList.toggle('color-active');
})
// открытие бокового меню. (РАБОТАЕТпока только на центральной странице)
const navBar = document.querySelector('.nav-bar-menu'); 
let sideBar = document.querySelector('.side-menu');
navBar.addEventListener('click', function(){
  console.log('Click');
  sideBar.classList.toggle('block-show');
})
// закрытие бокового меню.
const closeSideMenu = document.querySelector('.side-menu-beck');
closeSideMenu.addEventListener('click', function(){
  sideBar.classList.toggle('block-show');
})