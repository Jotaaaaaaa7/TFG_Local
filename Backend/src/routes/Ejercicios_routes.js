
const express = require('express');
const router = express.Router();
const EjerciciosController = require('../controllers/Ejercicios_controller');

//* Rutas para Ejercicios
router.get('/ejercicios', EjerciciosController.getAll);
router.get('/ejercicios/:id', EjerciciosController.getById);
router.post('/ejercicios', EjerciciosController.create);
router.put('/ejercicios/:id', EjerciciosController.update);
router.delete('/ejercicios/:id', EjerciciosController.remove);

module.exports = router;
