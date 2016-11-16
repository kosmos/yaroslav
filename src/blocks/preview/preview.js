import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import debugIndicators from 'debugIndicators';
import TweenMax from 'TweenMax';
import CSSPlugin from 'CSSPlugin';
import CSSRulePlugin from 'CSSRulePlugin';
import animationGsap from 'animation.gsap';



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
    var ruleForLineAfter = CSSRulePlugin.getRule(".preview__text_type_year:after");

    var tweenText = new TimelineMax();

    tweenText
    // .add('in')
        .fromTo('.preview__text_type_year', .5, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, ease: Power0.ease})
        .fromTo(ruleForLineAfter, 1, {cssRule:{paddingRight: 1}}, {cssRule:{paddingRight: 70}, ease: Elastic.ease})
        .fromTo('.preview__text_type_link', 1, {autoAlpha: 0}, {autoAlpha: 1}, '-=1')
        .to('.preview__text_type_start', 1, {scale: 1.2}, '-=1');

    tweenText.play();
    TweenMax.fromTo('.preview__text_type_gold', 1, {x: "-=100%"}, {x: "+=100%", ease: Elastic.ease},)
    TweenMax.fromTo('.preview__text_type_tsn', 1, {x: "+=100%"}, {x: "-=100%", ease: Elastic.ease})

    // TweenMax.fromTo(ruleForLineAfter, .3, {cssRule:{paddingRight: 1}}, {cssRule:{paddingRight: 70}, ease: Elastic.ease});

    var tween = TweenMax.fromTo(ruleForLineAfter, 1, {cssRule:{paddingRight: 71}}, {cssRule:{paddingRight: 130}, ease: Elastic.ease});
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: ".preview",
        duration: 350,
        triggerHook: 0,
        offset: 20
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
