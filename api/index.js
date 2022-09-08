"use strict";

var mongoose = require("mongoose");
var app = require("./app");
require("dotenv").config({ path: "./.env" });
// Activamos la lectura de variables de entorno
console.log(process.env);
var port = process.env.PORT;
console.log(port);
console.log(process.env.MONGO_URL);
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/portafolio',
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log("-----------------------------------------------------------");
		console.log("Conexión a la Base de Datos Establecida con éxito");

		//Creacion del servidor
		app.listen(port, () => {
			console.log(
				"Servidor corriendo correctamente en la url: localhost:" + port
			);
			console.log(
				"-----------------------------------------------------------"
			);
		});
	})
	.catch((error) => {
		console.log("T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T");
		console.log("Ha habido un error: " + error);
		console.log("T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T");
	});
