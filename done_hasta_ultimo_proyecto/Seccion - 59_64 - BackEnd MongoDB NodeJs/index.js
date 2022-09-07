'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("-----------------------------------------------------------");
        console.log("Conexión a la Base de Datos Establecida con éxito");


        //Creacion del servidor
        app.listen(port, () => {
            console.log("Servidor corriendo correctamente en la url: localhost:" + port);
            console.log("-----------------------------------------------------------");
        });
    })
    .catch((error) => {
        console.log("T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T");
        console.log("Ha habido un error: " + error);
        console.log("T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T");
    })