

// function handleMouseMove(event) {
//     const card = document.querySelector('');
//     const height = window.innerHeight;
//     const width = window.innerWidth;

//     // Creates angles of (-20, -20) (left, bottom) and (20, 20) (right, top)
//     const yAxisDegree = event.pageX / width * 80 - 40;
//     const xAxisDegree = event.pageY / height * -1 * 20 + 20;

//     card.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
// }

// document.onmousemove = handleMouseMove;



// #region CARDS HERO

gsap.to(".card-out-1", {
    scrollTrigger: {
        trigger: '.card-out',
        start: "center center",
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
        trigger: '.card-out',
        start: "center center",
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
        trigger: '.card-out',
        start: "center center",
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
        trigger: '.card-out',
        start: "center center",
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
        trigger: '.card-out',
        start: "center center",
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
        trigger: '.exp',
        start: "top bottom",
        end: "center center",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
    },
    duration: 10,
    x: "-100rem",
    opacity: ".5"
});
gsap.from("#card-cefim", {
    scrollTrigger: {
        trigger: '.main-card-exp',
        start: "top bottom",
        end: "center center",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
    },
    duration: 10,
    scale: .8
});
gsap.from("#card-react", {
    scrollTrigger: {
        trigger: '.exp',
        start: "top bottom",
        end: "center center",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
    },
    duration: 10,
    x: "100rem",
    opacity: ".5"
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

