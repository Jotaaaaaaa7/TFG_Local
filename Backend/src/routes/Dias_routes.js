
const express = require('express');
const router = express.Router();
const DiasController = require('../controllers/Dias_controller');

//* Rutas para Dias
router.get('/dias', DiasController.getAll);
router.get('/dias/:id', DiasController.getById);
router.post('/dias', DiasController.create);
router.put('/dias/:id', DiasController.update);
router.delete('/dias/:id', DiasController.remove);

module.exports = router;
