const Ejercicios_Musculos = require('../models/Ejercicios_Musculos_model');

//* Obtener todas las relaciones ejercicio-musculo
const getAll = async (req, res) => {
  try {
    const ejerciciosMusculos = await Ejercicios_Musculos.findAll();
    res.status(200).json(ejerciciosMusculos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

//* Obtener una relación ejercicio-musculo por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      res.status(404).json({ error: 'Exercise-muscle relation not found' });
    }

    const ejercicioMusculo = await Ejercicios_Musculos.findByPk(id);
    if (ejercicioMusculo) {
      res.status(200).json(ejercicioMusculo);
    } else {
      res.status(404).json({ error: 'Exercise-muscle relation not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

//* Obtener los músculos de un ejercicio por id de ejercicio
const getByExerciseId = async (req, res) => {
  const ejercicioId = parseInt(req.query.ejercicioId);
  try {
    if (isNaN(ejercicioId)) {
      return res.status(404).json({ error: 'Exercise not found' });
    }

    const ejerciciosMusculos = await Ejercicios_Musculos.findAll({
      where: {
        id_ejercicio: ejercicioId
      }
    });
    res.status(200).json(ejerciciosMusculos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {
  getAll,
  getById,
  getByExerciseId
}