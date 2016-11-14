import $ from 'jquery';
import menu from '../blocks/menu/menu';
import money from '../blocks/money/money';

$('document').ready(function() {
    menu();

    //Add parallax to money module
    money();
});
