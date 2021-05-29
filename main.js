// слайдер
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  }
});

const burger = document.querySelector('#burger'),
  nav = document.querySelector('#mob-nav'),
  navLinks = document.querySelectorAll('.mob-nav-link'),
  body = document.querySelector('body');
  
burger.addEventListener('click', () => {
  burger.classList.toggle('is-open');
  nav.classList.toggle('is-open');

  if (burger.classList.contains('is-open')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
});

for (let navLink of navLinks) {
  navLink.addEventListener('click', (e) => {
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
    body.style.overflow = '';
  });
}

// анимация счетчика
const counters = document.querySelectorAll('.advantages-item span');

let counterUp = (elem, time, fps = 15)=>{
  if(elem.textContent == "0"){
    let endNumber = +elem.dataset.count;
    let increment = endNumber / (time / fps);
    let currentNumber = 0;
    let timedCount = setInterval(()=>{
      if(currentNumber < endNumber){
        currentNumber += increment;
        if(currentNumber>endNumber)currentNumber = endNumber;
        elem.textContent = Math.round(currentNumber);
      }else{clearInterval(timedCount);}
    }, fps);
  }
}
let startAnimation = () => {
  counters.forEach((item)=>{
    if(item.offsetTop + 200< window.pageYOffset + screen.height){
      counterUp(item, 1100);
    }
  });
}

document.addEventListener('DOMContentLoaded', startAnimation);
document.addEventListener('scroll', startAnimation);

// анимации страницы
// проверка, загрузился ли gsap 
try {
  gsap;
  let curtains = document.querySelector('.curtains');
  curtains.style.display = 'flex';
  
  gsap.to(".curtain-1", {
    duration: 1.7,
    y: -1400,
    onComplete: () => curtains.style.display = ''
  });
  gsap.to(".curtain-2", {
    duration: 1.7,
    y: 1400
  });

  gsap.from(".main-heading", {duration: 1.3, x: -300, opacity: 0, delay: 0.5});
  gsap.from(".promo-description", {duration: 1.3, x: -300, opacity: 0, delay: 0.7});
  gsap.from(".promo-button", {duration: 1.3, x: -300, opacity: 0, delay: 0.9});
  gsap.from(".about", {duration: 1.2, y: 120, opacity: 0});
  gsap.from(".works", {scrollTrigger: ".works", duration: 1.2, y: 120, opacity: 0});
  gsap.from(".reviews", {scrollTrigger: ".reviews", duration: 1.2, y: 120, opacity: 0});
  gsap.from(".form-wrap", {scrollTrigger: ".form-wrap", duration: 1.2, opacity: 0});
    
  let process = document.querySelectorAll('.process-item');
  let service = document.querySelectorAll('.service-item');

  process.forEach((item, i)=>{
    gsap.from(process[i], {scrollTrigger: process[i], duration: 1, scale: .95, y: 100});
  });
  service.forEach((item, i)=>{
    if (i%2){
      gsap.from(service[i], {scrollTrigger: service[i], duration: 1, scale: .95, x: 100});
    } else {
      gsap.from(service[i], {scrollTrigger: service[i], duration: 1, scale: .95, x: -100});
    }
  });
} catch (e){
  console.error('gsap не загрузился');
}