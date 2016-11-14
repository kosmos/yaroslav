import $ from 'jquery';
require('animation.gsap');
import ScrollMagic from 'scrollmagic';

let controller = new ScrollMagic.Controller();

var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: ".money",
    triggerHook: 1,
    duration: '200%'
})
    .setTween(TweenMax.from('.money__main', 1, {y: '-30%', ease:Power0.easeNone}))
    .addTo(controller);

module.exports =  slideParallaxScene;
