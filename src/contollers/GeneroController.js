const Genero = require('../models/genero');
const { request, response } = require('express');

const obtenerGeneros = async (req = request, res = response) => {
    try {
        const { Estado } = req.query;
        const generos = await Genero.find({ Estado });
        //.then(data => res.json(data)).catch(error => 
        return res.json(generos);//);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const crearGeneros = async (req = request, res = response) => {
    try {
        const body = req.body;
        const genero = new Genero(body);
        await genero.save();
        //.then(data => res.json(data)).catch(error => 
        return res.status(201).json(genero);//);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const actualizarGeneros = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.FechaActualización = new Date();
        const genero = await Genero.findByIdAndUpdate(id, body, {new: true});

        return res.status(201).json(genero);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const eliminarGeneros = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Genero.findByIdAndDelete(id);

        return res.status(204).json({
            message:'Borrado'
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = ({
    obtenerGeneros,
    crearGeneros,
    actualizarGeneros,
    eliminarGeneros
})