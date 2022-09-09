'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    file: {}
});

// Lo que hace mongoose es poner el nombre en minusculas y le añade una "s" al añadirlo en la base de datos 
// en nuestro caso: "Project" pasaria a ser "projects"
module.exports = mongoose.model('Project', ProjectSchema);