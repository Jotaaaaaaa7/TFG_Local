const Comidas = require('../models/Comidas_model');
const Comidas_Items_Model = require('../models/Comidas_Items_model');
const Dias_Model = require('../models/Dias_model');
const Dias_Comidas_Model = require('../models/Dias_Comidas_model');
const Recetas_Model = require('../models/Recetas_model');
const Alimentos_Model = require('../models/Alimentos_model');

//* Obtener todas las comidas
const getAll = async (req, res) => {
  try {
    const comidas = await Comidas.findAll();
    res.status(200).json(comidas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

//* Obtener una comida por id
const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Comida not found' });
    }
    const comida = await Comidas.findByPk(id);
    if (comida) {
      res.status(200).json(comida);
    } else {
      res.status(404).json({ error: 'Comida not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


/**
 * * Recibe: nombre, array de recetas (nombre) y array de alimentos (nombre, cantidad)
 * * Si no hay ni recetas ni alimentos, o ambos son arrays vacíos --> error 400
 * * Si las recetas no tienen nombre --> error 400
 * * Si los alimentos no tienen nombre y cantidad --> error 400
 * 
 * * 1º: Sumamos los valores e la receta y creamos los Comidas_Items
 * * 2º: Sumamos los valores de los alimentos, en función de su cantidad y creamos los Comidas_Items
 * * 3º: Guardamos los valores de la comida y devolvemos la comida creada
 */
const create = async (req, res) => {
  const { nombre, tipo, recetas = [], alimentos = [] } = req.body;
  try {
    // Si no hay ni recetas ni alimentos, o ambos son arrays vacíos, error 400
    if ((!recetas || recetas.length === 0) && (!alimentos || alimentos.length === 0)) {
      return res.status(400).json({ error: 'Bad Request: missing fields' });
    }

    if (!nombre) {
      return res.status(400).json({ error: 'Bad Request: missing fields' });
    }

    // Comprobamos que las recetas tengan nombre
    for (let i = 0; i < recetas.length; i++) {
      if (!recetas[i].nombre) {
        return res.status(400).json({ error: 'Bad Request: each recipe must have a name' });
      }
    }

    // Comprobamos que los aliemntos tengan nombre y cantidad
    for (let i = 0; i < alimentos.length; i++) {
      if (!alimentos[i].nombre || !alimentos[i].cantidad) {
        return res.status(400).json({ error: 'Bad Request: each food must have name and quantity' });
      }
    }


    const comida = await Comidas.create({ nombre, tipo });

    let prot = 0;
    let carbs = 0;
    let fat = 0;
    let kcal = 0;
    let precio = 0;
    let isVegan = true;
    let GlutenFree = true;

    // 1
    for (let i = 0; i < recetas.length; i++) {
      const receta = await Recetas_Model.findOne({ where: { nombre: recetas[i].nombre } });
      if (receta) {
        await Comidas_Items_Model.create({ comida_id: comida.id, receta_id: receta.id });
        prot += +receta.prot;
        carbs += +receta.carbs;
        fat += +receta.fat;
        kcal += +receta.kcal;
        precio += +receta.precio;
        
        
        if (!receta.isVegan) {
          isVegan = false;
        }
        if (!receta.GlutenFree) {
          GlutenFree = false;
        }
        
      }
    }
    
    // 2
    for (let i = 0; i < alimentos.length; i++) {
      const alimento = await Alimentos_Model.findOne({ where: { nombre: alimentos[i].nombre } });
      if (alimento) {
        await Comidas_Items_Model.create({ comida_id: comida.id, alimento_id: alimento.id, cantidad_alimento: alimentos[i].cantidad });
        console.log('****3*******' + prot + '***********');
        prot += alimento.prot * alimentos[i].cantidad / 100;
        carbs += alimento.carbs * alimentos[i].cantidad / 100;
        fat += alimento.fat * alimentos[i].cantidad / 100;
        kcal += alimento.kcal * alimentos[i].cantidad / 100;
        precio += alimento.precio * alimentos[i].cantidad / 100;
        console.log('***4********' + prot + '***********');
        
        if (!alimento.isVegan) {
          isVegan = false;
        }
        if (!alimento.GlutenFree) {
          GlutenFree = false;
        }
      }
    }
    
    // 3
    comida.prot = prot;
    comida.carbs = carbs;
    comida.fat = fat;
    comida.kcal = kcal;
    comida.precio = precio;
    comida.isVegan = isVegan;
    comida.GlutenFree = GlutenFree;
    // missing_fields = false, por defecto
    await comida.save();

    res.status(201).json(comida);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};






//* 1º: Se eliminan los Comidas_Items que referencien a la comida
//* 2º: Se calculan los nuevos valores de recetas, y creamos los comida-items
//* 3º: Se calculan los nuevos valores de alimentos, y creamos los comida-items
//* 4º: missing_fields = true en los Dias que contengan la comida
//* 5º: Actualizamos los valores de la comida
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, tipo, recetas = [], alimentos = [] } = req.body;
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Comida not found' });
    }
    if (!nombre) {
      return res.status(400).json({ error: 'Bad Request: missing fields' });
    }
    if ((!recetas || recetas.length === 0) && (!alimentos || alimentos.length === 0)) {
      return res.status(400).json({ error: 'Bad Request: missing fields' });
    }
    // Comprobamos que las recetas tengan nombre
    for (let i = 0; i < recetas.length; i++) {
      if (!recetas[i].nombre) {
        return res.status(400).json({ error: 'Bad Request: each recipe must have a name' });
      }
    }

    // Comprobamos que los aliemntos tengan nombre y cantidad
    for (let i = 0; i < alimentos.length; i++) {
      if (!alimentos[i].nombre || !alimentos[i].cantidad) {
        return res.status(400).json({ error: 'Bad Request: each food must have name and quantity' });
      }
    }

    const comida = await Comidas.findByPk(id);

    if (comida) {
      await comida.update({ nombre, tipo });

      let prot = 0;
      let carbs = 0;
      let fat = 0;
      let kcal = 0;
      let precio = 0;
      let isVegan = true;
      let GlutenFree = true;

      // 1
      const comidaItems = await Comidas_Items_Model.findAll({ where: { comida_id: id } });
      await comidaItems.forEach(async (comidaItem) => {
        await comidaItem.destroy();
      });

      // 2
      for (let i = 0; i < recetas.length; i++) {
        const receta = await Recetas_Model.findOne({ where: { nombre: recetas[i].nombre } });
        if (receta) {
          await Comidas_Items_Model.create({ comida_id: comida.id, receta_id: receta.id });
          prot += +receta.prot;
          carbs += +receta.carbs;
          fat += +receta.fat;
          kcal += +receta.kcal;
          precio += +receta.precio;

          if (!receta.isVegan) {
            comida.isVegan = false;
          }
          if (!receta.GlutenFree) {
            comida.GlutenFree = false;
          }
        }
      }

      // 3
      for (let i = 0; i < alimentos.length; i++) {
        const alimento = await Alimentos_Model.findOne({ where: { nombre: alimentos[i].nombre } });
        if (alimento) {
          await Comidas_Items_Model.create({ comida_id: comida.id, alimento_id: alimento.id, cantidad_alimento: alimentos[i].cantidad });
          prot += +alimento.prot * alimentos[i].cantidad / 100;
          carbs += +alimento.carbs * alimentos[i].cantidad / 100;
          fat += +alimento.fat * alimentos[i].cantidad / 100;
          kcal += +alimento.kcal * alimentos[i].cantidad / 100;
          precio += +alimento.precio * alimentos[i].cantidad / 100;

          if (!alimento.isVegan) {
            comida.isVegan = false;
          }
          if (!alimento.GlutenFree) {
            comida.GlutenFree = false;
          }
        }
      }

      // 4
      const diasComidas = await Dias_Comidas_Model.findAll({ where: { comida_id: id } });
      const diasToUpdate = await Dias_Model.findAll({ where: { id: diasComidas.map(diaComida => diaComida.dia_id) } });
      await diasToUpdate.forEach(async (dia) => {
        await Dias_Model.update({ missing_fields: true }, { where: { id: dia.id } });
      });

      // 5
      comida.prot = prot;
      comida.carbs = carbs;
      comida.fat = fat;
      comida.kcal = kcal;
      comida.precio = precio;
      comida.isVegan = isVegan;
      comida.GlutenFree = GlutenFree;
      comida.missing_fields = false;
      await comida.save();

      res.status(200).json(comida);
    } else {
      res.status(404).json({ error: 'Comida not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



//* 1º:Se eliminan los Comidas_Items que referencien a la comida
//* 2º Se eliminan los Dias_Comidas que referencien a la comida
//* 3º missing_fields = true en los días que contengan la comida
//* 4º Se elimina la comida
const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ error: 'Comida not found' });
    }


    const comida = await Comidas.findByPk(id);
    const comidaItems = await Comidas_Items_Model.findAll({ where: { comida_id: id } });
    const diasComidas = await Dias_Comidas_Model.findAll({ where: { comida_id: id } });
    const diasToUpdate = await Dias_Model.findAll({ where: { id: diasComidas.map(diaComida => diaComida.dia_id) } });

    // 1
    await comidaItems.forEach(async (comidaItem) => {
      await comidaItem.destroy();
    });


    // 2
    await diasComidas.forEach(async (diaComida) => {
      await diaComida.destroy();
    });

    // 3
    await diasToUpdate.forEach(async (dia) => {
      await Dias_Model.update({ missing_fields: true }, { where: { id: dia.id } });
    }
    );

    // 4
    await comida.destroy();
    res.status(200).json({ message: 'Comida deleted' });

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
  remove
}