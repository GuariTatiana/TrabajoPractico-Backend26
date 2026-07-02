const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleadoController');

// ========== RUTAS DE EMPLEADOS ==========
router.post('/', empleadoCtrl.createEmpleado);           // POST - Dar de alta Empleado
router.get('/', empleadoCtrl.getEmpleados);              // GET - Obtener todos
      // GET - Obtener UN empleado

// ========== RUTAS DE PUBLICACIONES ==========
router.post('/publicaciones', empleadoCtrl.createPublicacion);           // POST - Crear publicación
router.get('/publicaciones', empleadoCtrl.getPublicaciones);             // GET - Todas las publicaciones
router.get('/publicaciones/search', empleadoCtrl.searchPublicaciones);   // GET - Búsqueda combinada
router.delete('/publicaciones/:id', empleadoCtrl.deletePublicacion);     // DELETE - Eliminar publicación
router.put('/publicaciones/:id', empleadoCtrl.updatePublicacion);        // PUT - Modificar publicación

router.get('/:id', empleadoCtrl.getEmpleadoById);  


module.exports = router;