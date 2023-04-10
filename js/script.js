//! SWIPERS.JS 


const swiper = new Swiper('.my-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'cube',
    cubeEffect: {
        slideShadows: true,
    },
    allowTouchMove: false,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


// PARALLAX GSAP

gsap.to(".parallax", {
    scrollTrigger: {
    scrub: true
    }, 
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none"
});


// SETTING DES ARROW NAV SWIPER HOMEMADE
const prevBtn = document.querySelector('.main-button-prev');
const nextBtn = document.querySelector('.main-button-next');

prevBtn.style.transform = 'translateX(-100%)';


function detectPagination() {
    if (swiper.realIndex != 0) {
        prevBtn.style.display = 'block';
        setTimeout(() => {
            prevBtn.style.transform = 'translateX(0)';
        }, 400);
    } else {
        prevBtn.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            prevBtn.style.display = 'none';
        }, 400);
    } 
    if (swiper.realIndex === swiper.slides.length - 1) {
        nextBtn.style.transform = 'translateX(100%)';
        setTimeout(() => {
            nextBtn.style.display = 'none';
        }, 400);
    } else {
        nextBtn.style.display = 'block';
        setTimeout(() => {
            nextBtn.style.transform = 'translateX(0)';
        }, 400);
    }
}

prevBtn.addEventListener('click', () => {
    swiper.slidePrev();
    detectPagination();
});

nextBtn.addEventListener('click', () => {
    swiper.slideNext();
    detectPagination();
});

//* SETTING DU LANDING 
const myH2 = document.querySelector('.title-h2');
function responsiveMode() {
    if (window.innerWidth < 1025) {
        swiper.allowTouchMove = true;
        document.body.style.overflow = 'auto';
        myH2.textContent = '.portfolio';
        const tiltCards = document.querySelectorAll('.card-exp');
        tiltCards.forEach(card => {
            card.removeAttribute('data-tilt', '');
        });
    }
}

responsiveMode();

// GSAP - MENU CONTACT
const btnNav = document.querySelector('.btn-nav');
const bgMenu = document.querySelector('.bg-menu');
const aside = document.querySelector('.main-aside');

gsap.to(aside, {
    y: -1000,
    x: 1000,
});

TweenMax.to(aside, 1, {
    opacity: 1,
    delay: 1
});

const logoCross = document.createElement('img');
logoCross.src = 'img/cross-icon.svg';
logoCross.alt = '';

function openCloseMenu() {
    if (!logoCross.classList.contains('btn-menu-close')) {
        document.body.style.overflowY = 'hidden';
        logoCross.style.transform = 'rotate(0deg)';
        logoCross.style.scale = '1';
        bgMenu.classList.add('bg-menu-active');
        btnNav.style.marginRight = '2.5rem';
        logoCross.classList.add('btn-menu-close');
        btnNav.style.padding = '1.2rem';
        btnNav.textContent = '';
        btnNav.appendChild(logoCross);

        gsap.to(aside, {
            y: 0,
            rotation: 2,
            duration: .6, 
            ease: 'circ',
        })
        gsap.to(aside, {
            x: 0,
            duration: .6,
            delay: .2,
        })

    } else {

        document.body.style.overflowY = 'auto';
        logoCross.style.transform = 'rotate(720deg)';
        logoCross.style.scale = '0';
        
        gsap.to(aside, {
            x: -50,
            duration: .3,
            ease: 'sine',
            onComplete: () => {
                gsap.to(aside, {
                    x: 400,
                    duration: .4,
                    ease: 'sine',
                    onComplete: () => {
                        gsap.to(aside, {
                            y: -500,
                            rotation: 0,
                        })
                    },
                })
            }
        })
        
        bgMenu.classList.remove('bg-menu-active');
        setTimeout(() => {
            logoCross.classList.remove('btn-menu-close');
            btnNav.removeChild(logoCross);
            if (window.innerWidth < 673) {
                responsiveMobile();
                btnNav.style.padding = '0';
            } else  {
                btnNav.style.marginRight = '5rem';
                btnNav.style.padding = '1.2rem 3.5rem';
                btnNav.textContent = 'me contacter';
            }
        }, 450);
    }
}


btnNav.addEventListener('click', openCloseMenu);
bgMenu.addEventListener('click', openCloseMenu);

// Responsive mobile
function responsiveMobile() {
if (window.innerWidth < 673) {
    const logoBurger = document.createElement('img');
    logoBurger.src = 'img/burger-icon.svg';
    logoBurger.alt = '';
    logoBurger.classList.add('logo-nav-mail');
    btnNav.textContent = '';
    btnNav.appendChild(logoBurger);
} else {
    btnNav.textContent = 'me contacter';
}
}

responsiveMobile();

// Responsive header

window.addEventListener('resize', () => {
    if (navBar.offsetHeight != window.innerHeight) {
        document.body.style.overflowY = 'auto';
        myH2.textContent = '.portfolio';
    }
    else {
        document.body.style.overflow = 'hidden';
        myH2.textContent = 'adrien.thevon'
    }
    responsiveMode();
    responsiveMobile();
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
        btnNav.style['opacity'] = '1';
    }, 5000);

})



// ANIMATION DU LOGO DES CARDS EXP ON CLICK

document.querySelectorAll('.card-exp').forEach((el) => {
    el.addEventListener('click', logoAnim)
})

function logoAnim(e) {
    if (window.innerWidth >= 1025) {
    const figure = e.currentTarget.querySelector('figure');
    figure.classList.add('figure-onclick');
    setTimeout( () => {
        figure.classList.remove('figure-onclick');
    }, 400);
}

}


const loadBar = document.querySelector('.load-bar');

const allGradient = [
    /*HTML*/ 'linear-gradient(50deg, rgb(255, 226, 78) 0%, rgb(255, 144, 79) 50%, rgb(150, 0, 0) 100%)', 
    /*CSS*/ 'linear-gradient(50deg, rgb(0, 255, 194) 0%, rgb(0, 181, 255) 50%, rgb(0, 53, 223) 100%)', 
    /*JS*/ 'linear-gradient(50deg, rgb(255, 237, 130) 0%, rgb(255, 201, 0) 100%)', 
    /*REACT*/ 'linear-gradient(50deg, rgb(0, 181, 255) 0%, rgb(154, 224, 255) 3%, rgb(122, 136, 255) 50%, rgb(70, 0, 113) 100%)', 
    /*SQL*/ 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)', 
    /*NODEJS*/ 'linear-gradient(50deg, rgb(255, 141, 109) 0%, rgb(139, 185, 136) 48%, rgb(37, 61, 75) 100%)', 
    /*MONGODB*/ 'linear-gradient(50deg, rgb(194, 191, 191) 0%, rgb(108, 172, 72) 48%, rgb(89, 150, 54) 100%)', 
    /*à suivre*/ '#232323'];

const allAffinity = [
    /*HTML*/ '80%', 
    /*CSS*/ '90%', 
    /*JS*/ '80%', 
    /*REACT*/ '70%', 
    /*SQL*/ '40%', 
    /*NODEJS*/ '60%', 
    /*MONGODB*/ '50%', 
    /*à suivre*/ '120%'];


function updateColors(activeIndex) {
        // pour la progressbar
        const colorGradient = allGradient[activeIndex];
        const affinity = allAffinity[activeIndex];

        const tweenConfig = {
            height: `${affinity}`,
            ease: Elastic.easeOut.config(.6, .3),
            duration: 1.6,
        };
        
        TweenMax.to(loadBar, tweenConfig);

        setTimeout(() => {
            loadBar.style.background = colorGradient;
        }, 100);
    };


updateColors(swiper.realIndex);

swiper.on('slideChange', () => {
    updateColors(swiper.realIndex);
});




// SVG BG EXP

const bgBlob = document.querySelector('.bg-blob');
const blobs = ['blob1', 'blob2', 'blob3', 'blob4', 'blob5', 'blob6', 'blob7'];
const blobsIn = ['blob1-in', 'blob2-in', 'blob3-in', 'blob4-in', 'blob5-in', 'blob6-in', 'blob7-in'];
const blobsOut = ['blob1-out', 'blob2-out', 'blob3-out', 'blob4-out', 'blob5-out', 'blob6-out', 'blob7-out']

function changeBlob(index) {
    setTimeout(() => {
        bgBlob.classList.remove(...blobsOut);
        bgBlob.classList.remove(...blobs);
        bgBlob.classList.add(blobs[index]);
        bgBlob.classList.add(blobsIn[index]);
    }, 400);
}

changeBlob(swiper.activeIndex);

swiper.on('slidePrevTransitionStart', () => {
    bgBlob.classList.remove(...blobsIn);
    bgBlob.classList.add(blobsOut[swiper.realIndex+1]);
        changeBlob(swiper.realIndex);
});

swiper.on('slideNextTransitionStart', () => {
    bgBlob.classList.remove(...blobsIn);
    bgBlob.classList.add(blobsOut[swiper.realIndex-1]);
        changeBlob(swiper.realIndex);
});


loadBar.addEventListener('click', () => {
    const typeEffect = document.querySelector('.type-effect');
    typeEffect.classList.remove('type-effect-1');
})

