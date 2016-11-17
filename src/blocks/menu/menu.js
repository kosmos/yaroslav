import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import debugIndicators from 'debugIndicators';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollToPlugin from "ScrollToPlugin";
import animationGsap from 'animation.gsap';

const menu = () => {

    //animation
    const _navigation = $('.navigation');
    const _navigationMenu = $('.nav-menu');
    const _menuItem = $('.navigation-list__item');
    const _menuItemValue = $('.navigation-list__value');
    const _hamburger = $('.hamburger');

    const tweenMenu = new TimelineMax({
        delay: 0
    });

    tweenMenu
        .staggerFrom(_menuItem, 2, {scale:0.5, left: "100%", opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);

    _hamburger.on('click', function(){
        tweenMenu.restart(true);
    });

    _menuItemValue.on('mouseover', function(){
        let _this = $(this);
        let attributes = _this.parent().data()
        console.info(attributes);
        TweenMax.to(window, 1, {scrollTo: {y: "#" + attributes.href, offsetY: 0}});
    });


    // section1Btn.onclick = function() {
    //     TweenLite.to(window, 1, {scrollTo:{y:"#section1", offsetY:70}});

    // $(".box2link").bind('click', { id: '#box2' }, scroller);
    // $(".box7link").bind('click', { id: '#box7' }, scroller);
    //
    // function scroller(event){
    //     var scrollYPos = $(event.data.id).offset().top;
    //     event.preventDefault();
    //     TweenLite.to(window, 2, {scrollTo:{y:scrollYPos, x:0}, ease:Power4.easeOut})
    // }
    //
    // var $this = $(this),
    //     href = $this.attr("href"),
    //     topY = $(href).offset().top;
    //
    // TweenMax.to($(window), 1, {
    //     scrollTo:{
    //         y: topY,
    //         autoKill: true
    //     },
    //     ease:Power3.easeOut
    // });
    //
    // return false;

    // var controller = new ScrollMagic.Controller();
    // var sceneNavigation = new ScrollMagic.Scene({
    //     triggerElement: ".nav-menu",
    //     // duration: window.innerHeight + _headerHeight/2,
    //     triggerHook: 0.45,
    //     offset: _navigationMenu.height()/2,
    //     reverse: true
    //     // loglevel: 3
    // });
    // sceneNavigation
    //     .addIndicators({name: 'Navigation_Menu_Indicator', colorStart: '  yellow'})
    //     .setTween(tweenMenu)
    //     .addTo(controller);

    //
    // $(".btn").click(function(){
    //     TweenMax.staggerTo(".btn", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
    // });

}

module.exports =  menu;
