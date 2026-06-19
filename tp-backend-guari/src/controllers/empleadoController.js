const Empleado = require('../models/Empleado');
const Publicacion = require('../models/Publicacion');
const { Op } = require('sequelize');

const empleadoCtrl = {};

// ========== EMPLEADOS ==========

// POST - Dar de alta un Empleado
empleadoCtrl.createEmpleado = async (req, res) => {
    try {
        const { apellido, nombre, dni, email } = req.body;

        const nuevoEmpleado = await Empleado.create({
            apellido,
            nombre,
            dni,
            email
        });
        
        res.json({ status: '1', msg: 'Empleado guardado.', data: nuevoEmpleado });
        //await Empleado.create(req.body);
        //res.json({ status: '1', msg: 'Empleado guardado.' });
         // Validar campos obligatorios
        
    } catch (error) {
        res.status(400).json({ 
            status: '0', 
            msg: 'Error procesando operacion.',
            error: error.message 
        });
    }
};

// GET - Obtener todos los Empleados
empleadoCtrl.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los empleados.' });
    }
};

// GET - Obtener UN Empleado por ID
empleadoCtrl.getEmpleadoById = async (req, res) => {
    try {
        const empleado = await Empleado.findByPk(req.params.id);
        if (!empleado) {
            return res.status(404).json({ status: '0', msg: 'Empleado no encontrado.' });
        }
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener el empleado.' });
    }
};

// ========== PUBLICACIONES ==========

// POST - Dar de alta una Publicación (con empleadoId)
empleadoCtrl.createPublicacion = async (req, res) => {
    try {
        const { empleadoId, Titulo, Contenido, ImagenAsociada, fechaPublicacion, vigente } = req.body;
        
        // Verificar que el empleado existe
        const empleado = await Empleado.findByPk(empleadoId);
        if (!empleado) {
            return res.status(404).json({ status: '0', msg: 'Empleado no encontrado.'});
        }
        
        const nuevaPublicacion = await Publicacion.create({
            Titulo,
            Contenido,
            ImagenAsociada,
            fechaPublicacion,
            vigente,
            empleadoId
        });
        
        res.json({ status: '1', msg: 'Publicación guardada.', data: { id: nuevaPublicacion.id } });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
    }
};

// GET - Recuperar TODAS las publicaciones (incluyendo informacion del empleado)
empleadoCtrl.getPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll({
            include: [{ model: Empleado, as: 'empleado' }]
        });
        res.json(publicaciones);
    } catch (error) {
        console.log('ERROR COMPLETO:', error);
        console.log('ERROR MESSAGE:', error.message);
        res.status(500).json({ 
            status: '0', 
            msg: 'Error al obtener las publicaciones.',
            error: error.message 
         });

    }
};

// DELETE - Eliminar una publicación
empleadoCtrl.deletePublicacion = async (req, res) => {
    try {
        await Publicacion.destroy({ where: { id: req.params.id } });
        res.json({ status: '1', msg: 'Publicación eliminada.' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando la operacion' });
    }
};

// PUT - Modificar una publicación
empleadoCtrl.updatePublicacion = async (req, res) => {
    try {
        await Publicacion.update(req.body, { where: { id: req.params.id } });
        res.json({ status: '1', msg: 'Publicación actualizada.' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando la operacion' });
    }
};

// GET - Búsqueda combinada: Título (parcial) y Vigente
empleadoCtrl.searchPublicaciones = async (req, res) => {
    try {
        const { titulo, vigente } = req.query;
        
        let whereCondition = {};
        
        if (titulo) {
            whereCondition.Titulo = { [Op.like]: `%${titulo}%` };
        }
        
        if (vigente !== undefined) {
            whereCondition.vigente = vigente === 'true' || vigente === true;
        }
        
        const publicaciones = await Publicacion.findAll({
            where: whereCondition,
            include: [{ model: Empleado, as: 'empleado' }]
        });
        
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error en la búsqueda de publicaciones.' });
    }
};

module.exports = empleadoCtrl;