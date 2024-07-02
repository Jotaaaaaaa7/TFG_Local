
const express = require('express');
const router = express.Router();
const GruposMuscularesController = require('../controllers/Grupos_Musculares_controller');

//* Rutas para Grupos Musculares
router.get('/grupos-musculares', GruposMuscularesController.getAll);
router.get('/grupos-musculares/:id', GruposMuscularesController.getById);
router.post('/grupos-musculares', GruposMuscularesController.create);
router.put('/grupos-musculares/:id', GruposMuscularesController.update);
router.delete('/grupos-musculares/:id', GruposMuscularesController.remove);

module.exports = router;
