const menu = document.querySelectorAll('.calculator__content-menu');
const menuArrow = document.querySelectorAll('.calculator__list');
const menuList = document.querySelectorAll('.calculator__content-menu svg');


for(let i = 0; i < menu.length; i++){
    menu[i].addEventListener('click', ()=>{
        menu[i].classList.toggle('active');
        menuArrow[i].classList.toggle('active')
        menuList[i].classList.toggle('active')
    })
}

const anchors = document.querySelectorAll('.menu__list-link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const coursesSee = document.querySelector('.course__link');
const coursesDiv = document.querySelector('.course__list-see');
const coursesList = document.querySelector('.course__list')

coursesSee.addEventListener('click', ()=>{
  coursesDiv.classList.toggle('active');
  coursesList.classList.toggle('active');
  if(coursesDiv.classList.contains('active')){
    coursesSee.textContent = 'Свернуть'
  }
  else{
    coursesSee.textContent = 'Смотреть все курсы'
  }
})

var swiper = new Swiper(".mySwiper", {
  
  slidesPerView: 'auto'
});

