import $ from 'jquery';
import backtop from '../blocks/backtop/backtop';
import preview from '../blocks/preview/preview';
import header from '../blocks/header/header';
import navigation from '../blocks/nav-menu/nav-menu';
import menu from '../blocks/menu/menu';
import money from '../blocks/money/money';
import sarkofag_view from '../blocks/sarkofag-view/sarkofag-view';
import games from '../blocks/games-of-thrones/games-of-thrones';
import timeline from '../blocks/timeline/timeline';
import building from '../blocks/building/building';
import h2 from '../blocks/h2/h2';
import reconstruction from '../blocks/reconstruction/reconstruction';
import footer from '../blocks/footer/footer';
import sectionMap from '../blocks/section-map/section-map';

$('document').ready(function() {
    // $(window).on('beforeunload', function() {
    //     $(window).scrollTop(0);
    // });
    backtop();
    preview();
    header();
    navigation();
    menu();
    h2();
    reconstruction();
    sectionMap();
    footer();


    //Add parallax to money module
    money();
    sarkofag_view();
    games();
    timeline();
    building();

});
