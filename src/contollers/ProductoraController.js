const Productora = require('../models/productora');
const { request, response } = require('express');

const obtenerProductora = async (req = request, res = response) => {
    try {
        const { Estado } = req.query;
        const productora = await Productora.find({ Estado });
        return res.json(productora);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const crearProductora = async (req = request, res = response) => {
    try {
        const body = req.body;
        const productora = new Productora(body);
        await productora.save();
        return res.status(201).json(productora);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const actualizarProductora = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.FechaActualización = new Date();
        const productora = await Productora.findByIdAndUpdate(id, body, {new: true});

        return res.status(201).json(productora);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const eliminarProductora = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Productora.findByIdAndDelete(id);

        return res.status(204).json({
            message:'Borrado'
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = ({
    obtenerProductora,
    crearProductora,
    actualizarProductora,
    eliminarProductora
})