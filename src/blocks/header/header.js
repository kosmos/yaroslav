import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import debugIndicators from 'debugIndicators';
import TweenMax from 'TweenMax';

const help = () => {
    $('.preview__text_type_link').bind( 'click', function (e) {
        e.preventDefault();
        $('.help-info').css('top', '0%');
    });

    $('.help-info .close').bind( 'click', function (e) {
        e.preventDefault();
        $('.help-info').css('top', '-100%');
    });

    //animation
    let _headerHeight = $('header').height();
    const tween = TweenMax.fromTo('.over', .1, {height: 0}, {height: _headerHeight, ease: Power0.ease})
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: ".header",
        duration: window.innerHeight + _headerHeight - 150,
        triggerHook: .35,
        offset: -250
        // loglevel: 3
    })
        .addIndicators({name: 'Header_OverIndicator', colorStart: '  green'})
        .setTween(tween)
        .addTo(controller);
}

module.exports = help;
