const RutinasSemana_Rutinas = require('../models/RutinasSemana_Rutinas_model');

//* Obtener todas las rutinas
const getAll = async (req, res) => {
  try {
    const rutinasSemanaRutinas = await RutinasSemana_Rutinas.findAll();
    res.send(rutinasSemanaRutinas);
  } catch (error) {
    res.status(500).send(error);
  }
};

//* Obtener una rutina por id
const getById = async (req, res) => {
  try {
    const rutinaSemanaRutina = await RutinasSemana_Rutinas.findByPk(req.params.id);
    if (rutinaSemanaRutina) {
      res.send(rutinaSemanaRutina);
    } else {
      res.status(404).send({ message: 'No se encontró la relación con id ' + req.params.id });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};


//* Obtener las RutinasSemana_Rutinas por el id de una rutina semanal
const getByRutinaSemanaId = async (req, res) => {
  const rutinaSemanaId = parseInt(req.query.rutinaSemanaId);
  try {
    if (isNaN(rutinaSemanaId)) {
      return res.status(404).json({ message: 'Rutina Semanal not found' });
    }
    
    const rutinas = await RutinasSemana_Rutinas.findAll({
      where: {
        id_rutina_semana: rutinaSemanaId
      }
    });
    res.status(200).json(rutinas);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}



module.exports = {
  getAll,
  getById,
  getByRutinaSemanaId
};