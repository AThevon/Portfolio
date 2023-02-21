//* SETTING DU LANDING 
if (window.innerWidth < 1025) {
    console.log('coucou');
    document.body.style.overflow = 'auto';
}
// Responsive header
const myH2 = document.querySelector('.title-h2');

window.addEventListener('resize', () => {
    if (navBar.offsetHeight != window.innerHeight) {
        document.body.style.overflow = 'auto';
        myH2.textContent = '.portfolio';
    }
    else {
        document.body.style.overflow = 'hidden';
        myH2.textContent = 'adrien.thevon'
    }
});

// effet 3d de la card
function handleMouseMove(event) {
    const card = document.querySelector('#moving-card');
    const height = window.innerHeight;
    const width = window.innerWidth;

    // Création des angles (left, bottom) and (right, top)
    const yAxisDegree = event.pageX / width * 80 - 40;
    const xAxisDegree = event.pageY / height * -1 * 80 + 50;

    card.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
}

document.onmousemove = handleMouseMove;

// Activation du bouton logo dev
const logoDev = document.querySelector('.logo-dev');
const logoDevBg = document.querySelector('.logo-dev-bg');

const navBar = document.querySelector('.navbar');
const movingCard = document.querySelector('.landing-card')

logoDev.addEventListener('click', function () {
    document.onmousemove = '';
    this.classList.toggle('logo-dev-onclick')
    this.classList.remove('logo-dev-hover')
    movingCard.removeAttribute('id')
    movingCard.style['transition'] = "1s";
    logoDev.style['transition'] = ".8s";
    logoDevBg.style['transition'] = ".8s";
    navBar.style.backgroundPositionY = "450%";

    // Mise en place de timers
    setTimeout(() => {
        movingCard.style.height = "0";
        movingCard.style.width = "0";
        navBar.style.gap = "0";
        logoDev.style.height = "0";
        logoDev.style.width = "0";
        logoDevBg.style.height = "0";
        logoDevBg.style.width = "0";
    }, 1000);
    
    setTimeout(() => {
        navBar.style['height'] = "8rem";
        document.body.style['overflow-y'] = 'auto';
    }, 1500);
    
    setTimeout(() => {
        document.querySelector('.card-1').setAttribute('id', 'card-1')
        document.querySelector('.card-2').setAttribute('id', 'card-2')
        document.querySelector('.card-3').setAttribute('id', 'card-3')
        document.querySelector('.profil-picture').setAttribute('id', 'pp-anim')
        document.querySelector('.first-name').setAttribute('id', 'first-name-fade')
        document.querySelector('.last-name').setAttribute('id', 'last-name-fade')
        document.querySelector('.job').setAttribute('id', 'job-fade')
    }, 2200);

    setTimeout(() => {
        document.querySelector('.title').classList.add('title-anim');
        document.querySelector('.left-bracket').classList.add('left-bracket-anim');
        document.querySelector('.right-bracket').classList.add('right-bracket-anim');
    }, 3000);

    setTimeout(() => {
        document.querySelector('.title-h2').textContent = '.portfolio';
    }, 3800);

    setTimeout(() => {
        document.querySelector('.btn-nav').style['opacity'] = '1';
    }, 5000);

})



// ANIMATION DU LOGO DES CARDS EXP ON CLICK

document.querySelectorAll('.card-exp').forEach((el) => {
    el.addEventListener('click', logoAnim)
})

function logoAnim(e) {
    const figure = e.currentTarget.querySelector('figure');
    figure.classList.add('figure-onclick');
    setTimeout( () => {
        figure.classList.remove('figure-onclick');
    }, 400);

}


//! CARDS HERO

gsap.to(".card-out", {
    scrollTrigger: {
        trigger: '.hero',
        start: "top bottom",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
    },
    rotation: 0,
    duration: 1,
    x: -2000,
    y: 600,
});


//! SWIPERS.JS 


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
