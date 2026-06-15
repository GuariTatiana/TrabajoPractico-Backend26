const express = require('express');
const router = express.Router();
const transaccionCtrl = require('../controllers/transaccionController');

// Definimos las rutas para la gestion de transacciones
router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
router.get('/cliente/:email', transaccionCtrl.getTransaccionesByEmail);
router.get('/idiomas/:origen/:destino', transaccionCtrl.getTransaccionesByIdiomas);

module.exports = router;