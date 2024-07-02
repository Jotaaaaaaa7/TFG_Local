
const express = require('express');
const router = express.Router();

const MenuDiasController = require('../controllers/Menu_Dias_controller');

//* Rutas para Menu Dias
router.get('/menu-dias', MenuDiasController.getAll);
router.get('/menu-dias/menu', MenuDiasController.getByMenuId);
router.get('/menu-dias/:id', MenuDiasController.getById);

module.exports = router;