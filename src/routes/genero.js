const express = require('express');
const {crearGeneros, obtenerGeneros, actualizarGeneros, eliminarGeneros} = require('../contollers/GeneroController');

const router = express.Router();

router.get('/genero', obtenerGeneros);
router.post('/genero', crearGeneros);
router.put('/genero/:id', actualizarGeneros);
router.delete('/genero/:id', eliminarGeneros);

module.exports = router;