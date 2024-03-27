const mongoose = require('mongoose');

const directorSchema = mongoose.Schema({

    Nombre: {
        type: String,
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
    }
});

module.exports = mongoose.model('Director', directorSchema);