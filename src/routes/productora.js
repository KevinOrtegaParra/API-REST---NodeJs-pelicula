const express = require('express');
const {crearProductora, obtenerProductora, eliminarProductora, actualizarProductora} = require('../contollers/ProductoraController');

const router = express.Router();

router.get('/productora', obtenerProductora);
router.post('/productora', crearProductora);
router.put('/productora/:id', actualizarProductora);
router.delete('/productora/:id', eliminarProductora);

module.exports = router;
/*

router.get('/productora', (req, res) => {
    productoraSchema.find().then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.post('/productora', (req, res) => {
    const productora = productoraSchema(req.body);
    productora.save().then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.get('/productora/:id', (req, res) => {
    const { id } = req.params;
    productoraSchema.findById(id).then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.put('/productora/:id', (req, res) => {
    const { id } = req.params;
    
    const { Nombre, Estado, FechaCreación, FechaActualización, Slogan, Descripción } = req.body;
    productoraSchema.updateOne({ _id: id }, { $set: {Nombre, Estado, FechaCreación, FechaActualización, Slogan, Descripción} }).then(data => res.json(data)).catch(error => res.json({ message: error }));
})

router.delete('/productora/:id', (req, res) => {
    const { id } = req.params;
    productoraSchema.deleteOne({ _id: id }).then(data => res.json(data)).catch(error => res.json({ message: error }));
})

module.exports = router;*/