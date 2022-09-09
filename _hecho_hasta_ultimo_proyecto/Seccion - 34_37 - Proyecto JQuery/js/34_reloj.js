$('document').ready(function () {

    var reloj = $('#reloj');
    var horario = moment().format("HH:mm:ss");
    reloj.html(horario);
    setInterval(function () {
        horario = moment().format("HH:mm:ss");
        reloj.html(horario);
    }, 1000); {
 
    }
    

    // var reloj_digital = $("#clockdigital");
    // reloj_digital.transform(function(element){
    //     element.scale(3);
    // });
});