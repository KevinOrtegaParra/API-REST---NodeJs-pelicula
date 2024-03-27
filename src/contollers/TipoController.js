const Tipo = require('../models/tipo');
const { request, response } = require('express');

const obtenerTipo = async (req = request, res = response) => {
    try {
        //const { Estado } = req.query;
        const tipo = await Tipo.find();//{ Estado });
        //.then(data => res.json(data)).catch(error => 
        return res.json(tipo);//);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const crearTipo = async (req = request, res = response) => {
    try {
        const body = req.body;
        const tipo = new Tipo(body);
        await tipo.save();
        //.then(data => res.json(data)).catch(error => 
        return res.status(201).json(tipo);//);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const actualizarTipo = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.FechaActualización = new Date();
        const tipo = await Tipo.findByIdAndUpdate(id, body, {new: true});

        return res.status(201).json(tipo);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const eliminarTipo = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Tipo.findByIdAndDelete(id);

        return res.status(204).json({
            message:'Borrado'
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = ({
    obtenerTipo,
    crearTipo,
    actualizarTipo,
    eliminarTipo
})