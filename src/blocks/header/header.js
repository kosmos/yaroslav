import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import debugIndicators from 'debugIndicators';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import animationGsap from 'animation.gsap';

const help = () => {
    $('.preview__text_type_link').bind('click', function (e) {
        e.preventDefault();
        $('.help-info').css('top', '0%');
    });

    $('.help-info .close').bind('click', function (e) {
        e.preventDefault();
        $('.help-info').css('top', '-100%');
    });

    //animation
    const _header = $('header');
    const _caption = $('.caption');
    const _captionBig = $('.caption__big span')
    const _captionMiddle = $('.caption__middle span')
    const _over = $('.over');
    let _headerHeight = _header.height();

    const tweenOver = new TimelineMax({
        // delay: .5, // Number of seconds before animation start
        // paused: true, // Default value is false
        // repeat: 0, // Number of repeats or -1 for infinite loop
        // repeatDelay: 1, // Number of seconds between repeats
        // yoyo: true, // If true > A-B-B-A, if false > A-B-A-B smoothChildTiming: true/false, // Controls child tweens and timelines useFrames: true/false, // Set timing based on frames (default seconds)
    });
    tweenOver
        .add('in')
        .fromTo(_over, 1, {height: 0, opacity: 0}, {height: _headerHeight, opacity: .7, ease: Bounce.easeOut}, 'in')
        .staggerFrom(_captionBig, .15, {alpha: 0, scale: 1.8, ease: Back.easeOut}, 0.1)
        .staggerFrom(_captionMiddle, .25, {alpha: 0, scale: 1.8, ease: Back.easeOut}, 0.1);
    //     // .from(_over, 1, {height:"0px", alpha:0}, "-=0.5");

    var controller = new ScrollMagic.Controller();
    var sceneOver = new ScrollMagic.Scene({
        triggerElement: ".header",
        // duration: window.innerHeight + _headerHeight/2,
        triggerHook: 0.45,
        offset: -100,
        reverse: true
        // loglevel: 3
    });

    sceneOver
        // .addIndicators({name: 'Header_Over_Indicator', colorStart: '  green'})
        .setTween(tweenOver)
        .addTo(controller);

    // var sceneCaption = new ScrollMagic.Scene({
    //     triggerElement: ".header",
    //     duration: window.innerHeight + _headerHeight,
    //     triggerHook: .2,
    //     offset: 0
    // })
    //     .addIndicators({name: 'Header_Caption_Indicator', colorStart: '  red'})
    //     .addTo(controller);
}

module.exports = help;
