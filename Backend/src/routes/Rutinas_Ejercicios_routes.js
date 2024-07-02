
const express = require('express');
const router = express.Router();
const RutinasEjerciciosController = require('../controllers/Rutinas_Ejercicios_controller');

//* Rutas para Rutinas Ejercicios
router.get('/rutinas-ejercicios', RutinasEjerciciosController.getAll);
router.get('/rutinas-ejercicios/rutina', RutinasEjerciciosController.getByRutinaId);
router.get('/rutinas-ejercicios/:id', RutinasEjerciciosController.getById);


module.exports = router;
