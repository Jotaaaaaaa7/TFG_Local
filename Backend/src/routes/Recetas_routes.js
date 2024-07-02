
const express = require('express');
const router = express.Router();
const RecetasController = require('../controllers/Recetas_controller');

//* Rutas para Recetas
router.get('/recetas', RecetasController.getAll);
router.get('/recetas/:id', RecetasController.getById);
router.post('/recetas', RecetasController.create);
router.put('/recetas/:id', RecetasController.update);
router.delete('/recetas/:id', RecetasController.remove);

module.exports = router;
