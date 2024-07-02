const Comidas_Items = require('../models/Comidas_Items_model');

//* Obtener todos los Comidas_Items
const getAll = async (req, res) => {
  try {
    const comidasItems = await Comidas_Items.findAll();
    res.json(comidasItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

//* Obtener un Comida_Item por id
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const comidasItems = await Comidas_Items.findByPk(id);
    if (comidasItems) {
      res.status(200).json(comidasItems);
    } else {
      res.status(404).json({ error: 'Comidas_Items not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

//* Obtener los Comidas_Items de una comida por id de comida
const getByComidaId = async (req, res) => {
  const comidaId = parseInt(req.query.comidaId);
  try {
    if (isNaN(comidaId)) {
      return res.status(404).json({ error: 'Comida not found' });
    }
    const comidasItems = await Comidas_Items.findAll({
      where: {
        comida_id: comidaId
      }
    });
      res.status(200).json(comidasItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAll,
  getById,
  getByComidaId
}