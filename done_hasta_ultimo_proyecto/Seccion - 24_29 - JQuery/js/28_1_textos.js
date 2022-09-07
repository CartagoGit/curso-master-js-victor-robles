'use strict'
$('document').ready(function () {
    //mirar cuantos elementos de un tipo hay en la pagina
    // console.log($('a').length);

    var menu = $('#menu');
    reloadLinks();


    $('#add_button')
        .removeAttr('disabled')
        .click(function () {
            var add_link = $('#add_link');
            // console.log(add_link.val());
            //ELIMINA EL HTML Y METE EL NUEVO
            // menu.html('<li><a href="' + add_link.val() + '"></a></li>');
            //AÑADIR SIN ELIMINAR LO QUE HABIA
            menu.append('<li><a href="' + add_link.val() + '"></a></li>');
            //Tambien esta el metodo before() y el after() que lo hacen fuera del ul en este caso, antes o despues
            reloadLinks();
            //eliminar el contenido de add_link
            add_link.val('');
        });

    function reloadLinks() {
        $('a').each(function () {
            var that = $(this);
            var enlace = that.attr('href');
            //Con esto añadimos un atributo, por ejemplo que las paginas se abran en una nueva ventana
            that.attr('target', '_blank');
            //Con esto añadimo el texto en el enlace
            that.text(enlace);
        });
    }
});