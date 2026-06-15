const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Empleado = sequelize.define('Empleado', {
    apellido: { type: DataTypes.STRING, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    dni: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false }
}, {
    tableName: 'empleados',
    timestamps: true,
});

module.exports = Empleado;