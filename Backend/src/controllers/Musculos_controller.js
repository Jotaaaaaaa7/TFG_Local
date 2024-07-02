const Musculos = require('../models/Musculos_model');
const Grupos_Musculares_Model = require('../models/Grupos_Musculares_model');
const Ejercicios_Musculos_Model = require('../models/Ejercicios_Musculos_model');
const Ejercicios_Model = require('../models/Ejercicios_model');

//* Obtener todos los músculos
const getAll = async (req, res) => {
  try {
    const musculos = await Musculos.findAll();
    res.status(200).json(musculos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

//* Obtener un músculo por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      res.status(404).json({ error: 'Muscle not found' });
    }

    const musculo = await Musculos.findByPk(id);
    if (musculo) {
      res.status(200).json(musculo);
    } else {
      res.status(404).json({ error: 'Muscle not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

//* Crear un músculo, pasándole el nombre y el grupo muscular al que pertenece
//* buscamos el grupo y guardamos su id en "id_grupo_muscular" del músculo


const create = async (req, res) => {
  const { nombre, grupo } = req.body;
  try {
    if (!nombre || !grupo) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    // Buscar el grupo muscular por nombre
    const grupoMuscular = await Grupos_Musculares_Model.findOne({ where: { nombre: grupo } });
    if (!grupoMuscular) {
      return res.status(400).json({ error: 'Grupo muscular no encontrado' });
    }
    // Crear el músculo con el id_grupo_muscular encontrado
    const musculo = await Musculos.create({ nombre, id_grupo_muscular: grupoMuscular.id });
    res.status(201).json(musculo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * * Al cambiar el nombre a un músculo, se actualiza el nombre
 * * y el grupo muscular al que pertenece
 */
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, grupo } = req.body;
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Muscle not found' });
    }
    if (!nombre || !grupo) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    const musculo = await Musculos.findByPk(id);
    if (musculo) {
      const grupoMuscular = await Grupos_Musculares_Model.findOne({ where: { nombre: grupo } });
      if (!grupoMuscular) {
        return res.status(400).json({ error: 'Grupo muscular no encontrado' });
      }
      musculo.nombre = nombre;
      musculo.id_grupo_muscular = grupoMuscular.id;
      await musculo.save();
      res.status(200).json(musculo);
    } else {
      res.status(404).json({ error: 'Muscle not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * * 1º: Eliminamos los ejercicios-musculos que lo referencien
 * * 2º: missing_muscles = true en ejercicios que lo contengan
 * * 3º: Eliminamos el músculo
 */
const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      res.status(404).json({ error: 'Muscle not found' });
    }
    const musculo = await Musculos.findByPk(id);
    if (musculo) {
      // 1
      await Ejercicios_Musculos_Model.destroy({ where: { id_musculo: id } });
      // 2
      await Ejercicios_Model.update({ missing_muscles: true }, { where: { missing_muscles: false } });
      // 3
      await musculo.destroy();
      res.status(200).json({ message: 'Muscle deleted' });
    } else {
      res.status(404).json({ error: 'Muscle not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}