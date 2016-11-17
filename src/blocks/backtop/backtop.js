import $ from 'jquery';

const backtop = () => {

    //#ToDo: add ScrollMagic

    const _backTop = $('.backtop');
    $(window).scroll(function() {

        let _previewHeight = $('.preview').height();

        if ($(this).scrollTop() > _previewHeight) {
            _backTop.addClass('show');
        } else {
            _backTop.removeClass('show');
        }
    });

    _backTop.on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });
}

module.exports = backtop;
