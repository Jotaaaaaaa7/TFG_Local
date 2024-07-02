
const express = require('express');
const router = express.Router();
const DiasComidasController = require('../controllers/Dias_Comidas_controller');

//* Rutas para Dias Comidas
router.get('/dias-comidas', DiasComidasController.getAll);
router.get('/dias-comidas/dia', DiasComidasController.getByDiaId);
router.get('/dias-comidas/:id', DiasComidasController.getById);

module.exports = router;