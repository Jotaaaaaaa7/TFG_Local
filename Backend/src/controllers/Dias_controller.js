const Dias = require('../models/Dias_model');
const Comidas_model = require('../models/Comidas_model');
const Dias_Comidas_Model = require('../models/Dias_Comidas_model');
const Menu_Dias_Model = require('../models/Menu_Dias_model');

//* Obtener todos los días
const getAll = async (req, res) => {
  try {
    const dias = await Dias.findAll();
    res.status(200).json(dias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// *Obtener un día por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Dia not found' });
    }
    const dia = await Dias.findByPk(id);
    if (dia) {
      res.status(200).json(dia);
    } else {
      res.status(404).json({ error: 'Dia not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * * Es obligatorio un nombre para el día y un array de comidas,
 * * si no se indica ninguna comida, o alguna sin nombre --> error 400
 * 
 * * 1º Calculamos los valores nutricionales del día
 * * 2º Creamos los Dias_Comidas
 * * 3º Guardamos el día con los valores nutricionales calculados
 */
const create = async (req, res) => {
  const { nombre, comidas } = req.body;
  try {
    if (!nombre || !comidas) {
      return res.status(400).json({ error: 'Bad Request: missing fields' });
    }
    for (let i = 0; i < comidas.length; i++) {
      if (!comidas[i].nombre) {
        return res.status(400).json({ error: 'Bad Request: missing fields' });
      }
    }


    let totalProt = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    let totalKcal = 0;
    let totalPrecio = 0;
    let isVegan = true;
    let GlutenFree = true;

    const dia = await Dias.create({ nombre });

    // 1
    for (let i = 0; i < comidas.length; i++) {
      const comidaModel = await Comidas_model.findOne({ where: { nombre: comidas[i].nombre } });
      totalProt += +comidaModel.prot;
      totalCarbs += +comidaModel.carbs;
      totalFat += +comidaModel.fat;
      totalKcal += +comidaModel.kcal;
      totalPrecio += +comidaModel.precio;

      if (!comidaModel.isVegan) {
        isVegan = false;
      }
      if (!comidaModel.GlutenFree) {
        GlutenFree = false;
      }
      // 2
      await Dias_Comidas_Model.create({ dia_id: dia.id, comida_id: comidaModel.id });
    }



    await dia.update({
      prot: totalProt,
      carbs: totalCarbs,
      fat: totalFat,
      kcal: totalKcal,
      precio: totalPrecio,
      isVegan,
      GlutenFree
      // missing_fields = false, por defecto
    });

    res.status(201).json(dia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



/**
 * * Es obligatorio un nombre para el día y un array de comidas,
 * * si no se indica ninguna comida, o alguna sin nombre --> error 400
 * 
 * * 1º Eliminados los Dias_Comidas asociados al día
 * * 2º Volvemos a calcular los valores nutricionales del día
 * * 3º Creamos los Dias_Comidas
 * * 4º Guardamos el día con los valores nutricionales calculados
 */
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, comidas } = req.body;
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Dia not found' });
    }
    if (!nombre || !comidas) {
      return res.status(400).json({ error: 'Bad Request: missing fields' });
    }
    for (let i = 0; i < comidas.length; i++) {
      if (!comidas[i].nombre) {
        return res.status(400).json({ error: 'Bad Request: missing fields' });
      }
    }
    
    const dia = await Dias.findByPk(id);

    if (dia) {
      await dia.update({ nombre });

      // 1
      await Dias_Comidas_Model.destroy({ where: { dia_id: id } });

      let totalProt = 0;
      let totalCarbs = 0;
      let totalFat = 0;
      let totalKcal = 0;
      let totalPrecio = 0;
      let isVegan = true;
      let GlutenFree = true;

      // 2
      for (let i = 0; i < comidas.length; i++) {
        const comida = await Comidas_model.findOne({ where: { nombre: comidas[i].nombre } });
        totalProt += +comida.prot;
        totalCarbs += +comida.carbs;
        totalFat += +comida.fat;
        totalKcal += +comida.kcal;
        totalPrecio += +comida.precio;

        if (!comida.isVegan) {
          isVegan = false;
        }
        if (!comida.GlutenFree) {
          GlutenFree = false;
        }

        // 3
        await Dias_Comidas_Model.create({ dia_id: dia.id, comida_id: comida.id });
      }

      // 4
      await dia.update({
        prot: totalProt,
        carbs: totalCarbs,
        fat: totalFat,
        kcal: totalKcal,
        precio: totalPrecio,
        isVegan,
        GlutenFree
      });

      res.status(200).json(dia);

    } else {
      res.status(404).json({ error: 'Dia not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}


/**
 * * 1º: Eliminamos los Dias_Comidas asociados al día
 * * 2º: Eliminamos los Menu_Dias asociados al día
 * * 3º: Eliminamos el día
 */
const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Dia not found' });
    }
    const dia = await Dias.findByPk(id);

    // 1
    await Dias_Comidas_Model.destroy({ where: { dia_id: id } });

    // 2
    await Menu_Dias_Model.destroy({ where: { dia_id: id } });

    // 3
    await dia.destroy();

    res.status(200).json({ message: 'Dia deleted' });

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