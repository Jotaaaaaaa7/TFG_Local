const Ingredientes = require('../models/Ingredientes_model');

// * Obtener todos los ingredientes
const getAll = async (req, res) => {
  try {
    const Ingredientes = await Ingredientes.findAll();
    res.json(Ingredientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


//* Obtener un ingrediente por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Ingrediente not found' });
    }
    const ingrediente = await Ingredientes.findByPk(id);
    if (!ingrediente) {
      return res.status(404).json({ message: 'Ingrediente not found' });
    }
    res.json(ingrediente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

//* Obtener los ingredientes de una receta por id de receta
const getByRecipeId = async (req, res) => {
  const recetaId = parseInt(req.query.recetaId);
  try {
    if (isNaN(recetaId)) {
      return res.status(404).json({ message: 'Receta not found' });
    }
    const ingredientes = await Ingredientes.findAll({
      where: {
        id_receta: recetaId
      }
    });
    res.status(200).json(ingredientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {
  getAll,
  getById,
  getByRecipeId
}