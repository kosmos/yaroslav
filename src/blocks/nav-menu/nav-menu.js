/**
 * Created by sergeytsybulnik on 11/13/16.
 */
import $ from 'jquery';

const navigation = () => {
    $('.hamburger').bind( 'click', function (e) {
        e.preventDefault();
        $(this).find('.hamburger__line').toggleClass('hamburger__line_type_active');
    });

    $('.nav-menu__button_type_share').bind('click', function(e){
        e.preventDefault();
        $('.nav-menu__social-list').toggleClass('is-active');
    });
}

module.exports = navigation;
