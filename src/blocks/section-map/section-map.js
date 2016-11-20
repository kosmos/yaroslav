import $ from 'jquery';
import animationGsap from 'animation.gsap';
import ScrollMagic from 'scrollmagic';



const sectionMap = () => {


        let controller = new ScrollMagic.Controller();

        // Сцена смещение желтого бекграунда
    	let sceneH2 = new ScrollMagic.Scene({
    		triggerElement: '.section-map__text',
    		triggerHook: 0.7
    	});

        let tween = new TimelineMax()
            .fromTo('.section-map__text', 2, {opacity: '0', x: '-1920px'}, {opacity: '1', x: '0px', ease:Power1.easeOut});

        sceneH2
            .setTween(tween)
            .addTo(controller);
        // ----------------------------


}

module.exports = sectionMap;
