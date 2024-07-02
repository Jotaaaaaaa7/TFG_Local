const Rutinas = require('../models/Rutinas_model');
const Rutinas_Ejercicios_Model = require('../models/Rutinas_Ejercicios_model');
const Ejercicios_Model = require('../models/Ejercicios_model');
const RutinasSemana_Rutinas_Model = require('../models/RutinasSemana_Rutinas_model');

//* Obtener todas las rutinas
const getAll = async (req, res) => {
  try {
    const rutinas = await Rutinas.findAll();
    console.log(rutinas);
    res.json(rutinas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.toString() });
  }
};

//* Obtener una rutina por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Rutina not found' });
    }
    const rutina = await Rutinas.findByPk(id);
    if (!rutina) {
      return res.status(404).json({ message: 'Rutina not found' });
    }
    res.json(rutina);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

/**
 * * Recibe nombre, descripción y ejercicios en el body
 * * ejercicios ---> [{nombre, series, repeticiones, comentario}, ...]
 * 
 * * 1º Creamos la Rutina
 * * 2º Por cada ejercicio, creamos un Rutinas_Ejercicios
 */
const create = async (req, res) => {
  const { nombre, descripcion, ejercicios } = req.body;
  try {
    // 1
    const rutina = await Rutinas.create({
      nombre,
      descripcion,
    });

    // 2
    for (let ejercicioObj of ejercicios) {
      const { nombre, series = 0, repeticiones = 0, comment = '' } = ejercicioObj;
      const ejercicio = await Ejercicios_Model.findOne({ where: { nombre } });
      if (ejercicio) {
        await Rutinas_Ejercicios_Model.create({
          id_rutina: rutina.id,
          id_ejercicio: ejercicio.id,
          series,
          repeticiones,
          comment
        });
      } else {
        return res.status(400).json({ error: `Exercise ${nombre} not found` });
      }
    }

    rutina.nombre = nombre;
    rutina.descripcion = descripcion;
    await rutina.save();

    res.status(201).json(rutina);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * * 1º: Borramos rutinas_ejercicios asociados a la rutina
 * * 2º: Los creamos otra vez
 * * 3º: Actualizamos los campos de la rutina
 */
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, descripcion, ejercicios } = req.body;
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Rutina not found' });
    }
    const rutina = await Rutinas.findByPk(id);
    // 1
    await Rutinas_Ejercicios_Model.destroy({ where: { id_rutina: id } });
    // 2
    const ejerciciosRutina = await Ejercicios_Model.findAll({ where: { nombre: ejercicios.map(ej => ej.nombre) } });
    for (let ejercicioObj of ejercicios) {
      const ejercicio = ejerciciosRutina.find(e => e.nombre === ejercicioObj.nombre);
      if (ejercicio) {
        const { series = 0, repeticiones = 0, comment = '' } = ejercicioObj;
        console.log('********************************')
        console.log(rutina.id, ejercicio.id, series, repeticiones, comment);
        console.log('********************************')
        await Rutinas_Ejercicios_Model.create({
          id_rutina: rutina.id,
          id_ejercicio: ejercicio.id,
          series,
          repeticiones,
          comment
        });
      } else {
        return res.status(400).json({ error: `Exercise ${ejercicioObj.nombre} not found` });
      }
    }
    // 3
    rutina.nombre = nombre;
    rutina.descripcion = descripcion;
    rutina.missing_fields = false;
    await rutina.save();

    res.status(200).json(rutina);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * * 1º Borramos los Rutinas_Ejercicios asociados
 * * 2º Borramos las rutinasSemana_Ejercicios asociados
 * * 3º Borramos la rutina
 */
const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Rutina not found' });
    }
    const rutina = await Rutinas.findByPk(id);
    const rutinasEjercicios = await Rutinas_Ejercicios_Model.findAll({ where: { id_rutina: id } });
    const rutinasSemanaRutinas = await RutinasSemana_Rutinas_Model.findAll({ where: { id_rutina: id } });

    // 1
    await rutinasEjercicios.forEach(async (rutinaEjercicio) => {
      await rutinaEjercicio.destroy();
    });
    // 2
    await rutinasSemanaRutinas.forEach(async (rutinaSemanaRutina) => {
      await rutinaSemanaRutina.destroy();
    });
    // 3
    await rutina.destroy();
    res.status(200).json({ message: 'Rutina deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}