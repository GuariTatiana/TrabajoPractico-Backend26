const express = require('express'); 
const cors = require('cors'); 
 
const sequelize = require('./config/database'); 
var app = express(); 
 
//middlewares 
app.use(express.json()); 
app.use(cors({origin: 'http://localhost:4200'}));

//importamos rutas de socios
const socioRoutes = require('./src/routes/socioRoutes');
const transaccionRoutes = require('./src/routes/transaccionRoutes');
const empleadoRoutes = require('./src/routes/empleadoRoutes');

//usamos rutas de socios
app.use('/api/socios', socioRoutes);
app.use('/api/transacciones', transaccionRoutes);
app.use('/api/empleados', empleadoRoutes);

// Documentación Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//setting 
app.set('port', process.env.PORT || 3000); 


 
//sincronizamos base de datos y levantamos servidor
sequelize.sync({ force: false })  
  .then(() => { 
    console.log('Tablas de PostgreSQL sincronizadas'); 
     
    app.listen(app.get('port'), () => { 
      console.log(`Server started on port`, app.get('port')); 
    }); 
  }) 
  .catch(err => { 
    console.error('No se pudo iniciar el servidor debido a un error en la BD:', err); 
  });