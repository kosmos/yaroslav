import $ from 'jquery';

const help = () => {
    $('.preview__text_type_link').bind( 'click', function (e) {
        e.preventDefault();
        $('.help-info').css('top', '0%');
    });

    $('.help-info__close').bind( 'click', function (e) {
        e.preventDefault();
        $('.help-info').css('top', '-100%');
    });
}

module.exports = help;
