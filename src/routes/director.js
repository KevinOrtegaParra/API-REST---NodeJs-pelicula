const express = require('express');
const  {obtenerDirector, crearDirector, actualizarDirector, eliminarDirector} = require('../contollers/DirectorController');

const router = express.Router();

router.get('/director', obtenerDirector);
router.post('/director', crearDirector);
router.put('/director/:id', actualizarDirector);
router.delete('/director/:id', eliminarDirector);

module.exports = router;

/*
router.get('/director', (req, res) => {
    directorSchema.find().then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.post('/director', (req, res) => {
    const director = directorSchema(req.body);
    director.save().then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.get('/director/:id', (req, res) => {
    const { id } = req.params;
    directorSchema.findById(id).then(data => res.json(data)).catch(error => res.json({ message: error }));
});

router.put('/director/:id', (req, res) => {
    const { id } = req.params;
    const { Nombre, Estado, FechaCreación, FechaActualización } = req.body;
    directorSchema.updateOne({ _id: id }, { $set: {Nombre, Estado, FechaCreación, FechaActualización } }).then(data => res.json(data)).catch(error => res.json({ message: error }));
})

router.delete('/director/:id', (req, res) => {
    const { id } = req.params;
    directorSchema.deleteOne({ _id: id }).then(data => res.json(data)).catch(error => res.json({ message: error }));
})

module.exports = router;*/