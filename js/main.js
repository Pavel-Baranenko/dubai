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

