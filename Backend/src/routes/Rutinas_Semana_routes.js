
const express = require('express');
const router = express.Router();
const RutinasSemanaController = require('../controllers/Rutinas_Semana_controller');

//* Rutas para Rutinas Semanales
router.get('/rutinas-semana', RutinasSemanaController.getAll);
router.get('/rutinas-semana/:id', RutinasSemanaController.getById);
router.post('/rutinas-semana', RutinasSemanaController.create);
router.put('/rutinas-semana/:id', RutinasSemanaController.update);
router.delete('/rutinas-semana/:id', RutinasSemanaController.remove);

module.exports = router;
