
const express = require('express');
const router = express.Router();
const RutinasController = require('../controllers/Rutinas_controller');

//* Rutas para Rutinas
router.get('/rutinas', RutinasController.getAll);
router.get('/rutinas/:id', RutinasController.getById);
router.post('/rutinas', RutinasController.create);
router.put('/rutinas/:id', RutinasController.update);
router.delete('/rutinas/:id', RutinasController.remove);

module.exports = router;
