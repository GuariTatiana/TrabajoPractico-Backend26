const sequelize = require('../../config/database');
const Empleado = require('./Empleado');
const Publicacion = require('./Publicacion');

// ========== DEFINIR RELACIONES AQUÍ ==========
// Una Publicación pertenece a un Empleado
Publicacion.belongsTo(Empleado, { 
    as: 'empleado', 
    foreignKey: 'empleadoId' 
});

// Un Empleado tiene muchas Publicaciones
Empleado.hasMany(Publicacion, { 
    as: 'publicaciones', 
    foreignKey: 'empleadoId' 
});

module.exports = {
    sequelize,
    Empleado,
    Publicacion
};