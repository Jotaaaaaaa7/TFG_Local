
const express = require('express');
const router = express.Router();
const ComidasController = require('../controllers/Comidas_controller');

//* Rutas para Comidas
router.get('/comidas', ComidasController.getAll);
router.get('/comidas/:id', ComidasController.getById);
router.post('/comidas', ComidasController.create);
router.put('/comidas/:id', ComidasController.update);
router.delete('/comidas/:id', ComidasController.remove);

module.exports = router;
