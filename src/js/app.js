import $ from 'jquery';
import header from '../blocks/header/header';
import navigation from '../blocks/nav-menu/nav-menu';
import menu from '../blocks/menu/menu';

$('document').ready(function() {
    header();
    menu();
    navigation();
});
