const targets = document.querySelectorAll('.fade-up');

function fadeAnime(){
  const trigger = window.innerHeight * 0.85;

  targets.forEach((target, index) => {
    const top = target.getBoundingClientRect().top;

     if(top < trigger){
      setTimeout(() => {
      target.classList.add('show');
    }, index * 120);
   }
  });
}

window.addEventListener('scroll', fadeAnime);
window.addEventListener('load', fadeAnime);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 250;

    if(pageYOffset >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});

const text = "看護師経験を活かし、患者様に「伝わる」デザインをご提供します。";
const typingText = document.getElementById("typing-text");
const fvImg = document.querySelector(".fv-img");

let i = 0;

function typing() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typing, 60);
  } else {
    fvImg.classList.add("show");
  }
}

window.addEventListener("load", typing);



const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  document.body.classList.toggle('menu-open');

  if(nav.classList.contains('open')){
    menuBtn.textContent = '✕';
  }else{
    menuBtn.textContent = '☰';
  }
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuBtn.textContent = '☰';
  });
});