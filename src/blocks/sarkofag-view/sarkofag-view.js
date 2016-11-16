import $ from 'jquery';
require('animation.gsap');
import ScrollMagic from 'scrollmagic';

const sarkofag_view = () => {

    let controller = new ScrollMagic.Controller();


    let t1 = new TimelineLite();

    t1
        .to('.sarkofag-view__line1', 1, {height: 50})
        .to('.sarkofag-view__line1', 2, {width: 200})
        .to('.sarkofag-view__text3', 3, {opacity: 100});

    let slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".sarkofag-view",
        triggerHook: 0.1
        /*duration: '50%'*/
    })
        .setTween(t1)
        /*.setTween(TweenMax.from('.sarkofag-view__line1', 3, {width: 0}))*/
        .addTo(controller);


}

module.exports =  sarkofag_view;
