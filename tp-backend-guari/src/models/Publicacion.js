const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Empleado = require('./Empleado');

const Publicacion = sequelize.define('Publicacion', {
    Titulo: { type: DataTypes.STRING, allowNull: false },
    Contenido: { type: DataTypes.TEXT, allowNull: false },
    ImagenAsociada: { type: DataTypes.TEXT, allowNull: true }, // base64
    fechaPublicacion: { type: DataTypes.STRING, allowNull: false },
    vigente: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
}, {
    tableName: 'publicaciones',
    timestamps: true,
});

// Relación: Una Publicación pertenece a un Empleado
Publicacion.belongsTo(Empleado, { as: 'empleado', foreignKey: 'empleadoId' });

// Relación: Un Empleado tiene muchas Publicaciones
Empleado.hasMany(Publicacion, { as: 'publicaciones', foreignKey: 'empleadoId' });


module.exports = Publicacion;