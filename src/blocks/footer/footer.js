import $ from 'jquery';
import animationGsap from 'animation.gsap';
import ScrollMagic from 'scrollmagic';



const footer = () => {


        let controller = new ScrollMagic.Controller();

        // Сцена смещение желтого бекграунда
    	let sceneH2 = new ScrollMagic.Scene({
    		triggerElement: '.footer__qoute',
    		triggerHook: 0.7
    	});

        let tween = new TimelineMax()
            .fromTo('.footer__qoute', 2, {opacity: '0'}, {opacity: '1', ease:Power1.easeOut})
            .fromTo('.footer__author', 1, {opacity: '0'}, {opacity: '1', ease:Power1.easeOut});

        sceneH2
            .setTween(tween)
            .addTo(controller);
        // ----------------------------


}

module.exports = footer;
