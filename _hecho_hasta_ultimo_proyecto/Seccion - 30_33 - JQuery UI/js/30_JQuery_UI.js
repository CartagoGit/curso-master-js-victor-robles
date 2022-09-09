'use strict'
$(document).ready(function () {
    var elementos = $('.elemento');
    var seleccionable = $('.lista-seleccionable');
    var area = $('#area');
    var elemento_movido = $('#elemento-movido');
    var btn_efecto = $('#efecto');
    var caja_efectos = $('#caja-efectos');
    var popup = $('#popup');
    var lanzar_popup = $('#lanzar-popup');
    var calendario = $('#calendario');
    var tab= $('#tab');
    //JQUERY UI
    //Mover elemento por la pantalla
    elementos.draggable();

    //Redimensionar elemento
    elementos.resizable();

    //Selecctionar elementos
    // seleccionable.selectable();
    //NO PUEDEN ESTAR LOS DOS A LA VEZ
    //Ordenar
    // seleccionable.sortable();
    seleccionable.sortable({
        update: function (evento, ui) {
            console.log("ha cambiado la lista");
            console.log(seleccionable);
        }
    });

    //Droppeable
    elemento_movido.draggable();
    area.droppable({
        drop: function () {
            console.log("Has soltado algo dentro del area");
        }
    });

    //EFFECTOS
    btn_efecto.click(function () {
        // caja_efectos.effect('explode');
        //Efectos slide, scale, drop, shake, fade, fold.... 
        // Ver documentacion UI para ver todos los efectos.
        // caja_efectos.toggle('explode');
        caja_efectos.toggle('scale', 4000);
    });

    //PLUGINS Y WIDGETS

    //Tootltip
    $(document).tooltip();

    //Dialog , popups, cuadros de dialogo
    lanzar_popup.click(function(){
        popup.dialog();

    });

    //Calendario
    calendario.datepicker();

    //Tabs
    tab.tabs();
    
});