const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0

})

.addIndicators()
    .setPin(intro)
    .addTo(controller);

//VIDEO ANIMATION
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;

});


setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;
    console.log(scrollPos, delay);

    video.currentTime = scrollPos;
}, 33.33333333);