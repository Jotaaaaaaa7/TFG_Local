
const express = require('express');
const router = express.Router();

const CategoriasAlimentosController = require('../controllers/Categorias_Alimentos_controller');

//* Rutas para Categorias de Alimentos
router.get('/categorias-alimentos', CategoriasAlimentosController.getAll);
router.get('/categorias-alimentos/:id', CategoriasAlimentosController.getById);
router.post('/categorias-alimentos', CategoriasAlimentosController.create);
router.put('/categorias-alimentos/:id', CategoriasAlimentosController.update);
router.delete('/categorias-alimentos/:id', CategoriasAlimentosController.remove);

module.exports = router;