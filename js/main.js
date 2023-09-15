const menu = document.querySelectorAll(".calculator__content-menu");
const menuList = document.querySelectorAll(".calculator__list");
const menuArrow = document.querySelectorAll(".calculator__content-menu svg");
const menuItems = document.querySelectorAll('.calculator__item');


for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", () => {
    menu[i].classList.toggle("active");
    menuArrow[i].classList.toggle("active");
    menuList[i].classList.toggle("active");
    if(i==0){

      calcVal[0].textContent = operationIcons[1].src.split('.')[operationIcons[1].src.split('.').length-2].split('/').slice(-1).join('').toUpperCase();
      calcVal[1].textContent = operationIcons[1].src.split('.')[operationIcons[1].src.split('.').length-2].split('/').slice(-1).join('').toUpperCase();
    
    
      let data;
      axios.get("https://api.rub-try.ru/api/v1/coins").then((responce) => {
      data = responce.data
      for(let i in data){
        if(operationIcons[0].src.split('.')[operationIcons[0].src.split('.').length-2].split('/').slice(-1).join('').toUpperCase() == data[i].coin){
      
          if(calcVal[0].textContent == 'AED'){
            calcNum[0].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_AED)  ;
            calcNum[1].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_AED)  ;
          } 
          if(calcVal[0].textContent == 'USD'){
            calcNum[0].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_USD) ;
            calcNum[1].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_USD) ;
          } 
          if(calcVal[0].textContent == 'USDT'){
            
            calcNum[0].textContent = Math.round( document.querySelector('.calculator__content-input').value * data[i].curs_USDT);
            calcNum[1].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_USDT) ;
          }
          if(calcVal[0].textContent == 'RUB'){
    
            calcNum[0].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_RUB) ;
            calcNum[1].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_RUB) ;
          }
         
        }
      }
    })

      if(operationText[0].textContent == 'Рубль'){
       
        
        for(let j = 3 ; j < menuItems.length; j++){
          if(menuItems[j].textContent.replace(/\r?\n/g, "")
          .split(" ")
          .join("") == 'Рубль' || menuItems[j].textContent.replace(/\r?\n/g, "")
          .split(" ")
          .join("") == 'Teaher'){
            menuItems[j].style.display = 'none'
          }
          else{
            menuItems[j].style.display = 'flex'
          }
          document.querySelectorAll('.calculator__list')[1].style.bottom = '-37%'
          if(window.matchMedia('(max-width: 768px').matches){
            document.querySelectorAll('.calculator__list')[1].style.bottom = '-57%';
          }
          document.querySelectorAll('.calculator__list')[1].style.borderRadius = '0px 0px 30px 30px'
          document.querySelectorAll('.calculator__list')[1].style.width = '100.5%'
        }

        if(operationText[0].textContent == operationText[1].textContent){
          operationText[1].textContent = 'Дирхам'
          operationIcons[1].src = 'img/aed.svg'
          for(let i = 3 ; i < menuItems.length; i++){
            if(menuItems[i].textContent.replace(/\r?\n/g, "")
            .split(" ")
            .join("") == 'Дирхам'){
              operationChangeText[i].textContent = 'Рубль'
              operationChangeImg[i].src = 'img/rub.svg'
              menuItems[i].style.display = 'none'
            }
           
          }
        }
        if(operationText[1].textContent == 'Teaher'){
          operationText[1].textContent = 'Дирхам'
          operationIcons[1].src = 'img/usdt.svg'
          for(let i = 3 ; i < menuItems.length; i++){
            if(menuItems[i].textContent.replace(/\r?\n/g, "")
            .split(" ")
            .join("") == 'Дирхам'){
              operationChangeText[i].textContent = 'Teaher'
              operationChangeImg[i].src = 'img/usdt.svg'
              menuItems[i].style.display = 'none'
            }
           
          }
        }
      }
      if(operationText[0].textContent == 'Дирхам'){
        
      
        
        for(let i = 3 ; i < menuItems.length; i++){
          if(menuItems[i].textContent.replace(/\r?\n/g, "")
          .split(" ")
          .join("") == 'Дирхам' || menuItems[i].textContent.replace(/\r?\n/g, "")
          .split(" ")
          .join("") == 'Доллар'){
            menuItems[i].style.display = 'none'
          }
          else{
            menuItems[i].style.display = 'flex'
          }
          document.querySelectorAll('.calculator__list')[1].style.bottom = '-37%'
          if(window.matchMedia('(max-width: 768px').matches){
            document.querySelectorAll('.calculator__list')[1].style.bottom = '-57%';
          }
          document.querySelectorAll('.calculator__list')[1].style.borderRadius = '0px 0px 30px 30px'
          document.querySelectorAll('.calculator__list')[1].style.width = '100.5%'
        }
        if(operationText[0].textContent == operationText[1].textContent){
          operationText[1].textContent = 'Рубль'
          operationIcons[1].src = 'img/rub.svg'
          for(let i = 3 ; i < menuItems.length; i++){
            if(menuItems[i].textContent.replace(/\r?\n/g, "")
            .split(" ")
            .join("") == 'Рубль'){
              operationChangeText[i].textContent = 'Дирхам'
              operationChangeImg[i].src = 'img/aed.svg'
              menuItems[i].style.display = 'none'
            }
           
          }
        }
        if(operationText[1].textContent == 'Доллар'){
          operationText[1].textContent = 'Рубль'
          operationIcons[1].src = 'img/rub.svg'
          for(let i = 3 ; i < menuItems.length; i++){
            if(menuItems[i].textContent.replace(/\r?\n/g, "")
            .split(" ")
            .join("") == 'Рубль'){
              operationChangeText[i].textContent = 'Доллар'
              operationChangeImg[i].src = 'img/usd.svg'
              menuItems[i].style.display = 'none'
            }
           
          }
        }
        
      }
      if(operationText[0].textContent == 'Доллар'){
        
        
        for(let i = 3 ; i < menuItems.length; i++){
          if(menuItems[i].textContent.replace(/\r?\n/g, "")
          .split(" ")
          .join("") == 'Доллар'){
            menuItems[i].style.display = 'none'
          }
          else{
            menuItems[i].style.display = 'flex'
          }
          document.querySelectorAll('.calculator__list')[1].style.bottom = '-96%'
          if(window.matchMedia('(max-width: 768px)').matches){
            document.querySelectorAll('.calculator__list')[1].style.bottom = '-135%';
          }
        }

        if(operationText[1].textContent == 'Доллар'){
          operationText[1].textContent = 'Рубль'
          operationIcons[1].src = 'img/rub.svg'
          for(let i = 3 ; i < menuItems.length; i++){
            if(menuItems[i].textContent.replace(/\r?\n/g, "")
            .split(" ")
            .join("") == 'Рубль'){
              operationChangeText[i].textContent = 'Доллар'
              operationChangeImg[i].src = 'img/usd.svg'
              menuItems[i].style.display = 'none'
            }
           
          }
        }
        // if(operationText[1].textContent == 'Teaher'){
        //   operationText[1].textContent = 'Рубль'
        //   operationIcons[1].src = 'img/rub.svg'
        //   for(let i = 3 ; i < menuItems.length; i++){
        //     if(menuItems[i].textContent.replace(/\r?\n/g, "")
        //     .split(" ")
        //     .join("") == 'Рубль'){
        //       operationChangeText[i].textContent = 'Дирхам'
        //       operationChangeImg[i].src = 'img/aed.svg'
        //       menuItems[i].style.display = 'none'
        //     }
           
        //   }
        // }
        
      }
      if(operationText[0].textContent == 'Teaher'){
       
        
        for(let i = 3 ; i < menuItems.length; i++){
          if(menuItems[i].textContent.replace(/\r?\n/g, "")
          .split(" ")
          .join("") == 'Teaher' || menuItems[i].textContent.replace(/\r?\n/g, "")
          .split(" ")
          .join("") == 'Рубль'){
            
            menuItems[i].style.display = 'none'
          }
          else{
            menuItems[i].style.display = 'flex'
          }
          document.querySelectorAll('.calculator__list')[1].style.bottom = '-37%'
          if(window.matchMedia('(max-width: 768px').matches){
            document.querySelectorAll('.calculator__list')[1].style.bottom = '-57%';
          }
          document.querySelectorAll('.calculator__list')[1].style.borderRadius = '0px 0px 30px 30px'
          document.querySelectorAll('.calculator__list')[1].style.width = '100.5%'
        }

        if(operationText[0].textContent == operationText[1].textContent){
          operationText[1].textContent = 'Рубль'
          operationIcons[1].src = 'img/rub.svg'
          for(let i = 3 ; i < menuItems.length; i++){
            if(menuItems[i].textContent.replace(/\r?\n/g, "")
            .split(" ")
            .join("") == 'Рубль'){
              operationChangeText[i].textContent = 'Дирхам'
              operationChangeImg[i].src = 'img/aed.svg'
              menuItems[i].style.display = 'none'
            }
           
          }
        }
        if(operationText[1].textContent == 'Рубль'){
          operationText[1].textContent = 'Доллар'
          operationIcons[1].src = 'img/usd.svg'
          for(let i = 3 ; i < menuItems.length; i++){
            if(menuItems[i].textContent.replace(/\r?\n/g, "")
            .split(" ")
            .join("") == 'Доллар'){
              operationChangeText[i].textContent = 'Рубль'
              operationChangeImg[i].src = 'img/rub.svg'
              menuItems[i].style.display = 'none'
            }
           
          }
        }
      }

    }
    if(i==1){
      if(operationText[1].textContent == 'Дирхам' && operationText[0].textContent == 'Рубль'){

        for(let j = 3 ; j < menuItems.length; j++){
          if(menuItems[j].textContent.replace(/\r?\n/g, "")
          .split(" ")
          .join("") == 'Рубль' || menuItems[j].textContent.replace(/\r?\n/g, "")
          .split(" ")
          .join("") == 'Teaher'){
            menuItems[j].style.display = 'none'
          }
          else{
            menuItems[j].style.display = 'flex'
          }
          document.querySelectorAll('.calculator__list')[1].style.bottom = '-37%'
          if(window.matchMedia('(max-width: 768px').matches){
            document.querySelectorAll('.calculator__list')[1].style.bottom = '-57%';
          }
          document.querySelectorAll('.calculator__list')[1].style.borderRadius = '0px 0px 30px 30px'
          document.querySelectorAll('.calculator__list')[1].style.width = '100.5%'
        }
      }
      // if(operationText[1].textContent == 'Teaher' && operationText[0].textContent == 'Доллар'){

      //   for(let j = 3 ; j < menuItems.length; j++){
      //     if(menuItems[j].textContent.replace(/\r?\n/g, "")
      //     .split(" ")
      //     .join("") == 'Доллар' || menuItems[j].textContent.replace(/\r?\n/g, "")
      //     .split(" ")
      //     .join("") == 'Teaher'){
      //       menuItems[j].style.display = 'none'
      //     }
      //     else{
      //       menuItems[j].style.display = 'flex'
      //     }
      //     document.querySelectorAll('.calculator__list')[1].style.bottom = '-37%'
      //     if(window.matchMedia('(max-width: 768px').matches){
      //       document.querySelectorAll('.calculator__list')[1].style.bottom = '-57%';
      //     }
      //     document.querySelectorAll('.calculator__list')[1].style.borderRadius = '0px 0px 30px 30px'
      //     document.querySelectorAll('.calculator__list')[1].style.width = '100.5%'
      //   }
      // }

      calcVal[0].textContent = operationIcons[1].src.split('.')[operationIcons[1].src.split('.').length-2].split('/').slice(-1).join('').toUpperCase();
      calcVal[1].textContent = operationIcons[1].src.split('.')[operationIcons[1].src.split('.').length-2].split('/').slice(-1).join('').toUpperCase();
    
    
      let data;
      axios.get("https://api.rub-try.ru/api/v1/coins").then((responce) => {
      data = responce.data
      for(let i in data){
        if(operationIcons[0].src.split('.')[operationIcons[0].src.split('.').length-2].split('/').slice(-1).join('').toUpperCase() == data[i].coin){
      
          if(calcVal[0].textContent == 'AED'){
            calcNum[0].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_AED)  ;
            calcNum[1].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_AED)  ;
          } 
          if(calcVal[0].textContent == 'USD'){
            calcNum[0].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_USD) ;
            calcNum[1].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_USD) ;
          } 
          if(calcVal[0].textContent == 'USDT'){
            
            calcNum[0].textContent = Math.round( document.querySelector('.calculator__content-input').value * data[i].curs_USDT);
            calcNum[1].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_USDT) ;
          }
          if(calcVal[0].textContent == 'RUB'){
    
            calcNum[0].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_RUB) ;
            calcNum[1].textContent = Math.round(document.querySelector('.calculator__content-input').value * data[i].curs_RUB) ;
          }
         
        }
      }
    })

    }
   
  });
}

for(let i = 0 ; i < menuItems.length-3; i++){
  let src, name;

  menuItems[i].addEventListener('click', ()=>{
    src = operationChangeImg[i].src;
    name = operationChangeText[i].textContent;
    operationChangeText[i].textContent = operationText[0].textContent;
    operationChangeImg[i].src = operationIcons[0].src;
    operationText[0].textContent = name;
    operationIcons[0].src = src;
  })
}

for(let i = 3 ; i < menuItems.length; i++){
  let src, name;

  menuItems[i].addEventListener('click', ()=>{
    src = operationChangeImg[i].src;
    name = operationChangeText[i].textContent;
    operationChangeText[i].textContent = operationText[1].textContent;
    operationChangeImg[i].src = operationIcons[1].src;
    operationText[1].textContent = name;
    operationIcons[1].src = src;
  })
}

document.addEventListener("click", (evt) => {
  targetEl = evt.target; 
  
  do {
    if (
      targetEl == document.querySelectorAll(".calculator__content-menu")[0] ||
      targetEl == document.querySelectorAll(".calculator__content-menu")[1]
    ) {

      
      return;
    }

    targetEl = targetEl.parentNode;
  } while (targetEl);

  menu[0].classList.remove("active");
  menu[1].classList.remove("active");
  menuArrow[0].classList.remove("active");
  menuArrow[1].classList.remove("active");
  menuList[0].classList.remove("active");
  menuList[1].classList.remove("active");
});

const anchors = document.querySelectorAll(".menu__list-link");

const tradeAnchors = document.querySelectorAll(".marquee__link");

for (let tradeAnchor of tradeAnchors) {
  tradeAnchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = tradeAnchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const coursesSee = document.querySelector(".course__link");
const coursesDiv = document.querySelector(".course__list-see");
const coursesList = document.querySelector(".course__list");

coursesSee.addEventListener("click", () => {
  coursesDiv.classList.toggle("active");
  coursesList.classList.toggle("active");
  if (coursesDiv.classList.contains("active")) {
    coursesSee.textContent = "Свернуть";
  } else {
    coursesSee.textContent = "Смотреть все курсы";
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
});

const operation = document.querySelectorAll(".marquee__operation");
const firstVal = document.querySelectorAll(".marquee__operation-text");
const secVal = document.querySelectorAll(".marquee__operation-text2");

const operationIcons = document.querySelectorAll(".calculator__content-img");
const operationText = document.querySelectorAll(".calculator__content-val f");
const operationChangeImg = document.querySelectorAll(".calculator__item-img");
const operationChangeText = document.querySelectorAll(".calculator__item-text");

for (let i = 0; i < operation.length; i++) {
  operation[i].addEventListener("click", () => {
    if (
      firstVal[i].innerHTML
        .replace(/\r?\n/g, "")
        .split(" ")
        .join("")
        .slice(0, -1) !== operationText[0].textContent.slice(0, -1)
    ) {
      if (
        firstVal[i].innerHTML.replace(/\r?\n/g, "").split(" ").join("") ==
        "Дирхамы"
      ) {
        for (let i = 0; i < operationChangeText.length - 3; i++) {
          if (operationChangeText[i].textContent == "Дирхам") {
            operationChangeImg[i].src = operationIcons[0].src;

            operationChangeText[i].textContent = operationText[0].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[0].src = "img/aed.svg";
        operationText[0].textContent = "Дирхам";
      } else if (
        firstVal[i].innerHTML.replace(/\r?\n/g, "").split(" ").join("") ==
        "Рубли"
      ) {
        for (let i = 0; i < operationChangeText.length - 3; i++) {
          if (operationChangeText[i].textContent == "Рубль") {
            operationChangeImg[i].src = operationIcons[0].src;
            operationChangeText[i].textContent = operationText[0].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[0].src = "img/rub.svg";
        operationText[0].textContent = "Рубль";
      } else if (
        firstVal[i].innerHTML.replace(/\r?\n/g, "").split(" ").join("") ==
        "Доллары"
      ) {
        for (let i = 0; i < operationChangeText.length - 3; i++) {
          if (operationChangeText[i].textContent == "Доллар") {
            operationChangeImg[i].src = operationIcons[0].src;
            operationChangeText[i].textContent = operationText[0].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[0].src = "img/usd.svg";
        operationText[0].textContent = "Доллар";
      } else if (
        firstVal[i].innerHTML.replace(/\r?\n/g, "").split(" ").join("") ==
        "Teaher"
      ) {
        for (let i = 0; i < operationChangeText.length - 3; i++) {
          if (operationChangeText[i].textContent == "Teaher") {
            operationChangeImg[i].src = operationIcons[0].src;
            operationChangeText[i].textContent = operationText[0].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[0].src = "img/usdt.svg";
        operationText[0].textContent = "Teaher";
      }
    }

    if (
      secVal[i].innerHTML
        .replace(/\r?\n/g, "")
        .split(" ")
        .join("")
        .slice(0, -1) !== operationText[1].textContent.slice(0, -1)
    ) {
      if (
        secVal[i].innerHTML.replace(/\r?\n/g, "").split(" ").join("") ==
        "Дирхамы"
      ) {
        for (let i = 3; i < operationChangeText.length; i++) {
          if (operationChangeText[i].textContent == "Дирхам") {
            operationChangeImg[i].src = operationIcons[1].src;
            operationChangeText[i].textContent = operationText[1].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[1].src = "img/aed.svg";
        operationText[1].textContent = "Дирхам";
      } else if (
        secVal[i].innerHTML.replace(/\r?\n/g, "").split(" ").join("") == "Рубли"
      ) {
        for (let i = 3; i < operationChangeText.length; i++) {
          if (operationChangeText[i].textContent == "Рубль") {
            operationChangeImg[i].src = operationIcons[1].src;
            operationChangeText[i].textContent = operationText[1].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[1].src = "img/rub.svg";
        operationText[1].textContent = "Рубль";
      } else if (
        secVal[i].innerHTML.replace(/\r?\n/g, "").split(" ").join("") ==
        "Доллары"
      ) {
        for (let i = 3; i < operationChangeText.length; i++) {
          console.log(operationChangeText[i].textContent);
          if (operationChangeText[i].textContent == "Доллар") {
            console.log(
              operationText[1].textContent
                .replace(/\r?\n/g, "")
                .split(" ")
                .join("")
            );
            operationChangeImg[i].src = operationIcons[1].src;
            operationChangeText[i].textContent = operationText[1].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[1].src = "img/usd.svg";
        operationText[1].textContent = "Доллар";
      } else if (
        secVal[i].innerHTML.replace(/\r?\n/g, "").split(" ").join("") ==
        "Teaher"
      ) {
        for (let i = 3; i < operationChangeText.length - 1; i++) {
          if (operationChangeText[i].textContent == "Teaher") {
            operationChangeImg[i].src = operationIcons[1].src;
            operationChangeText[i].textContent = operationText[1].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[1].src = "img/usdt.svg";
        operationText[1].textContent = "Teaher";
      }
    }
  });
}



let calcNum = document.querySelectorAll('.calculator__content-price n');
let calcVal = document.querySelectorAll('.calculator__content-price v');


document.querySelector('.calculator__content-input').addEventListener('input', (e)=>{
  calcVal[0].textContent = operationIcons[1].src.split('.')[operationIcons[1].src.split('.').length-2].split('/').slice(-1).join('').toUpperCase();
  calcVal[1].textContent = operationIcons[1].src.split('.')[operationIcons[1].src.split('.').length-2].split('/').slice(-1).join('').toUpperCase();


  let data;
  axios.get("https://api.rub-try.ru/api/v1/coins").then((responce) => {
  data = responce.data
  for(let i in data){
    if(operationIcons[0].src.split('.')[operationIcons[0].src.split('.').length-2].split('/').slice(-1).join('').toUpperCase() == data[i].coin){
  
      if(calcVal[0].textContent == 'AED'){
        calcNum[0].textContent = Math.round(e.target.value * data[i].curs_AED)  ;
        calcNum[1].textContent = Math.round(e.target.value * data[i].curs_AED)  ;
      } 
      if(calcVal[0].textContent == 'USD'){
        calcNum[0].textContent = Math.round(e.target.value * data[i].curs_USD) ;
        calcNum[1].textContent = Math.round(e.target.value * data[i].curs_USD) ;
      } 
      if(calcVal[0].textContent == 'USDT'){
        
        calcNum[0].textContent = Math.round( e.target.value * data[i].curs_USDT);
        calcNum[1].textContent = Math.round(e.target.value * data[i].curs_USDT) ;
      }
      if(calcVal[0].textContent == 'RUB'){

        calcNum[0].textContent = Math.round(e.target.value * data[i].curs_RUB) ;
        calcNum[1].textContent = Math.round(e.target.value * data[i].curs_RUB) ;
      }
     
    }
  }
})
})


const telegram = document.querySelectorAll('.phone__mask-input');
let telegramHas = '';

for(let i = 0 ; i < telegram.length; i++){

  telegram[i].addEventListener('input', (e)=>{
    telegramHas = e.target.value;
  
  })
}

document.querySelector('.calculator__content-btn').addEventListener('click', ()=>{
  let data, id1, id2, minSum;
  axios.get("https://api.rub-try.ru/api/v1/coins").then((responce) => {
  data = responce.data
  for(let i in data){
    if(operationIcons[0].src.split('.')[operationIcons[0].src.split('.').length-2].split('/').slice(-1).join('').toUpperCase() == data[i].coin){
      id1 = data[i].id;
      minSum = data[i].min_sum;
      
    }
    if(operationIcons[1].src.split('.')[operationIcons[1].src.split('.').length-2].split('/').slice(-1).join('').toUpperCase() == data[i].coin){
      id2=data[i].id;
      
    }
  }

  if(document.querySelector('.calculator__content-input').value >= minSum && telegramHas.length > 7){
    axios.post('https://api.rub-try.ru/api/deals', {
    "first_coin": id1,
    "sum_first": document.querySelector('.calculator__content-input').value,
    "second_coin": id2,
    "sum_second": calcNum[0].textContent,
    "city_id": 1,
    "telegram": telegramHas,

  }).then((answer)=>{
    console.log(answer)
    document.querySelectorAll('.redText')[0].classList.remove('active');
    document.querySelectorAll('.redText')[1].classList.remove('active');
    document.querySelectorAll('.redText')[2].classList.remove('active');
    document.querySelector('.calculator__content-input').style.borderColor = '#dee6f4';
    document.querySelectorAll('.calculator__content-input--box')[0].style.borderColor = '#dee6f4';
    document.querySelectorAll('.calculator__content-input--box')[1].style.borderColor = '#dee6f4';
  })}
  else{
    document.querySelectorAll('.redText')[0].classList.add('active');
    document.querySelectorAll('.redText')[0].textContent = `Минимальная сумма обмена - ${minSum}`;
    document.querySelectorAll('.redText')[1].classList.add('active');
    document.querySelectorAll('.redText')[2].classList.add('active');
    document.querySelector('.calculator__content-input').style.borderColor = 'red';
    document.querySelectorAll('.calculator__content-input--box')[0].style.borderColor = 'red';
    document.querySelectorAll('.calculator__content-input--box')[1].style.borderColor = 'red';
  }
})
 
})

axios.get("https://api.rub-try.ru/api/v1/coins").then((responce) =>{
  console.log(responce.data)
})


let operationLink = document.querySelectorAll(".footer__link");
let firstValLink;
let secValLink;


// const operationIcons = document.querySelectorAll(".calculator__content-img");
// const operationText = document.querySelectorAll(".calculator__content-val f");
// const operationChangeImg = document.querySelectorAll(".calculator__item-img");
// const operationChangeText = document.querySelectorAll(".calculator__item-text");

for (let i = 0; i < operationLink.length; i++) {
  
  operationLink[i].addEventListener("click", () => {
    firstValLink = operationLink[i].textContent.split(' ')[1]
    secValLink = operationLink[i].textContent.split(' ')[3]
    console.log(firstValLink)
    console.log(operationText[0].textContent.slice(0, -1))
    if (

      firstValLink.slice(0, -1) !== operationText[0].textContent.slice(0, -1)
      
    ) {
      if (
        firstValLink ==
        "дирхамы"
      ) {
        for (let i = 0; i < operationChangeText.length - 3; i++) {
          console.log('sadfsa')
          if (operationChangeText[i].textContent == "Дирхам") {
            operationChangeImg[i].src = operationIcons[0].src;

            operationChangeText[i].textContent = operationText[0].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[0].src = "img/aed.svg";
        operationText[0].textContent = "Дирхам";
      } else if (
        firstValLink ==
        "рубли"
      ) {
        for (let i = 0; i < operationChangeText.length - 3; i++) {
          if (operationChangeText[i].textContent == "Рубль") {
            operationChangeImg[i].src = operationIcons[0].src;
            operationChangeText[i].textContent = operationText[0].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[0].src = "img/rub.svg";
        operationText[0].textContent = "Рубль";
      } else if (
        firstValLink ==
        "доллары"
      ) {
        for (let i = 0; i < operationChangeText.length - 3; i++) {
          if (operationChangeText[i].textContent == "Доллар") {
            operationChangeImg[i].src = operationIcons[0].src;
            operationChangeText[i].textContent = operationText[0].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[0].src = "img/usd.svg";
        operationText[0].textContent = "Доллар";
      } else if (
        firstValLink ==
        "Teaher"
      ) {
        for (let i = 0; i < operationChangeText.length - 3; i++) {
          if (operationChangeText[i].textContent == "Teaher") {
            operationChangeImg[i].src = operationIcons[0].src;
            operationChangeText[i].textContent = operationText[0].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[0].src = "img/usdt.svg";
        operationText[0].textContent = "Teaher";
      }
    }

    if (
      secValLink.slice(0, -1) !== operationText[1].textContent.slice(0, -1)
    ) {
      if (
        secValLink ==
        "дирхамы"
      ) {
        for (let i = 3; i < operationChangeText.length; i++) {
          if (operationChangeText[i].textContent == "Дирхам") {
            operationChangeImg[i].src = operationIcons[1].src;
            operationChangeText[i].textContent = operationText[1].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[1].src = "img/aed.svg";
        operationText[1].textContent = "Дирхам";
      } else if (
        secValLink == "рубли"
      ) {
        for (let i = 3; i < operationChangeText.length; i++) {
          if (operationChangeText[i].textContent == "Рубль") {
            operationChangeImg[i].src = operationIcons[1].src;
            operationChangeText[i].textContent = operationText[1].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[1].src = "img/rub.svg";
        operationText[1].textContent = "Рубль";
      } else if (
        secValLink ==
        "доллары"
      ) {
        for (let i = 3; i < operationChangeText.length; i++) {
          console.log(operationChangeText[i].textContent);
          if (operationChangeText[i].textContent == "Доллар") {
            console.log(
              operationText[1].textContent
                .replace(/\r?\n/g, "")
                .split(" ")
                .join("")
            );
            operationChangeImg[i].src = operationIcons[1].src;
            operationChangeText[i].textContent = operationText[1].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[1].src = "img/usd.svg";
        operationText[1].textContent = "Доллар";
      } else if (
        secValLink ==
        "Teaher"
      ) {
        for (let i = 3; i < operationChangeText.length - 1; i++) {
          if (operationChangeText[i].textContent == "Teaher") {
            operationChangeImg[i].src = operationIcons[1].src;
            operationChangeText[i].textContent = operationText[1].textContent
              .replace(/\r?\n/g, "")
              .split(" ")
              .join("");
          }
        }
        operationIcons[1].src = "img/usdt.svg";
        operationText[1].textContent = "Teaher";
      }
    }
  });
}

