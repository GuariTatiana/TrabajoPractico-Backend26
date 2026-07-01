const Transaccion = require('../models/Transaccion');

const transaccionCtrl = {};

// 1. Dar de alta una Transacción (POST)
transaccionCtrl.createTransaccion = async (req, res) => {
    try {
        const {IdiomaOrigen, TextoOrigen, IdiomaDestino, TextoDestino, emailCliente} = 
        req.body;
        await Transaccion.create({
            IdiomaOrigen,
            TextoOrigen,
            IdiomaDestino,
            TextoDestino,
            emailCliente
        });
        res.json({ status: '1', msg: 'Transacción guardada.', data: { IdiomaOrigen, TextoOrigen, IdiomaDestino, TextoDestino, emailCliente } });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
    }
};

// 2. Recuperar TODAS las Transacciones (GET)
transaccionCtrl.getTransacciones = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll();
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las transacciones.' });
    }
};

// 3. Recuperar histórico por email del cliente (GET)
transaccionCtrl.getTransaccionesByEmail = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll({
            where: { emailCliente: req.params.email }
        });
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las transacciones del cliente.' });
    }
};

// 4. Recuperar por idiomas origen y destino (GET)
transaccionCtrl.getTransaccionesByIdiomas = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll({
            where: {
                IdiomaOrigen: req.params.origen,
                IdiomaDestino: req.params.destino
            }
        });
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las transacciones por idiomas.' });
    }
};

const axios = require('axios');
transaccionCtrl.traducirTexto = async (req, res) => {
    try {
        const { texto, origen, destino } = req.body;

        const response = await axios.post(
            //'https://libretranslate.com/translate',
            'https://translate.fedilab.app/translate',
            {
                q: texto,
                source: origen,
                target: destino,
                format: 'text'
            }
        );

        res.status(200).json({
            translatedText: response.data.translatedText
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: '0',
            msg: 'Error al traducir'
        });
    }
};

module.exports = transaccionCtrl;