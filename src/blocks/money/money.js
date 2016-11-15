import $ from 'jquery';
require('animation.gsap');
import ScrollMagic from 'scrollmagic';

const money = () => {

let controller = new ScrollMagic.Controller();

let slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: ".money",
    triggerHook: 0.7,
    duration: '200%'
})
    .setTween(TweenMax.from('.money__main', 1, {y: '-15%', opacity: 0, ease:Power0.easeNone}))
    .addTo(controller);
}

module.exports =  money;
