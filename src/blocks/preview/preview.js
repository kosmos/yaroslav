import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import debugIndicators from 'debugIndicators';
import TweenMax from 'TweenMax';
import CSSPlugin from 'CSSPlugin';
import CSSRulePlugin from 'CSSRulePlugin';
import animationGsap from 'animation.gsap';


const preview = () => {
    //animation
    const parent = '.preview__text';
    const modifier = '_type_';
    const _year = $(parent + modifier + 'year');
    const _gold = $(parent + modifier + 'gold');
    const _tsn = $(parent + modifier + 'tsn');
    const _link = $(parent + modifier + 'link');
    const _stamp = $(parent + modifier + 'stamp');
    const _start= $(parent + modifier + 'start');
    const _arrow= $(parent + modifier + 'arrow');
    const ruleForLineAfter = CSSRulePlugin.getRule(parent + modifier + "year:after");
    const ruleForLinkAfter = CSSRulePlugin.getRule(parent + modifier + "link:after");
    const ruleForLinkBefore = CSSRulePlugin.getRule(parent + modifier + "link:before");

    const tweenPreview = new TimelineMax({
        paused: true,
        delay: 0
    });

    // function getStaggerAnimation() {
    //     var staggerTimeline = new TimelineLite();
    //     staggerTimeline
    //         .from(_link, 0.2, {width: 0, opacity:0})
    //         .staggerFrom(_link, 0.6, {width: "", left:"-=50px", ease:Back.easeOut}, 0.1)
    //         .to(_link, 1, {opacity:1});
    //     return staggerTimeline;
    // }

    tweenPreview
        .add('in')
        .fromTo(_gold, 1, {x: "-=100%"}, {x: "+=100%", alpha: 1, ease: Elastic.ease}, 'in')
        .fromTo(_tsn, 1, {x: "+=100%"}, {x: "-=100%", alpha: 1, ease: Elastic.ease}, 'in')
        .fromTo(_year, .5, {scale: 0}, {scale: 1, alpha: 1, delay: .7, ease: Back.easeOut}, 'in')
        .fromTo(ruleForLineAfter, .8, {cssRule:{paddingRight: 1}}, {cssRule:{paddingRight: 140, alpha: 1}, delay: 0.5, ease: Back.easeIn}, 'in')
        .to(_link, .5, {top:"-=30px", alpha:1, scale:1, delay: 1.5, ease:Back.easeOut}, 'in')
        .fromTo(ruleForLinkAfter, .5, {cssRule:{x: "-=100%", opacity: 0}}, {cssRule:{x: "+=100%", opacity: 1}, delay: 2, ease: Back.easeOut}, 'in')
        .fromTo(ruleForLinkBefore, .5, {cssRule:{x: "+=20%", opacity: 0}}, {cssRule:{x: "-=120%", opacity: 1}, delay: 2, ease: Back.easeOut}, 'in')
        .staggerFrom(_start, .5, {top:"-=30px", alpha:0, scale:3.8, ease:Back.easeOut}, 'in')
        .to(_stamp, .7, {alpha: 1, rotation: "0deg", delay: 2.2}, "in")
        .from(_arrow, .5, {height:"0px", alpha:0}, "-=0.02")
        // .add(getStaggerAnimation(), "stagger");

    tweenPreview.play();

    const tween = TweenMax.fromTo(ruleForLineAfter, 1, {cssRule:{paddingRight: 141}}, {cssRule:{paddingRight: 70}, ease: Elastic.ease});
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
        triggerElement: ".preview",
        duration: 350,
        triggerHook: 0,
        offset: 10,
    })
        .addIndicators({name: 'PreviewIndicator', colorStart: '  yellow'})
        .setTween(tween)
        // .setTween(tweenPreview)
        .addTo(controller);

    //click to start
    let headerPosition = $('header').offset().top;

    $('.preview__text_type_arrow').bind('click', function(){
        $("html,body").animate({scrollTop: headerPosition}, 1000);
    });

    const getScrollDirection = (e) =>
        (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) ? 1 : -1;

    $('.preview').on('scroll touchmove mousewheel keydown', function(e){
        if(getScrollDirection(e) > 0) {
            e.preventDefault();
            // tweenPreview.pause();
            // e.stopPropagation();

            $('html, body').animate({
                scrollTop: $('header').offset().top
            }, 1000);

            $('.preview').off('scroll touchmove mousewheel keydown');
            return false;
        }else{
            // console.log(getScrollDirection(e));
            tweenPreview.restart(true);
            return true;
        }
    });
}

module.exports = preview;
