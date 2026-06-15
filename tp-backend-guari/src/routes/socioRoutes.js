//se crea manejo de rutas
const express = require('express');
const router = express.Router();
//defino controlar para manejo de CRUD
const socioCtrl = require('../controllers/socioController');

//definimos rutas en gestion de socios
// POST - Dar de alta un Socio
router.post('/', socioCtrl.createSocio);

// GET - Recuperar TODOS los Socios
router.get('/', socioCtrl.getSocios);

// DELETE - Eliminar un Socio
router.delete('/:id', socioCtrl.deleteSocio);

// PUT - Modificar un Socio
router.put('/:id', socioCtrl.updateSocio);

// GET - Recuperar los socios ACTIVOS
router.get('/activos', socioCtrl.getSociosActivos);

//exportamos el modulo de rutas
module.exports = router;