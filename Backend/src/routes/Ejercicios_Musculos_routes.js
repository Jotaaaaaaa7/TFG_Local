
const express = require('express');
const router = express.Router();
const EjerciciosMusculosController = require('../controllers/Ejercicios_Musculos_controller');

//* Rutas para Ejercicios Musculos
router.get('/ejercicios-musculos', EjerciciosMusculosController.getAll);
router.get('/ejercicios-musculos/ejercicio', EjerciciosMusculosController.getByExerciseId);
router.get('/ejercicios-musculos/:id', EjerciciosMusculosController.getById);


module.exports = router;
