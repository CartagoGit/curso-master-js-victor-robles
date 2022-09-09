'use strict'
$(document).ready(function () {
    var caja01 = $('#caja01');
    var btn_mostrar = $('#btn_mostrar');
    var btn_ocultar = $('#btn_ocultar');
    var btn_ambos = $('#btn_ambos');
    var btn_animame = $('#btn_animame');

    // caja01.hide();
    // btn_ocultar.hide();

    btn_mostrar.click(function () {
        //PAra mostrar con efecto distinto
        // caja01.show('normal');
        // caja01.fadeIn('slow');
        // caja01.slideUp('slow');
        caja01.fadeTo('slow', 1)
        btn_ocultar.show();
        $(this).hide();
    });
    btn_ocultar.click(function () {
        //PAra ocultar con efecto distinto
        // caja01.hide('normal');
        // caja01.fadeOut('slow');
        // caja01.slideDown('slow');
        caja01.fadeTo(300, 0.1, function(){
            console.log("se oculto");
        })
        btn_mostrar.show();
        $(this).hide();
    });

    btn_ambos.click(function () {
        // caja01.toggle('fast');
        // caja01.fadeToggle('fast');
        // caja01.slideToggle('fast');

        // this.toggle = !this.toggle;
        // caja01.stop().fadeTo(200, this.toggle ? 1 : 0.1);

        caja01.toggleClass('faded',4000);

        //TAMBIEN SE PUEDEN USAR FUNCIONES DE CALLBACK <-----------------
    });

    //ANIMACIONES

    btn_animame.click(function () {
        //Se indica dentro de un JSON
        console.log("Antes: ", this.toggle);
        this.toggle = !this.toggle;
        console.log("Despues: ", this.toggle);
        caja01.animate(
            this.toggle ? {
                marginLeft: '500px',
                fontSize: "40px",
                opacity: "1"
            } : {
                    marginLeft: '0px',
                    fontSize: "14px",
                    opacity: "0.1"
                }, 'slow')
            .animate(
                this.toggle ? {
                    marginTop: "50px",
                    borderRadius: "500px"
                } : {
                        marginTop: "0px",
                        borderRadius: "0px"
                    });
    });


});