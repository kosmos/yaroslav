import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import debugIndicators from 'debugIndicators';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import CSSPlugin from 'CSSPlugin';
import CSSRulePlugin from 'CSSRulePlugin';
import ScrollToPlugin from "ScrollToPlugin";
import animationGsap from 'animation.gsap';

const menu = () => {

    //animation
    const _header = $('.header');
    const _navigation = $('.navigation');
    const _navMenu = $('.nav-menu');
    const _menuItem = $('.navigation-list__item');
    const _menuItemValue = $('.navigation-list__value');
    const _hamburger = $('.hamburger');
    const _socList = $('.social-list');
    const _socListShare = $('.social-list__share');
    const _str_temActive = 'navigation-list__item_type_active';
    const ruleForDiagonalAfter = CSSRulePlugin.getRule(".navigation__block_diagonal_white:after");

    // const tweenMenu = new TimelineMax({
    //     delay: 0.2
    // });
    // tweenMenu.staggerFrom(_menuItem, 2, {scale:0.5, left: "100%", opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
    //
    // _hamburger.on('click', function(){
    //
    //     // setTimeout(function(){
    //     //     if(_navigation.hasClass('is-active')){
    //     //         TweenMax.set(_navigationMenu, {className: '-=nav-menu_position_fixed'});
    //     //         TweenMax.set(_navigation, {className: '-=navigation_position_fixed'});
    //     //     } else{
    //     //         TweenMax.set(_navigationMenu, {className: '+=nav-menu_position_fixed'});
    //     //         TweenMax.set(_navigation, {className: '+=navigation_position_fixed'});
    //     //     }
    //     // }, 100);
    //
    //     tweenMenu.restart(true);
    // });

    let navHideTl = new TimelineMax({
        paused: true,
        delay: 0
    });

    navHideTl
        .add('out')
        .to(ruleForDiagonalAfter, .3, {cssRule:{borderWidth: '100vh 0vh 0vh 0vh'}, ease: Back.easeOut}, 'out')
        .to('.navigation__block:nth-child(2)', 1.1,  {right: '-101%', ease: Power0.easeIn}, .8)
        .to('.navigation__block:nth-child(1)', 1.1,  {left: '-101%', ease: Power0.easeIn}, .8)
        .set(_navigation, {className: '-=navigation_position_fixed'}, 1.2, 'out')
        .set(_navMenu, {className: '-=nav-menu_position_fixed'}, 1.2, 'out')
        .set(_header, {className: '-=header_position_fixed'}, 1.2, 'out')
        .set(_navigation, {className: '-=is-active'} , 1.2, 'in');

    _menuItemValue.on('mouseover', function(){
        let _this = $(this);
        let attributes = _this.parent().data()
        TweenMax.to(window, 1, {scrollTo: {y: "#" + attributes.href, offsetY: 0}});
    });

    _menuItemValue.on('click', function(){
        let _this = $(this);

        _this.parent().siblings().removeClass(_str_temActive);
        TweenMax.set(_this.parent(), {className: '+='+_str_temActive});

        navHideTl.restart(true);
        if (_socList.is(":visible")) {
            TweenMax.set(_socList, {className: '-=social-list_state_color'}, 0);
        }
        _socListShare.toggleClass('is-color');
        _hamburger.find('.hamburger__line').removeClass('hamburger__line_type_active');
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
