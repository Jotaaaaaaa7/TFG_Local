const Grupos_Musculares = require('../models/Grupos_Musculares_model');
const Musculos_Model = require('../models/Musculos_model');

//* Pectorales, Triceps, Abdomen, Hombros, Espalda, Piernas, Biceps


//* Obtener todos los grupos musculares
const getAll = async (req, res) => {
  try {
    const gruposMusculares = await Grupos_Musculares.findAll();
    res.status(200).json(gruposMusculares);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

//* Obtener un grupo muscular por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      res.status(404).json({ error: 'Muscle group not found' });
    }

    const grupoMuscular = await Grupos_Musculares.findByPk(id);
    if (grupoMuscular) {
      res.status(200).json(grupoMuscular);
    } else {
      res.status(404).json({ error: 'Muscle group not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

//* Crear un grupo muscular, pasándole únicamente el nombre
const create = async (req, res) => {
  const { nombre } = req.body;
  try {
    if (!nombre) {
      res.status(400).json({ error: 'Missing fields' });
    }
    const grupoMuscular = await Grupos_Musculares.create({ nombre });
    res.status(201).json(grupoMuscular);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



//* Actualizar un grupo muscular, pasándole el id y el nuevo nombre
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre } = req.body;
  try {
    if (isNaN(id)) {
      res.status(404).json({ error: 'Muscle group not found' });
    }
    if (!nombre) {
      res.status(400).json({ error: 'Missing fields' });
    }

    const grupoMuscular = await Grupos_Musculares.findByPk(id);
    if (grupoMuscular) {
      grupoMuscular.nombre = nombre;
      await grupoMuscular.save();
      res.status(200).json(grupoMuscular);
    } else {
      res.status(404).json({ error: 'Muscle group not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

//* Eliminar un grupo muscular por id
//* id_grupos_musculares = 0, para los músculos que pertenecían a ese grupo
const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      res.status(404).json({ error: 'Muscle group not found' });
    }
    const grupoMuscular = await Grupos_Musculares.findByPk(id);
    if (grupoMuscular) {
      await Musculos_Model.update({ id_grupo_muscular: null }, { where: { id_grupo_muscular: id } });
      await Grupos_Musculares.destroy({ where: { id } });
      res.status(200).json({ message: 'Muscle group deleted' });
    } else {
      res.status(404).json({ error: 'Muscle group not found' });
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