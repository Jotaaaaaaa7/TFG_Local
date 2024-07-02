// /my-api/src/controllers/Alimentos_controller.js
const Alimentos = require('../models/Alimentos_model');
const Comidas_Items_Model = require('../models/Comidas_Items_model');
const Comidas_Model = require('../models/Comidas_model');
const Recetas_Model = require('../models/Recetas_model');
const Ingredientes_Model = require('../models/Ingredientes_model');
const Categorias_Alimentos_Model = require('../models/Categorias_Alimentos_model');

//* Obtener todos los alimentos
const getAll = async (req, res) => {
  try {
    const alimentos = await Alimentos.findAll();
    res.status(200).json(alimentos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//* Obtener un alimento por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Alimento not found' });
    }
    const alimento = await Alimentos.findByPk(id);
    if (alimento) {
      res.status(200).json(alimento);
    } else {
      res.status(404).json({ message: 'Alimento not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


/**
 * * Al crear un alimento le pasamos todos los datos en el body
 * * Si indicamos una categoria inexistente o no la indicamos, 'categoria_id' se establece a null
 * * Si no indicamos unidad, 'unidad' se establece a null
 */
const create = async (req, res) => {
  const { nombre, prot, carbs, fat, kcal, precio, isVegan, GlutenFree } = req.body;
  let { unidad, categoria } = req.body;
  try {
    if (
      nombre === undefined || nombre === null || nombre === '' ||
      prot === undefined || prot === null ||
      carbs === undefined || carbs === null ||
      fat === undefined || fat === null ||
      kcal === undefined || kcal === null ||
      precio === undefined || precio === null ||
      isVegan === undefined ||
      GlutenFree === undefined
    ) {
      return res.status(400).json({ message: 'Bad Request: missing fields' });
    }
    let categoria_id = null;
    if (categoria !== undefined) {
      const categoria_alimento = await Categorias_Alimentos_Model.findOne({ where: { nombre: categoria } });
      if (categoria_alimento) {
        categoria_id = categoria_alimento.id;
      }
    }

    unidad = unidad ? unidad : null;

    const alimento = await Alimentos.create({
      nombre,
      prot,
      carbs,
      fat,
      kcal,
      precio,
      isVegan,
      GlutenFree,
      unidad,
      categoria_id,
    });
    res.status(201).json(alimento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * * Le pasamos el id del alimento a modificar en los params
 * * Le pasamos los datos del alimento a modificar en el body
 * * Si la categoria no existe, 'categoria_id' se establece a null
 * * Si no indicamos unidad, 'unidad' se establece a null
 * 
 * * missing_fields = true en recetas y comidas que lo contengan
 */
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, prot, carbs, fat, kcal, precio, isVegan, GlutenFree } = req.body;
  let { unidad, categoria } = req.body;
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Alimento not found' });
    }
    if (
      nombre === undefined || nombre === null || nombre === '' ||
      prot === undefined || prot === null ||
      carbs === undefined || carbs === null ||
      fat === undefined || fat === null ||
      kcal === undefined || kcal === null ||
      precio === undefined || precio === null ||
      isVegan === undefined ||
      GlutenFree === undefined
    ) {
      return res.status(400).json({ message: 'Bad Request: missing fields' });
    }

    const alimento = await Alimentos.findByPk(id);
    if (alimento) {
      if (categoria === undefined) {
        categoria = null;
      } else {
        const categoria_alimento = await Categorias_Alimentos_Model.findOne({ where: { nombre: categoria } });
        categoria = categoria_alimento ? categoria_alimento.id : null;
      }

      unidad = unidad ? unidad : null;

      alimento.nombre = nombre;
      alimento.prot = prot;
      alimento.carbs = carbs;
      alimento.fat = fat;
      alimento.kcal = kcal;
      alimento.precio = precio;
      alimento.isVegan = isVegan;
      alimento.GlutenFree = GlutenFree;
      alimento.unidad = unidad;
      alimento.categoria_id = categoria;
      await alimento.save();

      // Missing_fileds = true en recetas y comidas que contengan el alimento
      const ingredientes = await Ingredientes_Model.findAll({ where: { id_alimento: id } });
      const comidasItems = await Comidas_Items_Model.findAll({ where: { alimento_id: id } });
      const recetasToUpdate = await Recetas_Model.findAll({ where: { id: ingredientes.map(ingrediente => ingrediente.id_receta) } });
      const comidasToUpdate = await Comidas_Model.findAll({ where: { id: comidasItems.map(comidaItem => comidaItem.comida_id) } });

      await recetasToUpdate.forEach(async (receta) => {
        await Recetas_Model.update({ missing_fields: true }, { where: { id: receta.id } });
      });
      await comidasToUpdate.forEach(async (comida) => {
        await Comidas_Model.update({ missing_fields: true }, { where: { id: comida.id } });
      });

      res.status(200).json(alimento);
    } else {
      res.status(404).json({ message: 'Alimento not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * * Al borrar un alimento:
  * * 1. Borrar las comidas_items que referencien ese alimento
  * * 2. Borrar los ingredientes que referencien ese alimento
  * * 3. missing_fields = true en las comidas que contengan ese alimento
  * * 4. missing_fields = true en las recetas que contengan ese alimento
  * * 5. Borrar el alimento 
  * 
  * TODO: Borrar las Comida_items e ingredientes asociados al alimento
  * TODO: Las comidas y recetas asociadas, ---> missing_fields = true ---> Indicar en el frontend
 */
const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Alimento not found' });
    }

    const alimento = await Alimentos.findByPk(id);

    const ingredientes = await Ingredientes_Model.findAll({ where: { id_alimento: id } });
    const recetasToUpdate = await Recetas_Model.findAll({ where: { id: ingredientes.map(ingrediente => ingrediente.id_receta) } });

    const comidasItems = await Comidas_Items_Model.findAll({ where: { alimento_id: id } });
    const comidasToUpdate = await Comidas_Model.findAll({ where: { id: comidasItems.map(comidaItem => comidaItem.comida_id) } });

    // 1
    await comidasItems.forEach(async (comidaItem) => {
      await comidaItem.destroy();
    });

    // 2
    await ingredientes.forEach(async (ingrediente) => {
      await ingrediente.destroy();
    });

    // 3
    await comidasToUpdate.forEach(async (comida) => {
      await Comidas_Model.update({ missing_fields: true }, { where: { id: comida.id } });
    });

    // 4
    await recetasToUpdate.forEach(async (receta) => {
      await Recetas_Model.update({ missing_fields: true }, { where: { id: receta.id } });
    });

    // 5
    await alimento.destroy();

    res.status(200).json({ message: 'Alimento deleted' });

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
};