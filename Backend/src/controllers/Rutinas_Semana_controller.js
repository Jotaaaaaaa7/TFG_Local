const RutinasSemana = require('../models/Rutinas_Semana_model');
const RutinasSemana_Rutinas_Model = require('../models/RutinasSemana_Rutinas_model');
const Rutinas_Model = require('../models/Rutinas_model');

// Get all Rutinas Semana
const getAll = async (req, res) => {
  try {
    const rutinasSemana = await RutinasSemana.findAll();
    res.json(rutinasSemana);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Get Rutinas Semana by ID
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const rutinasSemana = await RutinasSemana.findByPk(id);
    if (rutinasSemana) {
      res.json(rutinasSemana);
    } else {
      res.status(404).json({ message: 'Rutinas Semana not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

/**
 * * Recibe nombre y array de rutinas con nombre.
 * 
 * * 1º: Crear Rutina Semanal
 * * 2º: Crear RutinasSemana_Rutinas
 */
const create = async (req, res) => {
  const { nombre, rutinas } = req.body;
  try {
    if (!nombre) {
      return res.status(400).json({ message: 'Missing fields' });
    }
    // 1
    const rutinasSemana = await RutinasSemana.create({ nombre });
    // 2
    for (let rutina of rutinas) {
      const rutinaObj = await Rutinas_Model.findOne({ where: { nombre: rutina.nombre } });
      if (!rutinaObj) {
        return res.status(400).json({ message: 'Rutina not found' });
      }
      await RutinasSemana_Rutinas_Model.create({ id_rutina: rutinaObj.id, id_rutina_semana: rutinasSemana.id });
    }
    res.status(200).json(rutinasSemana);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * * 1º: Borramos las RutinasSemana_Rutinas asociadas
 * * 2º: Creamos las nuevas
 * * 3º: Actualizamos el nombre de la Rutina Semanal
 */


const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, rutinas } = req.body;
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Rutinas Semana not found' });
    }
    const rutinasSemana = await RutinasSemana.findByPk(id);
    if (!rutinasSemana) {
      return res.status(404).json({ message: 'Rutinas Semana not found' });
    }
    // Borramos las RutinasSemana_Rutinas asociadas
    await RutinasSemana_Rutinas_Model.destroy({ where: { id_rutina_semana: id } });
    // Creamos las nuevas
    for (let rutina of rutinas) {
      const rutinaObj = await Rutinas_Model.findOne({ where: { nombre: rutina.nombre } });
      if (!rutinaObj) {
        return res.status(400).json({ message: 'Rutina not found' });
      }
      await RutinasSemana_Rutinas_Model.create({
        id_rutina: rutinaObj.id,
        id_rutina_semana: rutinasSemana.id
      });
    }
    // Actualizamos el nombre de la Rutina Semanal
    rutinasSemana.nombre = nombre;
    await rutinasSemana.save();
    res.status(200).json(rutinasSemana);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

/**
 * * 1º: Borramos las RutinasSemana_Rutinas asociadas
 * * 2º: Borramos la Rutina Semanal
 */
const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Rutinas Semana not found' });
    }
    const rutinasSemana = await RutinasSemana.findByPk(id);
    if (!rutinasSemana) {
      return res.status(404).json({ message: 'Rutinas Semana not found' });
    }
    // 1
    await RutinasSemana_Rutinas_Model.destroy({ where: { id_rutina_semana: id } });
    // 2
    await rutinasSemana.destroy();
    res.status(200).json({ message: 'Rutina Semana deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}