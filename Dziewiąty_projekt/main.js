// APPEAR AND DISPPEAR MENU

const bars = document.querySelector('.home__bars');
const menuList = document.querySelector('.menu__list');
const menuCross = document.querySelector('.menu__cross');

const showNavLinks = () => {
    menuList.classList.add('active');
    bars.style.display = "none";
    menuCross.style.display = "block";
}

const disappearNavLinks = () => {
    menuList.classList.remove('active');
    bars.style.display = "block";
    menuCross.style.display = "none";
}

bars.addEventListener('click', showNavLinks);
menuCross.addEventListener('click', disappearNavLinks);

// CHANGE MENU COLOR ON SCROLL

const menu = document.querySelector('.menu');

const addMenuColor = () => {
    if (this.scrollY >= 100) {
        menu.style.backgroundColor = 'rgba(56, 68, 90, 0.9)';
    } else {
        menu.style.backgroundColor = 'transparent';
    }
}

window.addEventListener('scroll', addMenuColor);

// ANIMATED WORDS AROUND THE TRIANGLE

const animatedText = document.querySelectorAll('.home__icon-text');
const homeContent = document.querySelector('.home__content');

const showAnimatedText = () => {
    animatedText.forEach((text) => {
        text.classList.add('active');
    })
    homeContent.classList.add('active');
}

window.addEventListener('DOMContentLoaded', showAnimatedText);

// TYPING

const typingText = document.querySelector('.home__typing');
const cursor = document.querySelector('.home__am-cursor');
const typingWords = ['piłkarzem', 'uczniem', 'kierowcą'];

let wordCounter = 0;
let letterCounter = 0;

const typing = () => {
    typingText.textContent += typingWords[wordCounter][letterCounter];

    if (letterCounter <= (typingWords[wordCounter].length - 1)) {
        ++letterCounter;
    } else {
        typingText.textContent = "";
        ++wordCounter;
        letterCounter = 0;
    }
    if (wordCounter >= typingWords.length) {
        wordCounter = 0;
    }

    setTimeout(typing, 400);
}

window.addEventListener('DOMContentLoaded', typing);

// SHOW CURSOR

const showCursor =  setInterval(() => {
    cursor.classList.toggle("active");
}, 300)



