const Socio = require('../models/Socio');

const socioCtrl = {};

// POST - Dar de alta un Socio
socioCtrl.createSocio = async (req, res) => {
    try {
        const { nombre, apellido, foto, dni, numeroSocio, activo } = req.body;
        
        const nuevoSocio = await Socio.create({
            nombre, apellido, foto, dni, numeroSocio, activo
        });
        
        res.status(201).json({ status: '1', msg: 'Socio guardado.', data: nuevoSocio });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
    }
};

// GET - Recuperar TODOS los Socios
socioCtrl.getSocios = async (req, res) => {
    try {
        const socios = await Socio.findAll();
        res.json(socios);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los socios.' });
    }
};

// DELETE - Eliminar un Socio
socioCtrl.deleteSocio = async (req, res) => {
    try {
        const socio = await Socio.findByPk(req.params.id);
        if (!socio) {
            return res.status(404).json({ status: '0', msg: 'Socio no encontrado.' });
        }
        await socio.destroy();
        res.json({ status: '1', msg: 'Socio eliminado.' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando la operacion' });
    }
};

// PUT - Modificar un Socio
socioCtrl.updateSocio = async (req, res) => {
    try {
        const socio = await Socio.findByPk(req.params.id);
        if (!socio) {
            return res.status(404).json({ status: '0', msg: 'Socio no encontrado.' });
        }
        await socio.update(req.body);
        res.json({ status: '1', msg: 'Socio actualizado.', data: socio });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando la operacion' });
    }
};

// GET - Recuperar los socios ACTIVOS
socioCtrl.getSociosActivos = async (req, res) => {
    try {
        const sociosActivos = await Socio.findAll({ where: { activo: true } });
        res.json(sociosActivos);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los socios activos.' });
    }
};

module.exports = socioCtrl;