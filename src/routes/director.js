const express = require('express');
const  {obtenerDirector, crearDirector, actualizarDirector, eliminarDirector} = require('../contollers/DirectorController');

const router = express.Router();

router.get('/director', obtenerDirector);
router.post('/director', crearDirector);
router.put('/director/:id', actualizarDirector);
router.delete('/director/:id', eliminarDirector);

module.exports = router;
