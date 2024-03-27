const express = require('express');
const {obtenerMedia, crearMedia, actualizarMedia, eliminarMedia} = require('../contollers/MediaController');

const router = express.Router();

router.get('/media', obtenerMedia);
router.post('/media', crearMedia);
router.put('/media/:id', actualizarMedia);
router.delete('/media/:id', eliminarMedia);

module.exports = router;
/*
router.get('/media', (req, res) => {
    mediaSchema.find().then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.post('/media', (req, res) => {
    const media = mediaSchema(req.body);
    media.save().then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.get('/media/:id', (req, res) => {
    const { id } = req.params;
    mediaSchema.findById(id).then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.put('/media/:id', (req, res) => {
    const { id } = req.params;
    const { Serial, Titulo, Sinopsis, UrlPelicula, ImagenPortada, FechaCreacion, FechaActualizacion, AnioEstreno, GeneroPrincipal, DirectorPrincipal, Productora, Tipo } = req.body;
    mediaSchema.updateOne({ _id: id }, { $set: {Serial, Titulo, Sinopsis, UrlPelicula, ImagenPortada, FechaCreacion, FechaActualizacion, AnioEstreno, GeneroPrincipal, DirectorPrincipal, Productora, Tipo} }).then(data => res.json(data)).catch(error => res.json({ message: error }));
})

router.delete('/media/:id', (req, res) => {
    const { id } = req.params;
    mediaSchema.deleteOne({ _id: id }).then(data => res.json(data)).catch(error => res.json({ message: error }));
})

module.exports = router;*/