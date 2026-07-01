const express = require('express');
const router = express.Router();
const localCtrl = require('../controllers/localController');


router.post('/', localCtrl.createLocal);


router.get('/', localCtrl.getLocales);

module.exports = router;