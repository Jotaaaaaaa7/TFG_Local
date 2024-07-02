
const express = require('express');
const router = express.Router();
const MusculosController = require('../controllers/Musculos_controller');

//* Rutas para Musculos
router.get('/musculos', MusculosController.getAll);
router.get('/musculos/:id', MusculosController.getById);
router.post('/musculos', MusculosController.create);
router.put('/musculos/:id', MusculosController.update);
router.delete('/musculos/:id', MusculosController.remove);

module.exports = router;
