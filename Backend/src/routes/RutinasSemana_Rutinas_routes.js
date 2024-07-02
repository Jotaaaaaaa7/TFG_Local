const express = require('express');
const router = express.Router();

const RutinasSemana_RutinasController = require('../controllers/RutinasSemana_Rutinas_controller');

//* Rutas para Rutinas Semana Rutinas
router.get('/rutinas-semana-rutinas', RutinasSemana_RutinasController.getAll);
router.get('/rutinas-semana-rutinas/rutinaSemanal', RutinasSemana_RutinasController.getByRutinaSemanaId);
router.get('/rutinas-semana-rutinas/:id', RutinasSemana_RutinasController.getById);


module.exports = router;


