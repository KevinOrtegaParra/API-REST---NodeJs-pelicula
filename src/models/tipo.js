const mongoose = require('mongoose');

const tipoSchema = mongoose.Schema({
    Nombre: {
        type: String,
        unique: true,
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

module.exports = mongoose.model('Tipo', tipoSchema);