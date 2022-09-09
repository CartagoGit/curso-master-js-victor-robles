"use strict";

let multer = require("multer");
let fs = require("fs").promises;
let globby = require("globby");
const multerUploadFile = (tipoRoute, onlyOne = true) => {
	let routeRelative = "./uploads/";
	let routeStorage = routeRelative + tipoRoute + "s/";
	let d = new Date();
	let uploadFilter;
	const day = ("0" + d.getDate()).slice(-2);
	const month = ("0" + (d.getMonth() + 1)).slice(-2);
	const year = d.getFullYear();
	const date = day + "-" + month + "-" + year;
	fs.mkdir(routeStorage, { recursive: true })
		.then(() => {
			console.log("La carpeta '" + routeStorage + "' se creo correctamente");
		})
		.catch((err) => {
			console.log("Hubo un error al crear la carpeta: " + err);
		});
	let storageFile = multer.diskStorage({
		destination(req, file, callback) {
			callback(null, routeStorage);
		},
		filename(req, file = {}, callback) {
			const { originalname } = file;
			let Id = req.params.id;
			let ext_split = originalname.split(".");
			let fileExtension = ext_split[ext_split.length - 1].toLowerCase();
			callback(null, tipoRoute + "_" + Id + "_" + date + "." + fileExtension);
		},
	});
	if (onlyOne) {
		uploadFilter = function (req, file, callback, err) {
			const { originalname } = file;
			let Id = req.params.id;

			let ext_split = originalname.split(".");
			let fileExtension = ext_split[ext_split.length - 1].toLowerCase();
			if (err) {
				console.log("Ha habido un error al subir el archivo: " + err);
				callback(null, false);
			}
			// Para eliminar los archivos del mismo Id y del mismo tipo de ruta antes de crear el nuevo.
			globby(routeStorage + tipoRoute + "_" + Id + "*")
				.then((files) => {
					const deletePromises = files.map((fil) => fs.unlink(fil));
					Promise.all(deletePromises);
				})
				.then(() => {
					console.log(
						"Archivos anteriores del mismo tipo, eliminados correctamente"
					);
					callback(null, true);
				})
				.catch((err) => {
					console.error(
						"Algún error ha ocurrido mientras se eliminaba el archivo",
						err
					);
					callback(null, false);
				});
		};
	}
	let mul_uploadFile;
	if (onlyOne)
		mul_uploadFile = multer({ storage: storageFile, fileFilter: uploadFilter });
	else mul_uploadFile = multer({ storage: storageFile });
	return mul_uploadFile;
};
module.exports = {
	multerUploadFile,
};
