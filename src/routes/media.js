const express = require('express');
const {obtenerMedia, crearMedia, actualizarMedia, eliminarMedia} = require('../contollers/MediaController');

const router = express.Router();

router.get('/media', obtenerMedia);
router.post('/media', crearMedia);
router.put('/media/:id', actualizarMedia);
router.delete('/media/:id', eliminarMedia);

module.exports = router;