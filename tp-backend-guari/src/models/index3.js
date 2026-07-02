const sequelize = require('../../config/database');
const Empleado = require('./Empleado');
const Publicacion = require('./Publicacion');

// ========== DEFINIR RELACIONES AQUÍ ==========

// Un Empleado tiene muchas Publicaciones
Empleado.hasMany(Publicacion, { 
    as: 'publicaciones', 
    foreignKey: 'empleadoId' 
});

// Una Publicación pertenece a un Empleado
Publicacion.belongsTo(Empleado, { 
    as: 'empleado', 
    foreignKey: 'empleadoId' 
});

module.exports = {
    sequelize,
    Empleado,
    Publicacion
};