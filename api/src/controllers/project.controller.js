"user strict";

let Project = require("../models/project.model");
let controller = {
	home: function (req, res) {
		return res.status(200).send({
			message: "Soy la home",
		});
	},

	test: function (req, res) {
		return res.status(200).send({
			message: "Soy el test",
		});
	},

	saveProject: function (req, res) {
		let project = new Project();
		let params = req.body;
		if (!params || !params.name) {
			return res.status(500).send({
				message: "Faltan parametros del project como para poder guardarlo",
			});
		}
		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.year = params.year;
		project.langs = Array.isArray(params.langs)
			? params.langs
			: params.langs.split(",");
		project.file = params.file;

		//guardar el projecto en la BD:
		project.save((err, projectStored) => {
			if (err)
				return res.status(500).send({ message: "Error al guardar project." });
			if (!projectStored)
				return res
					.status(404)
					.send({ message: "No se ha podido guardar project" });
			return res.status(200).send(projectStored);
		});
	},
	getProject: function (req, res) {
		let projectId = req.params.id;
		if (projectId == null)
			return res
				.status(404)
				.send({ message: "No existe ningun project con esa Id" });
		Project.findById(projectId, (err, projectPicked) => {
			if (err)
				return res
					.status(500)
					.send({ message: "Error al devolver el project" });
			if (!projectPicked)
				return res
					.status(404)
					.send({ message: "El project no se ha recogido o no existe" });
			return res.status(200).send(projectPicked);
		});
	},

	getProjects: function (req, res) {
		// Project.find({year:2019}); Por ejemplo para buscar algo en especifico
		//-year para ordenar de mayor a menor por año
		Project.find({})
			.sort("-year")
			.exec((err, projectsPicked) => {
				if (err)
					return res
						.status(500)
						.send({ message: "Error al devolver los projects" });
				if (!projectsPicked)
					return res
						.status(404)
						.send({ message: "Los projects no se han recogido o no existen" });
				return res.status(200).send(projectsPicked);
			});
	},

	updateProject: function (req, res) {
		let projectId = req.params.id;
		let update = req.body;
		if (projectId == null)
			return res.status(404).send({
				message: "No se pudo actualizar: No existe ningun project con esa Id",
			});
		//new:true para que me pase el objeto nuevo y no el anterior de la actualziacion
		Project.findByIdAndUpdate(
			projectId,
			update,
			{ new: true },
			(err, projectUpdated) => {
				if (err)
					return res
						.status(500)
						.send({ message: "Error al actualizar el project" });
				if (!projectUpdated)
					return res
						.status(404)
						.send({ message: "El project no se ha actualizado o no existe" });
				return res.status(200).send(projectUpdated);
			}
		);
	},
	deleteProject: function (req, res) {
		let projectId = req.params.id;
		if (projectId == null)
			return res.status(404).send({
				message: "No se pudo eliminar: No existe ningun project con esa Id",
			});
		Project.findByIdAndRemove(projectId, (err, projectDeleted) => {
			if (err)
				return res
					.status(500)
					.send({ message: "Error al eliminar el project" });
			if (!projectDeleted)
				return res
					.status(404)
					.send({ message: "El project no se ha eliminado o no existe" });
			return res.status(200).send(projectDeleted);
		});
	},
	uploadFile: function (req, res) {
		let projectId = req.params.id;
		let fileName = "No hay archivo seleccionado.";
		if (req.file) {
			let fileUploadData = req.file;
			Project.findOneAndUpdate(
				projectId,
				{ file: fileUploadData },
				{ new: true },
				(err, projectUpdated) => {
					if (err)
						return res
							.status(500)
							.send({ message: "El archivo no se ha subido:", err });
					if (!projectUpdated)
						return res
							.status(404)
							.send({ message: "El archivo o el project no existen" });
					return res.status(200).send(projectUpdated);
				}
			);
		} else {
			return res.status(404).send({ message: fileName });
		}
	},
};

module.exports = controller;
