/**
 * Created by sergeytsybulnik on 11/13/16.
 */
import $ from 'jquery';

const navigation = () => {

    const _hamburger = $('.hamburger');
    const _navigation = $('.navigation');
    const _socList = $('.social-list');
    const _socListShare = $('.social-list__share');
    const _buttonShare = $('.nav-menu__button_type_share');

    const socList = function(){
        if (_socList.is(":visible")) {
            if(!_navigation.hasClass('is-active')){
                setTimeout(function () {
                    _socList.fadeOut("slow");
                }, 100);
            }else{
                setTimeout(function () {
                    _socList.addClass('social-list_state_color');
                }, 100);
            }
            setTimeout(function () {
                _socList.fadeOut("slow");
                _socList.removeClass('social-list_state_color');
                _socList.removeClass('social-list_state_active');
            }, 100);
        } else {
            setTimeout(function () {
                _socList.fadeIn("slow");
                _socList.addClass('social-list_state_color');
                _socList.addClass('social-list_state_active');
            }, 100);
        }
    }

    _hamburger.bind( 'click', function (e) {
        e.preventDefault();
        $(this).find('.hamburger__line').toggleClass('hamburger__line_type_active');

        _navigation.toggleClass('is-active');
        _socListShare.toggleClass('is-color');
    });

    _buttonShare.bind('click', function(e){
        e.preventDefault();

        socList();
    });
}

module.exports = navigation;
