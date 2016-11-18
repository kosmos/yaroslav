import $ from 'jquery';
require('animation.gsap');
import ScrollMagic from 'scrollmagic';

const sarkofag_view = () => {

    let controller = new ScrollMagic.Controller();


    let t1 = new TimelineLite();
    let t2 = new TimelineLite();
    let t3 = new TimelineLite();

    t1
        .to('.sarkofag-view__line1', 2, {width: 449})
        .to('.sarkofag-view__line1', 1, {height: 25})
        .to('.sarkofag-view__text3', 3, {opacity: 100});

    t2
        .to('.sarkofag-view__line2', 2, {width: 373})
        .to('.sarkofag-view__line2', 1, {height: 25})
        .to('.sarkofag-view__text4', 3, {opacity: 100});

    t3
        .to('.sarkofag-view__line3', 2, {width: 373})
        .to('.sarkofag-view__line3', 1, {height: 25})
        .to('.sarkofag-view__text5', 3, {opacity: 100});

    let slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".sarkofag-view",
        triggerHook: 0.1,
        reverse: false
    })
        .setTween(t1)
        .addTo(controller);


    let slideParallaxScene1 = new ScrollMagic.Scene({
        triggerElement: ".sarkofag-view",
        triggerHook: 0.1,
        reverse: false
    })
        .setTween(t2)
        .addTo(controller);


    let slideParallaxScene2 = new ScrollMagic.Scene({
        triggerElement: ".sarkofag-view",
        triggerHook: 0.1,
        reverse: false
    })
        .setTween(t3)
        .addTo(controller);

}

module.exports =  sarkofag_view;
