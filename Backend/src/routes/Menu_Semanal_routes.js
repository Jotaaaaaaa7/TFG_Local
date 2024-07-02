
const express = require('express');
const router = express.Router();

const MenuSemanalController = require('../controllers/Menu_Semanal_controller');

//* Rutas para Menús Semanales
router.get('/menu', MenuSemanalController.getAll);
router.get('/menu/:id', MenuSemanalController.getById);
router.post('/menu', MenuSemanalController.create);
router.put('/menu/:id', MenuSemanalController.update);
router.delete('/menu/:id', MenuSemanalController.remove);

module.exports = router;
