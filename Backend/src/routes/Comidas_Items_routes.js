
const express = require('express');
const router = express.Router();

const ComidasItemsController = require('../controllers/Comidas_Items_controller');

//* Rutas para Comidas Items
router.get('/comidas-items', ComidasItemsController.getAll);
router.get('/comidas-items/comida', ComidasItemsController.getByComidaId);
router.get('/comidas-items/:id', ComidasItemsController.getById);

module.exports = router;
