'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    date: Date,
    langs: String,
    email:String,
    file: {
        fieldname: String,
        originalname: String,
        encoding: String,
        mimetype: String,
        destination: String,
        filename: String,
        path: String,
        size: Number
    }
});

// Lo que hace mongoose es poner el nombre en minusculas y le añade una "s" al añadirlo en la base de datos 
// en nuestro caso: "Project" pasaria a ser "projects"
module.exports = mongoose.model('Project', ProjectSchema);