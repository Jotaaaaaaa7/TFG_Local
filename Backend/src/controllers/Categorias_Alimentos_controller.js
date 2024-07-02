

const Categorias_Alimentos = require('../models/Categorias_Alimentos_model');
const Alimentos_Model = require('../models/Alimentos_model');

//* Obtener todas las categorías de alimentos
const getAll = async (req, res) => {
  try {
    const categorias_alimentos = await Categorias_Alimentos.findAll();
    res.status(200).json(categorias_alimentos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//* Obtener una categoría de alimentos por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Categoria_Alimento not found' });
    }
    const categoria_alimento = await Categorias_Alimentos.findByPk(id);
    if (categoria_alimento) {
      res.status(200).json(categoria_alimento);
    } else {
      res.status(404).json({ error: 'Categoria_Alimento not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//* Crear una categoría de alimentos
const create = async (req, res) => {
  const { nombre } = req.body;
  try {
  if (!nombre) {
    return res.status(400).json({ message: 'Bad Request: missing field nombre' });
  }
    const categoria_alimento = await Categorias_Alimentos.create({ nombre });
    res.status(201).json(categoria_alimento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//* Actualizar una categoría de alimentos
// Al cambiar el nombre de una categoría, el cambio se refleja en el frontend
// Ya que los alimentos se relacionan con las categorías por el id de las mismas.
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre } = req.body;
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Categoria_Alimento not found' });
    }
    if (!nombre) {
      return res.status(400).json({ message: 'Bad Request: missing field nombre' });
    }
    const categoria_alimento = await Categorias_Alimentos.findByPk(id);
    if (categoria_alimento) {
      await categoria_alimento.update({ nombre });
      res.status(200).json(categoria_alimento);
    } else {
      res.status(404).json({ error: 'Categoria_Alimento not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//* Eliminar una categoría de alimentos
// Se establece como null el campo "categoria_id" de los alimentos
// Que se correspondían con la categoría eliminada.
const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Categoria_Alimento not found' });
    }
    const categoria_alimento = await Categorias_Alimentos.findByPk(id);
    if (categoria_alimento) {
      await Alimentos_Model.update({ categoria_id: null }, { where: { categoria_id: id } });

      await categoria_alimento.destroy();
      res.status(200).json({ message: 'Categoría eliminada con éxito' });
    } else {
      res.status(404).json({ error: 'Categoría no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}