const express = require('express');
const {crearProductora, obtenerProductora, eliminarProductora, actualizarProductora} = require('../contollers/ProductoraController');

const router = express.Router();

router.get('/productora', obtenerProductora);
router.post('/productora', crearProductora);
router.put('/productora/:id', actualizarProductora);
router.delete('/productora/:id', eliminarProductora);

module.exports = router;