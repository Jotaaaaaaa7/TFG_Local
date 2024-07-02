const Recetas = require('../models/Recetas_model');
const Alimentos_model = require('../models/Alimentos_model');
const Ingredientes_model = require('../models/Ingredientes_model');
const Comidas_Items_model = require('../models/Comidas_Items_model');
const Comidas_model = require('../models/Comidas_model');

//* Obtener todas las recetas
const getAll = async (req, res) => {
  try {
    const recetas = await Recetas.findAll();
    res.status(200).json(recetas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//* Obtener una receta por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Receta not found' });
    }
    const receta = await Recetas.findByPk(id);
    if (!receta) {
      return res.status(404).json({ error: 'Receta not found' });
    }
    res.status(200).json(receta);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};




/**
 * * Al crear un receta le pasamos: nombre, decripcion, foto y un array de ingredientes en el body 
 * * ingredientes: [{nombre, cantidad}, ...]
 * 
 * * 1º Creamos la receta, calculadon sus macros, precio, ...
 * * 2º Creamos los ingredientes asociados a la receta
 * 
 * * missing_fields = false, por defecto
 */
const create = async (req, res) => {
  const { nombre, descripcion, foto, ingredientes } = req.body;  // Hay que poner ingredientes, no Ingredientes

  try {
    // Permito crear recetas sin nombre y ponerlo después, pero no sin ingredientes
    if (!ingredientes) {
      return res.status(400).json({ error: 'Bad Request' });
    }

    let prot = 0;
    let carbs = 0;
    let fat = 0;
    let kcal = 0;
    let precio = 0;
    let isVegan = true;
    let GlutenFree = true;

    // Calcular los macros de la receta
    for (let i = 0; i < ingredientes.length; i++) {
      const ingrediente = ingredientes[i];
      const alimento = await Alimentos_model.findOne({ where: { nombre: ingrediente.nombre } });
      prot += alimento.prot * ingrediente.cantidad / 100;
      carbs += alimento.carbs * ingrediente.cantidad / 100;
      fat += alimento.fat * ingrediente.cantidad / 100;
      kcal += alimento.kcal * ingrediente.cantidad / 100;
      precio += alimento.precio * ingrediente.cantidad / 100;

      if (!alimento.isVegan) {
        isVegan = false;
      }
      if (!alimento.GlutenFree) {
        GlutenFree = false;
      }
    }

    const receta = await Recetas.create({
      nombre,
      descripcion,
      foto,
      prot,
      carbs,
      fat,
      kcal,
      precio,
      isVegan,
      GlutenFree
    });

    // Crear los ingredientes
    for (let i = 0; i < ingredientes.length; i++) {
      const ingrediente = ingredientes[i];
      const alimento = await Alimentos_model.findOne({ where: { nombre: ingrediente.nombre } });
      await Ingredientes_model.create({
        id_alimento: alimento.id,
        id_receta: receta.id,
        cantidad: ingrediente.cantidad,
      });
    }

    res.status(201).json(receta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};





/**
 * * Recibe nombre, descripcion, foto, [{nombre, cantidad}] ---> Ingredientes
 * * 1º Eliminamos todos los ingredientes asociados a la receta
 * * 2º Calculamos los macros, precio, ... de la receta
 * * 3º Creamos los ingredientes asociados a la receta
 * * 4º missing_fields = true en las comidas que contengan esta receta
 * * 5º Actualizamos los campos de la receta
 */
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, descripcion, foto, ingredientes } = req.body;

  try {

    if (isNaN(id)) {
      return res.status(404).json({ error: 'Receta not found' });
    }

    if (!ingredientes ) {
      return res.status(400).json({ error: 'Bad Request' });
    }

    const receta = await Recetas.findByPk(id);
    if (!receta) {
      return res.status(404).json({ error: 'Receta not found' });
    }

    const ingredientesExistentes = await Ingredientes_model.findAll({
      where: {
        id_receta: receta.id
      }
    });
    
    // 1
    for (let i = 0; i < ingredientesExistentes.length; i++) {
      await ingredientesExistentes[i].destroy();
    }

    let prot = 0;
    let carbs = 0;
    let fat = 0;
    let kcal = 0;
    let precio = 0;
    let isVegan = true;
    let GlutenFree = true;

    // 2
    for (let i = 0; i < ingredientes.length; i++) {
      const ingrediente = ingredientes[i];
      const alimento = await Alimentos_model.findOne({ where: { nombre: ingrediente.nombre } });
      prot += alimento.prot * ingrediente.cantidad / 100;
      carbs += alimento.carbs * ingrediente.cantidad / 100;
      fat += alimento.fat * ingrediente.cantidad / 100;
      kcal += alimento.kcal * ingrediente.cantidad / 100;
      precio += alimento.precio * ingrediente.cantidad / 100;

      if (!alimento.isVegan) {
        isVegan = false;
      }
      if (!alimento.GlutenFree) {
        GlutenFree = false;
      }

      // 3
      await Ingredientes_model.create({
        id_alimento: alimento.id,
        id_receta: receta.id,
        cantidad: ingrediente.cantidad,
      });
    }

    // 4
    const comidasItemsReceta = await Comidas_Items_model.findAll({ where: { receta_id: id } } );
    const comidasReceta = await Comidas_model.findAll({ where: { id: comidasItemsReceta.map(item => item.comida_id) } });
    await comidasReceta.forEach(async (comida) => {
      await Comidas_model.update({ missing_fields: true }, { where: { id: comida.id } });
    });


    

    // 5
    receta.nombre = nombre;
    receta.descripcion = descripcion;
    receta.foto = foto;
    receta.prot = prot;
    receta.carbs = carbs;
    receta.fat = fat;
    receta.kcal = kcal;
    receta.precio = precio;
    receta.isVegan = isVegan;
    receta.GlutenFree = GlutenFree;
    receta.missing_fields = false;
    await receta.save();

    res.status(200).json(receta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



/**
 * * 1º Eliminar todos los ingredientes asociados a la receta
 * * 2º Eliminar todos los comida-items asociados a la receta
 * * 3º Establecer missing_fields = true en las comidas que contengan la receta
 * * 4º Eliminar la receta
 */
const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Receta not found' });
    }

    const receta = await Recetas.findByPk(id);
    if (!receta) {
      return res.status(404).json({ error: 'Receta not found' });
    }

    // 1
    const ingredientes = await Ingredientes_model.findAll( { where: { id_receta: id } } );
    for (let ingrediente of ingredientes) {
      await ingrediente.destroy();
    }

    // 2
    const comidasItems = await Comidas_Items_model.findAll( { where: { receta_id: id } } );
    let comidasIds = comidasItems.map(item => item.comida_id);

    for (let comidaItem of comidasItems) {
      await comidaItem.destroy();
    }

    // 3
    for (let comidaId of comidasIds) {
      const comida = await Comidas_model.findByPk(comidaId);
      if (comida) {
        comida.missing_fields = true;
        await comida.save();
      }
    }

    // 4
    await receta.destroy();
    res.status(200).json({ message: 'Receta deleted successfully' });

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};