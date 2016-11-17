/**
 * Created by sergeytsybulnik on 11/13/16.
 */
import $ from 'jquery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import CSSPlugin from 'CSSPlugin';
import CSSRulePlugin from 'CSSRulePlugin';
import animationGsap from 'animation.gsap';

const navigation = () => {

    const navParent = '.navigation__block';

    const _header = $('.header');
    const _hamburger = $('.hamburger');
    const _navigation = $('.navigation');
    const _navigationBlock = $('.navigation__block');
    const _navigationMenuItem = $('.navigation-list__item');
    const _navMenu = $('.nav-menu');
    const _socList = $('.social-list');
    const _socListShare = $('.social-list__share');
    const _buttonShare = $('.nav-menu__button_type_share');
    const ruleForDiagonalAfter = CSSRulePlugin.getRule(".navigation__block_diagonal_white:after");

    let navHideTl = new TimelineMax({
        paused: true,
        delay: 0.2
    });
    let navShowTl = new TimelineMax({
        paused: true,
        delay: 0
    });

    navHideTl
        .add('out')
        .to(ruleForDiagonalAfter, .3, {cssRule:{borderWidth: '100vh 0vh 0vh 0vh'}, ease: Back.easeOut}, 'out')
        .to('.navigation__block:nth-child(2)', 1.1,  {right: '-101%', ease: Power0.easeIn}, .8)
        .to('.navigation__block:nth-child(1)', 1.1,  {left: '-101%', ease: Power0.easeIn}, .8)
        .set(_navigation, {className: '-=navigation_position_fixed'}, 'out')
        .set(_navMenu, {className: '-=nav-menu_position_fixed'}, 'out')
        .set(_header, {className: '-=header_position_fixed'}, 'out')
        .set(_navigation, {className: '-=is-active'} , 'in');

    navShowTl
        .add('in')
        .set(_header, {className: '+=header_position_fixed'}, 'in')
        .set(_navMenu, {className: '+=nav-menu_position_fixed'}, 'in')
        .set(_navigation, {className: '+=navigation_position_fixed'}, 'in')
        .to('.navigation__block:nth-child(1)', 1,  {left: 0, ease: Back.easeIn}, 'in')
        .to('.navigation__block:nth-child(2)', 1,  {right: 0, ease: Back.easeIn}, 'in')
        .set(_navigation, {className: '+=is-active'} , 'in')
        .to(ruleForDiagonalAfter, .5, {cssRule:{borderWidth: '100vh 30vh 0vh 0vh'}, delay: 1.2, ease: Back.easeOut}, 'in');

    const tweenMenu = new TimelineMax({
        delay: 0.2
    });
    tweenMenu.staggerFrom(_navigationMenuItem, 2, {scale: 0.5, left: "100%", opacity: 0, delay: .75, ease: Elastic.easeOut, force3D: true}, 0.2);

    const socList = function () {
        if (_socList.is(":visible")) {
            TweenMax.fromTo(_socList, .5, {left: "20", display: 'inline-block'}, {left: "-=140", display: 'none', ease: Back.easeIn}, 0.5);
            // if (_navigation.hasClass('is-active')) {
            //     TweenMax.set(_socList, {className: '-=social-list_state_color'}, 2);
            // }
        } else {
            if (_navigation.hasClass('is-active')) {
                TweenMax.set(_socList, {className: '+=social-list_state_color'}, 0);
            }
            TweenMax.fromTo(_socList, .5, {left: "-120", display: 'none'}, {left: "+=140", display: 'inline-block', ease: Back.easeIn}, 0.5)
        }
    }

    _hamburger.bind('click', function (e) {
        e.preventDefault();
        $(this).find('.hamburger__line').toggleClass('hamburger__line_type_active');

        _socListShare.toggleClass('is-color');

        if (_navigation.hasClass('is-active')) {
            navHideTl.restart(true);
            if (_socList.is(":visible")) {
                TweenMax.set(_socList, {className: '-=social-list_state_color'}, 0);
            }
        } else {
            navShowTl.restart(true);
            tweenMenu.restart(true);
            if (_socList.is(":visible")) {
                TweenMax.set(_socList, {className: '+=social-list_state_color'}, 0);
            }
        }
    });

    _buttonShare.bind('click', function (e) {
        e.preventDefault();
        socList();
    });
}

module.exports = navigation;
