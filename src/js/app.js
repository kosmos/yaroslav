import $ from 'jquery';
import backtop from '../blocks/backtop/backtop';
import preview from '../blocks/preview/preview';
import header from '../blocks/header/header';
import navigation from '../blocks/nav-menu/nav-menu';
import menu from '../blocks/menu/menu';
import money from '../blocks/money/money';
import games from '../blocks/games-of-thrones/games-of-thrones';

$('document').ready(function() {
    // $(window).on('beforeunload', function() {
    //     $(window).scrollTop(0);
    // });
    backtop();
    preview();
    header();
    navigation();
    menu();


    //Add parallax to money module
    money();
    games();

});
