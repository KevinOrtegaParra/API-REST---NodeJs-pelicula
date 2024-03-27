const express = require('express');
const {obtenerTipo, crearTipo, actualizarTipo, eliminarTipo} = require('../contollers/TipoController');

const router = express.Router();

router.get('/tipo', obtenerTipo);
router.post('/tipo', crearTipo);
router.put('/tipo/:id', actualizarTipo);
router.delete('/tipo/:id', eliminarTipo);

module.exports = router;