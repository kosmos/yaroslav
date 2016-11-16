import $ from 'jquery';
require('animation.gsap');
import ScrollMagic from 'scrollmagic';

const sarkofag_view = () => {

    let controller = new ScrollMagic.Controller();

    let slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".sarkofag-view",
        triggerHook: 0.7,
        duration: '70%'
    })
        .setTween(TweenMax.from('.sarkofag-view__line1', 1, {width: 0, height:0, ease:Power0.easeNone}))
        .addTo(controller);
}

module.exports =  sarkofag_view;
