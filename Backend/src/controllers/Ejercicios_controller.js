const Ejercicios = require('../models/Ejercicios_model');
const Musculos_Model = require('../models/Musculos_model'); 
const Ejercicios_Musculos_Model = require('../models/Ejercicios_Musculos_model');
const Rutinas_Ejercicios_Model = require('../models/Rutinas_Ejercicios_model');
const Rutinas_Model = require('../models/Rutinas_model');

//* Obtener todos los ejercicios
const getAll = async (req, res) => {
  try {
    const exercises = await Ejercicios.findAll();
    res.status(200).json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

//* Obtener un ejercicio por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      res.status(404).json({ error: 'Exercise not found' });
    }

    const exercise = await Ejercicios.findByPk(id);
    if (exercise) {
      res.status(200).json(exercise);
    } else {
      res.status(404).json({ error: 'Exercise not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * * Le pasamos los datos del ejercicio a crear en el body
 * * musculos es un array que solo contiene el nombre de los músculos
 * 
 * * 1º Crear los Ejercicios-musculos asociados al ejercicio
 * * 2º Crear el ejercicio
 */
const create = async (req, res) => {
  const { nombre, descripcion, nivel, video, equipo, musculos } = req.body;
  try {
    if (!nombre || !musculos) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    const ejercicio = await Ejercicios.create({
      nombre,
      descripcion,
      nivel,
      equipo,
      video
      // missing_muscles = false, por defecto
    });

    for (let musculoObj of musculos) {
      const musculo = await Musculos_Model.findOne({ where: { nombre: musculoObj.nombre } });
      if (musculo) {
        await Ejercicios_Musculos_Model.create({ id_ejercicio: ejercicio.id, id_musculo: musculo.id });
      } else {
        return res.status(400).json({ error: `Muscle ${musculoObj.nombre} not found` });
      }
    }

    res.status(201).json(ejercicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


/**
 * * 1º Eliminamos los Ejercicios-musculos anteriormente asociados al ejercicio
 * * 2º Creamos los Ejercicios-musculos asociados al ejercicio
 * * 3º Actualizamos los datos del ejercicio
 */
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, descripcion, nivel, video, equipo, musculos } = req.body;

  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Exercise not found' });
    }
    if (!nombre || !musculos) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const ejercicio = await Ejercicios.findByPk(id);
    if (!ejercicio) {
      return res.status(404).json({ error: 'Exercise not found' });
    }

    // 1
    await Ejercicios_Musculos_Model.destroy({ where: { id_ejercicio: id } });

    // 2
    const musculosEjercicios = await Musculos_Model.findAll({ where: { nombre: musculos.map(m => m.nombre) } });
    for (let musculo of musculosEjercicios) {
      await Ejercicios_Musculos_Model.create({ id_ejercicio: id, id_musculo: musculo.id });
    }

    //3
    ejercicio.nombre = nombre;
    ejercicio.descripcion = descripcion;
    ejercicio.nivel = nivel;
    ejercicio.video = video;
    ejercicio.equipo = equipo;
    ejercicio.missing_muscles = false;

    await ejercicio.save();

    res.status(200).json(ejercicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};





/**
 * * 1º: Borrar ejercicios_musculos que lo referencien
 * * 2º: missing_fields = true en rutinas que lo contengan
 * * 3º: Borrar rutinas_ejericios que lo referencien
 * * 4º: Borrar el ejercicio
 */
const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      res.status(404).json({ error: 'Exercise not found' });
    }
    const exercise = await Ejercicios.findByPk(id);
    if (exercise) {
      // 1 
      await Ejercicios_Musculos_Model.destroy({ where: { id_ejercicio: id } });
      // 2
      const RutinasEjercicios = await Rutinas_Ejercicios_Model.findAll({ where: { id_ejercicio: id } });
      for (let rutinaEjercicio of RutinasEjercicios) {
        await Rutinas_Model.update({ missing_fields: true }, { where: { id: rutinaEjercicio.id_rutina } });
      }
      // 3
      await Rutinas_Ejercicios_Model.destroy({ where: { id_ejercicio: id } });
      // 4
      await exercise.destroy();
      res.status(200).json({ message: 'Exercise deleted' });
    } else {
      res.status(404).json({ error: 'Exercise not found' });
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