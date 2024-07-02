

const express = require('express');
const router = express.Router();
const AlimentosController = require('../controllers/Alimentos_controller');

//* Rutas para los alimentos
router.get('/alimentos', AlimentosController.getAll);
router.get('/alimentos/:id', AlimentosController.getById);
router.post('/alimentos', AlimentosController.create);
router.put('/alimentos/:id', AlimentosController.update);
router.delete('/alimentos/:id', AlimentosController.remove);

module.exports = router;
