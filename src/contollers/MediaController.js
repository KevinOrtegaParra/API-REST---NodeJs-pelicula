const Media = require('../models/media');
const { request, response } = require('express');

const obtenerMedia = async (req = request, res = response) => {
    try {
        const media = await Media.find();
        return res.json(media);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const crearMedia = async (req = request, res = response) => {
    try {
        const body = req.body;
        const media = new Media(body);
        await media.save();
        return res.status(201).json(media);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const actualizarMedia = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.FechaActualización = new Date();
        const media = await Media.findByIdAndUpdate(id, body, {new: true});

        return res.status(201).json(media);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const eliminarMedia = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Media.findByIdAndDelete(id);

        return res.status(204).json({
            message:'Borrado'
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = ({
    obtenerMedia,
    crearMedia,
    actualizarMedia,
    eliminarMedia
})