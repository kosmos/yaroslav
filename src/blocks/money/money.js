import $ from 'jquery';
require('animation.gsap');
import ScrollMagic from 'scrollmagic';

const money = () => {

let controller = new ScrollMagic.Controller();

let slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: ".money",
    triggerHook: 1,
    duration: '150%'
})
    .setTween(TweenMax.from('.money__bcg', 1, {y: '-60%', opacity: 0, ease:Power0.easeNone}))
    .addTo(controller);
}

module.exports =  money;
