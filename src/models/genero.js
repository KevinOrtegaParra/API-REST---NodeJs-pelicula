const mongoose = require('mongoose');

const generoSchema = mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        require: true
    },
    Estado: {
        type: Boolean,
        default: true,
        require: true
    },
    FechaCreación: {
        type: Date,
        default: new Date()
    },
    FechaActualización: {
        type: Date,
        default: new Date()
    },
    Descripción: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Genero', generoSchema);