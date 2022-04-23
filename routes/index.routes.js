const express = require('express')
const router = express.Router();
const main=require('../controllers/MainController.js')

//Rutas

router.post('/triangulo', main.triangulo);
router.post('/circunferencia', main.circunferencia);
router.post('/cuadrado', main.cuadrado);

module.exports = router;