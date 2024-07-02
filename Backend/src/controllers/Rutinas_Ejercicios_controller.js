const Rutinas_Ejercicios = require('../models/Rutinas_Ejercicios_model');

//* Obtener todas las relaciones rutina-ejercicio
const getAll = async (req, res) => {
  try {
    const rutinasEjercicios = await Rutinas_Ejercicios.findAll();
    res.json(rutinasEjercicios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


//* Obtener una relación rutina-ejercicio por id
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const rutinasEjercicios = await Rutinas_Ejercicios.findByPk(id);
    if (rutinasEjercicios) {
      res.json(rutinasEjercicios);
    } else {
      res.status(404).json({ message: 'Rutinas_Ejercicios not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

//* Obtener los ejercicios de una rutina por id de rutina
const getByRutinaId = async (req, res) => {
  const rutinaId = parseInt(req.query.rutinaId);
  try {
    if (isNaN(rutinaId)) {
      return res.status(404).json({ message: 'Rutina not found' });
    }

    const rutinasEjercicios = await Rutinas_Ejercicios.findAll({
      where: {
        id_rutina: rutinaId
      }
    });
    res.status(200).json(rutinasEjercicios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}



module.exports = {
  getAll,
  getById,
  getByRutinaId
}