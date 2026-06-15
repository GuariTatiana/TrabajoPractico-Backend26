const { Sequelize } = require('sequelize');

// Crea la base de datos "tp_backend_db" en PostgreSQL antes de ejecutar
const sequelize = new Sequelize('proyectodb', 'postgres', '0000', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Evita logs innecesarios en consola
});

// Probar la conexión
sequelize.authenticate()
    .then(() => console.log(' Conectado a PostgreSQL correctamente'))
    .catch(err => console.error(' Error al conectar a PostgreSQL:', err));

module.exports = sequelize;