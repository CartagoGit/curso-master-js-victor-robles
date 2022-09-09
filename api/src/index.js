"use strict";

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

// Activamos la lectura de variables de entorno
const result = dotenv.config();
if (result.error) throw result.error;
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/portafolio',
mongoose
	.connect(mongoUrl, {
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
				"Base de Datos corriendo correctamente en la url: " + mongoUrl
			);
			console.log("Node corriendo en localhost:" + port);
			console.log(
				"-----------------------------------------------------------"
			);
		});
	})
	.catch((error) => {
		console.log("T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T");
		console.log(
			"Ha habido un error al conectar a la Base de Datos de Mongo: " + error
		);
		console.log("T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T_T");
	});
