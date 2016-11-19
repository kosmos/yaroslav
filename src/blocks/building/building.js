/**
 * Created by sergeytsybulnik on 11/19/16.
 */
import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import debugIndicators from 'debugIndicators';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';

const building = () => {
    const _class = "building-part";
    const _part = $("." + _class);
    const _partImage = $("." + _class + "__thumbnail");
    const _partTitle = $("." + _class + "__title");
    const _buildingInfo = $('.building__info');

    TweenMax.set(".building-info", {perspective: 800});
    TweenMax.set(_part, {transformStyle: "preserve-3d"});
    TweenMax.set(_partImage, {rotationY: -180});
    // TweenMax.set(_part, {opacity: 0});
    // TweenMax.set([_partImage, _partTitle], {opacity: 0});

    _part.hover(
        function () {
            TweenMax.to($(this).find(".building-part__thumbnail"), 1.2, {rotationY: 180, ease: Back.easeOut});
        },
        function () {
            TweenMax.to($(this).find(".building-part__thumbnail"), 1.2, {rotationY: 0, ease: Back.easeOut});
        }
    );
    // TweenMax.staggerTo(_part, 1, {rotationY:-180, opacity: 1, repeat:1, repeatDelay: .3, yoyo:true}, 0.2)
    const controller = new ScrollMagic.Controller({
        // container: $('.timeline-history')[0]
    });


    var tl = new TimelineMax({
        paused: true,
        delay: .3
    });

    TweenMax.set('#lineLeft', {alpha: 0, marginTop:0, marginLeft:'25%'});
    TweenMax.set('#lineRight', {alpha: 0, marginTop:0, marginLeft:'75%'});
    tl.fromTo(["#lineLeft", "#lineRight"], .1, {opacity: 0}, {opacity: 1, ease: Back.easeOut})
    tl.addLabel("start")
    tl.from("#lineLeft", 1, {scaleX:0, transformOrigin:"right"})
    tl.from("#lineRight", 1, {width:0}, "start");

    var scene = new ScrollMagic.Scene({
        duration: $('.building__map').height(),
        offset: 50,
        triggerElement: $('.building__caption')[0],
        triggerHook: 0.3,
        reverse: true
    })
        // .addIndicators({name: 'BUILDING', colorStart: '  blue'})
        .on("enter", function(t){
            tl.restart(true);
            TweenMax.staggerTo(_part, 1, {rotationY:-180, opacity: 1, delay: .5, repeat:1, repeatDelay: .3, yoyo:true}, 0.2)
        })
        .addTo(controller);

};

module.exports = building;
