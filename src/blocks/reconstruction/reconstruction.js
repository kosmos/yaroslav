import $ from 'jquery';
import animationGsap from 'animation.gsap';
import ScrollMagic from 'scrollmagic';



const reconstruction = () => {

        let controller = new ScrollMagic.Controller();

        // Сцена смещение желтого бекграунда
    	let scene = new ScrollMagic.Scene({
    		triggerElement: '.reconstruction',
    		triggerHook: 0.7
    	});
        let windowWidth = $(window).width() / 1.8;
        let tween = new TimelineMax()
            .fromTo('.reconstruction', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})
            .fromTo('.reconstruction', 1, {borderRadius: '100%'}, {borderRadius: '0%', ease:Power1.easeOut})
            .fromTo('.reconstruction__bg', 1, {opacity:0}, {opacity:1, ease:Power1.easeOut})
            .fromTo('.reconstruction__line', 1, {scale:0}, {scale:1, ease:Power1.easeOut})
            .fromTo('.reconstruction__profile', 1, {x: windowWidth}, {x: '0px', ease:Power1.easeOut})
            .fromTo('.reconstruction__fass', 1, {x: -windowWidth}, {x: '0px', ease:Power1.easeOut});


        scene
            .setTween(tween)
            .addTo(controller);
        // ----------------------------

}

module.exports = reconstruction;
