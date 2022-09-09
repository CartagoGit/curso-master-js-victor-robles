$('document').ready(function () {
    //EVENTOS

    //MouseOver y MouseOut
    var caja01 = $('#caja');
    caja01.mouseover(function () {
        $(this).css("background", "red");
    });
    caja01.mouseout(function () {
        $(this).css('background', "green");
    })

    //Hover
    var caja02 = $('#caja02');

    caja02.hover(raton_entra, raton_sale);

    function raton_entra() {
        $(this).css("background", "blue");
    }
    function raton_sale() {
        $(this).css('background', "grey");
    }

    //Click y doble click
    var caja03 = $('#caja03');

    caja03.click(function () {
        $(this).css("background", "blue")
            .css("color", "white");
    });
    caja03.dblclick(function () {
        $(this).css("background", "pink")
            .css("color", "yellow");
    });

    //Focus y blur
    var input_event = $('#input-event');
    var datos = $('#datos');

    input_event.focus(function (e) {
        $(this).css("border", "3px solid green");
    });
    input_event.blur(function (e) {
        $(this).css("border", "1px solid red");
        datos.text($(this).val()).show();
    });

    //MouseDown y MouseUp
    datos.mousedown(function () { 
        $(this).css("border-color","grey");
    });
    datos.mouseup(function () { 
        $(this).css("border-color","red");
    });


    //OTROS
    //MouseMove 
    var sigueme =  $('#sigueme');
    var body = $('body');
    $(document).mousemove(function (e) { 
        // console.log( "values: ", e.clientX, e.clientY, e.pageX, e.pageY);
        sigueme.css({
            "left": e.pageX,
            "top": e.pageY
        });
        // console.log(body);
        //CONVERTIR UN ATRIBUTO CSS EN IMPORTANT
        body.attr('style', 'cursor: none !important');
        
        
        // css("cursor","none","important"); 
        

    });
});