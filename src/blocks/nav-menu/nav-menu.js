/**
 * Created by sergeytsybulnik on 11/13/16.
 */
import $ from 'jquery';

const navigation = () => {
    $('.hamburger').bind( 'click', function (e) {
        e.preventDefault();
        $(this).find('.hamburger__line').toggleClass('hamburger__line_type_active');

        $('.navigation').toggleClass('is-active');
        $('.social-list .social-list__share').toggleClass('is-color');
    });

    $('.nav-menu__button_type_share').bind('click', function(e){
        e.preventDefault();
        $('.social-list').toggleClass('is-active');
    });
}

module.exports = navigation;
