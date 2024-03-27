const express = require('express');
const {crearGeneros, obtenerGeneros, actualizarGeneros, eliminarGeneros} = require('../contollers/GeneroController');

const router = express.Router();

router.get('/genero', obtenerGeneros);
router.post('/genero', crearGeneros);
router.put('/genero/:id', actualizarGeneros);
router.delete('/genero/:id', eliminarGeneros);

module.exports = router;
/*

router.get('/genero', (req, res) => {
    generoSchema.find().then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.post('/genero', (req, res) => {
    const genero = generoSchema(req.body);
    genero.save().then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.get('/genero/:id', (req, res) => {
    const { id } = req.params;
    generoSchema.findById(id).then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.put('/genero/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, Estado, FechaCreación, FechaActualización, Descripción } = req.body;
    generoSchema.updateOne({ _id: id }, { $set: {nombre, Estado, FechaCreación, FechaActualización, Descripción} }).then(data => res.json(data)).catch(error => res.json({ message: error }));
})

router.delete('/genero/:id', (req, res) => {
    const { id } = req.params;
    generoSchema.deleteOne({ _id: id }).then(data => res.json(data)).catch(error => res.json({ message: error }));
})

module.exports = router;*/