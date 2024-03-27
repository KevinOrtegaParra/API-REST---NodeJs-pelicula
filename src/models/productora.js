const mongoose = require('mongoose');

const productoraSchema = mongoose.Schema({
    Nombre: {
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
    Slogan: {
        type: String,
        requiere: true
    },
    Descripción: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Productora', productoraSchema);