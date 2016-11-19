import $ from 'jquery';
import animationGsap from 'animation.gsap';
import ScrollMagic from 'scrollmagic';



const h2 = () => {

    $.each($('.h2'), function(i, e) {
        let controller = new ScrollMagic.Controller();

        // Сцена смещение желтого бекграунда
    	let sceneH2 = new ScrollMagic.Scene({
    		triggerElement: e,
    		triggerHook: 0.8
    	});

        let tween = new TimelineMax()
            .fromTo(e, 2, {opacity: '0'}, {opacity: '1', ease:Power1.easeOut});

        sceneH2
            .setTween(tween)
            .addTo(controller);
        // ----------------------------

    });

}

module.exports = h2;
