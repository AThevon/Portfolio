// SETTING DU LANDING 

// effet 3d de la card
function handleMouseMove(event) {
    const card = document.querySelector('#moving-card');
    const height = window.innerHeight;
    const width = window.innerWidth;

    // Creates angles (left, bottom) and (right, top)
    const yAxisDegree = event.pageX / width * 80 - 40;
    const xAxisDegree = event.pageY / height * -1 * 20 + 20;

    card.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
}

document.onmousemove = handleMouseMove;

// Activation du bouton logo dev
const logoDev = document.querySelector('.logo-dev');
const logoDevBg = document.querySelector('.logo-dev-bg');

const navBar = document.querySelector('.navbar');
const movingCard = document.querySelector('.landing-card')

document.body.style['overflow'] = 'hidden';

logoDev.addEventListener('click', function () {
    document.onmousemove = '';
    this.classList.toggle('logo-dev-onclick')
    this.classList.remove('logo-dev-hover')
    movingCard.removeAttribute('id')
    movingCard.style['transition'] = "1s";
    logoDev.style['transition'] = ".8s";
    logoDevBg.style['transition'] = ".8s";

    // Mise en place de timers
    var delay1 = 1000;
    setTimeout(function () {
        //your code to be executed after delay

        movingCard.style['height'] = "0";
        movingCard.style['width'] = "0";
        navBar.style['gap'] = '0';
        logoDev.style['height'] = "0";
        logoDev.style['width'] = "0";
        logoDevBg.style['height'] = "0";
        logoDevBg.style['width'] = "0";
    }, delay1);

    var delay2 = 1500;
    setTimeout(function () {
        //your code to be executed after delay
        navBar.style['height'] = "8rem";
        document.body.style['overflow-y'] = 'auto';
    }, delay2);

    var delay3 = 2200;
    setTimeout(function () {
        //your code to be executed after delay
        document.querySelector('.card-1').setAttribute('id', 'card-1')
        document.querySelector('.card-2').setAttribute('id', 'card-2')
        document.querySelector('.card-3').setAttribute('id', 'card-3')
        document.querySelector('.profil-picture').setAttribute('id', 'pp-anim')
        document.querySelector('.first-name').setAttribute('id', 'first-name-fade')
        document.querySelector('.last-name').setAttribute('id', 'last-name-fade')
        document.querySelector('.job').setAttribute('id', 'job-fade')
    }, delay3);

    var delay4 = 3000;
    setTimeout(function () {
        //your code to be executed after delay
        document.querySelector('.title').classList.add('title-anim');
        document.querySelector('.left-bracket').classList.add('left-bracket-anim');
        document.querySelector('.right-bracket').classList.add('right-bracket-anim');
    }, delay4);

    var delay5 = 3800;
    setTimeout(function () {
        //your code to be executed after delay
        document.querySelector('.title-h2').textContent = '.portfolio';
    }, delay5);

    var delay6 = 5000;
    setTimeout(function () {
        //your code to be executed after delay
        document.querySelector('.btn-nav').style['opacity'] = '1';
    }, delay6);

})


// #region CARDS HERO

gsap.to(".card-out-1", {
    scrollTrigger: {
        trigger: '.hero',
        start: "top bottom",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
    },
    rotation: 360,
    duration: 1,
    x: 1600,
    y: -100,
});
gsap.to(".card-out-2", {
    scrollTrigger: {
        trigger: '.hero',
        start: "top bottom",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
    },
    rotation: 270,
    duration: 3,
    x: 800,
    y: -1200,
});
gsap.to(".card-out-3", {
    scrollTrigger: {
        trigger: '.hero',
        start: "top bottom",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
    },
    rotation: 180,
    duration: 10,
    x: 1200,
    y: 800,
});
gsap.to(".card-out-4", {
    scrollTrigger: {
        trigger: '.hero',
        start: "top bottom",
        end: "500px",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
    },
    rotation: 300,
    duration: 10,
    x: -200,
    y: 1400,
});
gsap.to(".card-out-5", {
    scrollTrigger: {
        trigger: '.hero',
        start: "top bottom",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
    },
    rotation: 400,
    duration: 10,
    x: -800,
    y: 300,
});
gsap.from("#card-fcc", {
    scrollTrigger: {
        trigger: '.about',
        start: "top bottom",
        end: "center center",
        toggleActions: "restart pause reverse pause",
        scrub: true,
    },
    duration: 10,
    x: "-100rem",
    scale: .8
});
gsap.from("#card-cefim", {
    scrollTrigger: {
        trigger: '.about',
        start: "top bottom",
        end: "center center",
        toggleActions: "restart pause reverse pause",
        scrub: true,
    },
    duration: 10,
    scale: .8
});
gsap.from("#card-react", {
    scrollTrigger: {
        trigger: '.about',
        start: "top bottom",
        end: "center center",
        toggleActions: "restart pause reverse pause",
        scrub: true,
    },
    duration: 10,
    x: "100rem",
    scale: .8
});

// #endregion

// ANIMATION ALEATOIRE DES CARDS ON CLICK

document.querySelectorAll('.card-exp').forEach((el) => {
    el.addEventListener('click', randomAnim)
})

let allAnims = ["anim-card-1", "anim-card-2", "anim-card-3", "anim-card-4", "anim-card-5", "anim-card-6", "anim-card-7", "anim-card-8"];

function randomAnim() {
    let currentId = this.id;
    let randomId = allAnims[Math.floor(Math.random() * allAnims.length)];
    if (currentId === randomId) {
        randomAnim();
    } else {
        this.id = randomId;
    }
}





const swiper = new Swiper('.my-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'cards',
    cardsEffect: {
        slideShadows: true,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
