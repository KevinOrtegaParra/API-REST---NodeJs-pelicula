const Director = require('../models/director');
const { request, response } = require('express');

const obtenerDirector = async (req = request, res = response) => {
    try {
        const { Estado } = req.query;
        const director = await Director.find({ Estado });
        return res.json(director);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const crearDirector = async (req = request, res = response) => {
    try {
        const body = req.body;
        const director = new Director(body);
        await director.save();
        return res.status(201).json(director);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const actualizarDirector = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.FechaActualización = new Date();
        const director = await Director.findByIdAndUpdate(id, body, {new: true});

        return res.status(201).json(director);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const eliminarDirector = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Director.findByIdAndDelete(id);

        return res.status(204).json({
            message:'Borrado'
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = ({
    obtenerDirector,
    crearDirector,
    actualizarDirector,
    eliminarDirector
})