const sequelize = require('../../config/database');
const Socio = require('./Socio');
const Local = require('./Local');

// un socio pertenece a un local
Socio.belongsTo(Local, { 
    as: 'local', 
    foreignKey: 'localId' 
});

// un Local pertenece a un Socio
Local.hasOne(Socio, { 
    as: 'socio', 
    foreignKey: 'localId' 
});

module.exports = {
    sequelize,
    Socio,
    Local
};