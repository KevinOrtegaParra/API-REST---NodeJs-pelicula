const express = require('express');
const {obtenerTipo, crearTipo, actualizarTipo, eliminarTipo} = require('../contollers/TipoController');

const router = express.Router();

router.get('/tipo', obtenerTipo);
router.post('/tipo', crearTipo);
router.put('/tipo/:id', actualizarTipo);
router.delete('/tipo/:id', eliminarTipo);

module.exports = router;
/*
router.get('/tipo', (req, res) => {
    tipoSchema.find().then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.post('/tipo', (req, res) => {
    const tipo = tipoSchema(req.body);
    tipo.save().then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.get('/tipo/:id', (req, res) => {
    const { id } = req.params;
    tipoSchema.findById(id).then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.put('/tipo/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, FechaCreación, FechaActualización, Descripción } = req.body;
    tipoSchema.updateOne({ _id: id }, { $set: {nombre, FechaCreación, FechaActualización, Descripción} }).then(data => res.json(data)).catch(error => res.json({ message: error }));
})

router.delete('/tipo/:id', (req, res) => {
    const { id } = req.params;
    tipoSchema.deleteOne({ _id: id }).then(data => res.json(data)).catch(error => res.json({ message: error }));
})

module.exports = router;*/