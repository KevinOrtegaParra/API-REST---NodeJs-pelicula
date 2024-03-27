const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
  Serial: {
    type: String,
    unique: true,
    require: true
  },
  Titulo: {
    type: String,
    required: true
  },
  Sinopsis: {
    type: String,
    required: true
  },
  UrlPelicula: {
    type: String,
    unique: true,
    required: true
  },
  ImagenPortada: {
    type: String,
    required: true
  },
  FechaCreacion: {
    type: Date,
    default: new Date()
  },
  FechaActualizacion: {
    type: Date,
    default: new Date()
  },
  AnioEstreno: {
    type: Number,
    required: true
  },
  GeneroPrincipal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genero',
    required: true
  },
  DirectorPrincipal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director',
    required: true
  },
  Productora: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Productora',
    required: true
  },
  Tipo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tipo',
    required: true
  }
});

module.exports = mongoose.model('Media', mediaSchema);