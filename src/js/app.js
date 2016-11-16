import $ from 'jquery';
import preview from '../blocks/preview/preview';
import header from '../blocks/header/header';
import navigation from '../blocks/nav-menu/nav-menu';
import menu from '../blocks/menu/menu';
import money from '../blocks/money/money';

$('document').ready(function() {
    preview();
    header();
    menu();

    //Add parallax to money module
    money();

    navigation();
});
