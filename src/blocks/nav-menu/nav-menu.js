/**
 * Created by sergeytsybulnik on 11/13/16.
 */
import $ from 'jquery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import animationGsap from 'animation.gsap';

const navigation = () => {

    const _header = $('.header');
    const _hamburger = $('.hamburger');
    const _navigation = $('.navigation');
    const _navigationMenu = $('.nav-menu');
    const _socList = $('.social-list');
    const _socListShare = $('.social-list__share');
    const _buttonShare = $('.nav-menu__button_type_share');
    const _menuItem = $('.navigation-list__item');

    const navHideTl = new TimelineMax({
        paused: true
    });
    const navShowTl = new TimelineMax({
        paused: true
    });

    navHideTl
        .set(_header, {className: '-=header_position_fixed'})
        .set(_navigationMenu, {className: '-=nav-menu_position_fixed'})
        .set(_navigation, {className: '-=navigation_position_fixed'})
        .set(_navigation, {className: '-=is-active'});

    navShowTl
        .set(_header, {className: '+=header_position_fixed'})
        .set(_navigationMenu, {className: '+=nav-menu_position_fixed'})
        .set(_navigation, {className: '+=navigation_position_fixed'})
        .set(_navigation, {className: '+=is-active'});

    const tweenMenu = new TimelineMax({
        delay: 0.2
    });
    tweenMenu.staggerFrom(_menuItem, 2, {scale: 0.5, left: "100%", opacity: 0, delay: .75, ease: Elastic.easeOut, force3D: true}, 0.2);

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
