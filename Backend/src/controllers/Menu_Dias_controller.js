const Menu_Dias = require('../models/Menu_Dias_model');

//* Obtener todos los Menu_Dias
const getAll = async (req, res) => {
  try {
    const menu_dias = await Menu_Dias.findAll();
    res.status(200).json(menu_dias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//* Obtener un Menu_Dia por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Bad Request: id must be a number' });
    }
    const menu_dias = await Menu_Dias.findByPk(id);
    if (menu_dias) {
      res.status(200).json(menu_dias);
    } else {
      res.status(404).json({ message: 'Menu_Dia not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//* Obtener los Menu_Dias de un menu por id de menu
const getByMenuId = async (req, res) => {
  const menuId = parseInt(req.query.menuId);
  try {
    if (isNaN(menuId)) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    const menu_dias = await Menu_Dias.findAll({
      where: {
        menu_id: menuId
      }
    });
    res.status(200).json(menu_dias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAll,
  getById,
  getByMenuId
};