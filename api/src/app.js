"use strict";

let express = require("express");
let bodyParser = require("body-parser");

let app = express();

// cargar archivos de rutas
let projectRoutes = require("./routes/project.routes");

// middlewares - Metodos que se ejecutan antes de un controlador y despues se ejecuta la ruta a la que estamos llamando
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json())

// Configurar cabeceras y cors
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

// rutas
app.use("/api", projectRoutes);

//Exportar el modulo
module.exports = app;
