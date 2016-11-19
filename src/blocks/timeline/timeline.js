/**
 * Created by sergeytsybulnik on 11/18/16.
 */
import $ from 'jquery';
import ScrollMagic from 'ScrollMagic';
import debugIndicators from 'debugIndicators';
import TweenMax from 'TweenMax';

const timeline = () => {

    const controller = new ScrollMagic.Controller({
        // container: $('.timeline-history')[0]
    });

    const _timeline = {
        el: $(".timeline"),
        trigger: $(".timeline-history__map")[0],
        // animated: !1,
        // state2: !1,
        scene: null
    };
    const _info = $('.timeline-history__information');
    const _year = $('.timeline__year');
    const _yearInfo = $('.timeline__year[data-info]');

    var scene = new ScrollMagic.Scene({
        duration: $(".timeline-history__map").height()-100, //450,
        offset: $(".timeline-history__map").height()/2,
        triggerElement: _timeline.trigger,
        triggerHook: 0.4,
        reverse: true
    })
        // .addIndicators({name: 'TIMELINE', colorStart: '  blue'})
        .setTween(TweenMax.to(_info, .8, {opacity: 1, delay: .3}))
        .on("start", function (t) {
            _timeline.el.toggleClass("is-animate");

        })
        .on("enter", function(t){
            setTimeout(function(){
                _yearInfo.addClass('timeline__year_type_full');
            }, 900);
        })
        .on("leave", function(t){
            setTimeout(function(){
                _yearInfo.removeClass('timeline__year_type_full');
            }, 100);
        })
        // .on("end", function (t) {
            // _timeline.el.toggleClass("state-2")
        // })
        .addTo(controller)

    _year.on('click', function(){
        let _this = $(this);
        $('.timeline-history__information .paragraph__text').hide().html(_this.data().info).fadeIn("fast");
    });
}

module.exports = timeline;
