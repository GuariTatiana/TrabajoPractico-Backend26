const { Local, Socio } = require('../models/index');

const localCtrl = {};

// POST - Agregar un Local
localCtrl.createLocal = async (req, res) => {
    try {
        const { numerolocal, superficie, activo } = req.body;
        
        const nuevoLocal = await Local.create({
            numerolocal,
            superficie,
            activo
        });
        
        res.json({ 
            status: '1', 
            msg: 'Local guardado.', 
            data: nuevoLocal 
        });
    } catch (error) {
        res.status(400).json({ 
            status: '0', 
            msg: 'Error procesando operacion.',
            error: error.message 
        });
    }
};

// GET - Obtener todos los Locales
localCtrl.getLocales = async (req, res) => {
    try {
        const locales = await Local.findAll();
        res.json(locales);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los locales.' });
    }
};

module.exports = localCtrl;