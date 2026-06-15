const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Socio = sequelize.define('Socio', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: false },
    foto: { type: DataTypes.STRING, allowNull: true },  // String (URL de imagen)
    dni: { type: DataTypes.STRING, allowNull: false },
    numeroSocio: { type: DataTypes.INTEGER, allowNull: false },
    activo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
}, {
    tableName: 'socios',
    timestamps: true,
});

module.exports = Socio;