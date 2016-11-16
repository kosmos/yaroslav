import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import debugIndicators from 'debugIndicators';
import TweenMax from 'TweenMax';
import CSSPlugin from 'CSSPlugin';
import CSSRulePlugin from 'CSSRulePlugin';
import animationGsap from 'animation.gsap';

// import { TweenLite, TweenMax, TimelineMax } from "gsap";
// import { CSSPlugin, CSSRulePlugin} from "gsap/plugins";
// import { Draggable, SplitText } from "gsap/utils";
// import { Back, Power4 } from "gsap/easing";



const preview = () => {
    /**
     * $.disablescroll
     * Author: Josh Harrison - aloof.co
     *
     * Disables scroll events from mousewheels, touchmoves and keypresses.
     * Use while jQuery is animating the scroll position for a guaranteed super-smooth ride!
     */

    ;
    (function ($) {

        "use strict";

        var instance, proto;

        function UserScrollDisabler($container, options) {
            // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
            // left: 37, up: 38, right: 39, down: 40
            this.opts = $.extend({
                handleWheel: true,
                handleScrollbar: true,
                handleKeys: true,
                scrollEventKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
            }, options);

            this.$container = $container;
            this.$document = $(document);
            this.lockToScrollPos = [0, 0];

            this.disable();
        }

        proto = UserScrollDisabler.prototype;

        proto.disable = function () {
            var t = this;

            if (t.opts.handleWheel) {
                t.$container.on(
                    "mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll",
                    t._handleWheel
                );
            }

            if (t.opts.handleScrollbar) {
                t.lockToScrollPos = [
                    t.$container.scrollLeft(),
                    t.$container.scrollTop()
                ];
                t.$container.on("scroll.disablescroll", function () {
                    t._handleScrollbar.call(t);
                });
            }

            if (t.opts.handleKeys) {
                t.$document.on("keydown.disablescroll", function (event) {
                    t._handleKeydown.call(t, event);
                });
            }
        };

        proto.undo = function () {
            var t = this;
            t.$container.off(".disablescroll");
            if (t.opts.handleKeys) {
                t.$document.off(".disablescroll");
            }
        };

        proto._handleWheel = function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $('header').offset().top
            }, 1000);
        };

        proto._handleScrollbar = function () {
            this.$container.scrollLeft(this.lockToScrollPos[0]);
            this.$container.scrollTop(this.lockToScrollPos[1]);
        };

        proto._handleKeydown = function (event) {
            for (var i = 0; i < this.opts.scrollEventKeys.length; i++) {
                if (event.keyCode === this.opts.scrollEventKeys[i]) {
                    event.preventDefault();
                    return;
                }
            }
        };


        // Plugin wrapper for object
        $.fn.disablescroll = function (method) {

            // If calling for the first time, instantiate the object and save
            // reference. The plugin can therefore only be instantiated once per
            // page. You can pass options object in through the method parameter.
            if (!instance && (typeof method === "object" || !method)) {
                instance = new UserScrollDisabler(this, method);
            }

            // Instance created, no method specified. Call disable again
            if (instance && typeof method === "undefined") {
                instance.disable();
            }

            // Instance already created, and a method is being explicitly called,
            // e.g. .disablescroll('undo');
            else if (instance && instance[method]) {
                instance[method].call(instance);
            }

        };

        // Global access
        window.UserScrollDisabler = UserScrollDisabler;

    })($);

    // var _el = $('.preview');
    // var _window = $(window);
    //
    // _el.disablescroll({
    //     handleScrollbar: false
    // });
    //
    // _window.scroll(function() {
    //     console.log($(window).scrollTop());
    //     console.log($('header').offset().top);
    //     if($(window).scrollTop()+1 > $('header').offset().top){
    //         _el.disablescroll("undo");
    //     }else{
    //         _el.disablescroll({
    //             handleScrollbar: false
    //         });
    //     };
    // });
    // $("html, body").animate({ scrollTop: 500 }, "slow", function() {

    // Enable user scrolling again when animated scrolling completes


    // });

    // $('.preview').on('scroll touchmove mousewheel keydown', function(e){
    //     e.preventDefault();
    //     e.stopPropagation();
    //
    //     $('html, body').animate({
    //         scrollTop: $('header').offset().top
    //     }, 1000);
    //
    //     $('.preview').off('scroll touchmove mousewheel keydown');
    //     return false;
    // });

    //animation
    var parent = '.preview__text';
    var modifier = '_type_';
    var _year = $(parent + modifier + 'year');
    var _gold = $(parent + modifier + 'gold');
    var _tsn = $(parent + modifier + 'tsn');
    var _link = $(parent + modifier + 'link');
    var _stamp = $(parent + modifier + 'stamp');
    var _start= $(parent + modifier + 'start');
    var _arrow= $(parent + modifier + 'arrow');
    var ruleForLineAfter = CSSRulePlugin.getRule(parent + modifier + "year:after");
    var ruleForLinkAfter = CSSRulePlugin.getRule(parent + modifier + "link:after");
    var ruleForLinkBefore = CSSRulePlugin.getRule(parent + modifier + "link:before");

    var tweenPreview = new TimelineMax();

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
        .fromTo(_gold, 1, {x: "-=100%"}, {x: "+=100%", ease: Elastic.ease}, 'in')
        .fromTo(_tsn, 1, {x: "+=100%"}, {x: "-=100%", ease: Elastic.ease}, 'in')
        .fromTo(_year, .5, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, delay: .7, ease: Back.easeOut}, 'in')
        .fromTo(ruleForLineAfter, .8, {cssRule:{paddingRight: 1}}, {cssRule:{paddingRight: 140}, delay: 0.5, ease: Back.easeIn}, 'in')
        .to(_link, .5, {top:"-=30px", alpha:1, scale:1, delay: 1.5, ease:Back.easeOut}, 'in')
        .fromTo(ruleForLinkAfter, .5, {cssRule:{x: "-=100%", opacity: 0}}, {cssRule:{x: "+=100%", opacity: 1}, delay: 2, ease: Back.easeOut}, 'in')
        .fromTo(ruleForLinkBefore, .5, {cssRule:{x: "+=20%", opacity: 0}}, {cssRule:{x: "-=120%", opacity: 1}, delay: 2, ease: Back.easeOut}, 'in')
        .staggerFrom(_start, .5, {top:"-=30px", alpha:0, scale:3.8, ease:Back.easeOut}, 'in')
        .to(_stamp, .7, {opacity: 1, rotation: "0deg", delay: 2.2}, "in")
        .from(_arrow, .5, {height:"0px", alpha:0}, "-=0.02")
        // .add(getStaggerAnimation(), "stagger");

    tweenPreview.play();

    // TweenMax.fromTo(_tsn, 1, {x: "+=100%"}, {x: "-=100%", ease: Elastic.ease});

    var tween = TweenMax.fromTo(ruleForLineAfter, 1, {cssRule:{paddingRight: 141}}, {cssRule:{paddingRight: 70}, ease: Elastic.ease});
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: ".preview",
        duration: 350,
        triggerHook: 0,
        offset: 10
        // loglevel: 3
    })
        .addIndicators({name: 'PreviewIndicator', colorStart: '  yellow'})
        .setTween(tween)
        .addTo(controller);


    //click to start
    let headerPosition = $('header').offset().top;

    $('.preview__text_type_arrow').bind('click', function(){
        $("html,body").animate({scrollTop: headerPosition}, 1000);
    });
}

module.exports = preview;
