const MenuSemanal = require('../models/Menu_Semanal_model');
const Dias_Model = require('../models/Dias_model');
const Menu_Dias_Model = require('../models/Menu_Dias_model');

// * Obtener todos los menús semanales
const getAll = async (req, res) => {
  try {
    const menuSemanal = await MenuSemanal.findAll();
    res.json(menuSemanal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// * Obtener un menú semanal por id
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const menuSemanal = await MenuSemanal.findByPk(id);
    if (menuSemanal) {
      res.json(menuSemanal);
    } else {
      res.status(404).json({ message: 'Menu semanal not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

/**
 * * Le pasamos nombre del menú y u array dias con los nombres de los dias
 * * Si no se indica nombre ó ningún día --> error 400
 * * Si se indica más de 7 días --> error 400
 * 
 * * 1º: creamos el menu semanal
 * * 2º: Creamos los Menu_Dias
 */
const create = async (req, res) => {
  const { nombre, dias } = req.body;  // hay que poner dias, no Dias
  try {
    if (!nombre || !dias) {
      return res.status(400).json({ message: 'Bad Request: missing fields' });
    }
    if (dias.length > 7) {
      return res.status(400).json({ message: 'Bad Request: Máximo 7 días' });
    }

    // 1
    const menuSemanal = await MenuSemanal.create({ nombre });

    // 2
    for (let i = 0; i < dias.length; i++) {
      const dia = await Dias_Model.findOne({ where: { nombre: dias[i].nombre } });
      if (dia) {
        await Menu_Dias_Model.create({ menu_id: menuSemanal.id, dia_id: dia.id });
      } else {
        console.log(`Dia ${dias[i]} not found`);
      }
    }

    res.status(201).json(menuSemanal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * * Igual que el create, pero borrando los menu_Dias y creándolos otra vez
 * * con los nuevos dias
 */
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, dias } = req.body;
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Menu semanal not found' });
    }
    if (!nombre || !dias) {
      return res.status(400).json({ message: 'Bad Request: missing fields' });
    }
    if (dias.length > 7) {
      return res.status(400).json({ message: 'Bad Request: Máximo 7 días' });
    }
  
    const menuSemanal = await MenuSemanal.findByPk(id);

    if (menuSemanal) {
      await menuSemanal.update({ nombre });
      await Menu_Dias_Model.destroy({ where: { menu_id: id } });

      for (let i = 0; i < dias.length; i++) {
        const dia = await Dias_Model.findOne({ where: { nombre: dias[i].nombre } });
        if (dia) {
          await Menu_Dias_Model.create({ menu_id: id, dia_id: dia.id });
        } else {
          console.log(`Dia ${dias[i]} not found`);
        }
      }

      res.status(200).json(menuSemanal);
    } else {
      res.status(404).json({ message: 'Menu semanal not found' });
    }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
}

// * Borramos los Menu_dias asociados y después el menú


const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    if (isNaN(id)) {
      return res.status(404).json({ message: 'Menu semanal not found' });
    }

    const menuSemanal = await MenuSemanal.findByPk(id);
    if (menuSemanal) {
      await Menu_Dias_Model.destroy({ where: { menu_id: id } });
      await menuSemanal.destroy();
      res.status(200).json({ message: 'Menu semanal deleted' });
    } else {
      res.status(404).json({ message: 'Menu semanal not found' });
    }
    
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