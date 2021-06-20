//Gold Animation
const flightPath = {
    curviness: 0,
    autoRotate: false,
    values: [
        {x: 0, y: -10},
        {x: 0, y: -30},
        {x: 0, y: -50},
        {x: 0, y: -70},
        {x: 0, y: -90},
        {x: 0, y: -110}
    ]
}

//Timeline
const tween = new TimelineMax();

tween.add(
    TweenMax.to(".gold-lipstick", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

//ScrollMagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".goldanimation",
    duration: 1000,
    triggerHook: 0
})
.setTween(tween)
//.addIndicators()
.setPin(".goldanimation")
.addTo(controller);

//Text Animation
const goldanimation = document.querySelector(".goldanimation");
const text = goldanimation.querySelector("h1");
const textAnim = TweenMax.fromTo(text, 1, {opacity: 0}, {opacity: 1});

let scene2 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: ".goldanimation",
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

//Intro
const flightPathIntro = {
    curviness: 0,
    autoRotate: false,
    values: [
        {x: 0, y: -10},
        {x: 0, y: -30},
        {x: 0, y: -50},
        {x: 0, y: -70},
        {x: 0, y: -90},
        {x: 0, y: -110}
    ]
}

//Timeline
const tweenIntro = new TimelineMax();

tweenIntro.add(
    TweenMax.to(".gold", 1, {
        bezier: flightPathIntro,
        ease: Power1.easeInOut
    })
);

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    duration: 1000,
    triggerHook: 0
})
.setTween(tweenIntro)
//.addIndicators()
.setPin(".intro")
.addTo(controller);

//Text Animation Intro
const introAnimation = document.querySelector(".intro");
const textIntro = introAnimation.querySelector("h1");
const textAnimIntro = TweenMax.fromTo(textIntro, 1, {opacity: 1}, {opacity: 0});

let scene3 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: ".intro",
    triggerHook: 0
})
.setTween(textAnimIntro)
.addTo(controller);

//Green Animation
const flightPathGreen = {
    curviness: 0,
    autoRotate: false,
    values: [
        {x: 0, y: -10},
        {x: 0, y: -30},
        {x: 0, y: -50},
        {x: 0, y: -70},
        {x: 0, y: -90},
        {x: 0, y: -110}
    ]
}

//Timeline
const tweenGreen = new TimelineMax();

tweenGreen.add(
    TweenMax.to(".green-lipstick", 1, {
        bezier: flightPathGreen,
        ease: Power1.easeInOut
    })
);

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".greenanimation",
    duration: 1000,
    triggerHook: 0
})
.setTween(tweenGreen)
//.addIndicators()
.setPin(".greenanimation")
.addTo(controller);

//Text Animation
const greenanimation = document.querySelector(".greenanimation");
const textGreen = greenanimation.querySelector("h1");
const textAnimGreen = TweenMax.fromTo(textGreen, 1, {opacity: 0}, {opacity: 1});

let scene6 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: ".greenanimation",
    triggerHook: 0
})
.setTween(textAnimGreen)
.addTo(controller);

//Red Animation
const flightPathRed = {
    curviness: 0,
    autoRotate: false,
    values: [
        {x: 0, y: -10}, {x: 0, y: -30}, {x: 0, y: -50}, {x: 0, y: -70}, {x: 0, y: -90}, {x: 0, y: -110}, {x: 0, y: -130}, 
        {x: 0, y: -150}, {x: 0, y: -170}, {x: 0, y: -190}, {x: 0, y: -200}, {x: 0, y: -220}, {x: 0, y: -240}
    ]
}
//Timeline
const tweenRed = new TimelineMax();

tweenRed.add(
    TweenMax.to(".red-lipstick", 1, {
        bezier: flightPathRed,
        ease: Power1.easeInOut
    })
);

const scene7 = new ScrollMagic.Scene({
    triggerElement: ".redanimation",
    duration: 1000,
    triggerHook: 0
})
.setTween(tweenRed)
//.addIndicators()
.setPin(".redanimation")
.addTo(controller);

//Text Animation
const redanimation = document.querySelector(".redanimation");
const textRed = redanimation.querySelector("h1");
const textAnimRed = TweenMax.fromTo(textRed, 1, {opacity: 0}, {opacity: 1});

let scene8 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: ".redanimation",
    triggerHook: 0
})
.setTween(textAnimRed)
.addTo(controller);

