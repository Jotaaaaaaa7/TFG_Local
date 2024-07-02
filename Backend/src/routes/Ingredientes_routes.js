

const express = require('express');
const router = express.Router();
const IngredientesController = require('../controllers/Ingredientes_controller');

router.get('/ingredientes', IngredientesController.getAll);
//* Ejemplo: /ingredientes/receta?recetaId=1
router.get('/ingredientes/receta', IngredientesController.getByRecipeId);
router.get('/ingredientes/:id', IngredientesController.getById);

module.exports = router;

