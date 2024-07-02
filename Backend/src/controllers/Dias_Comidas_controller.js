
const { get } = require('http');
const Dias_Comidas = require('../models/Dias_Comidas_model');

// * Obtener todos los Dias_Comidas
const getAll = async (req, res) => {
  try {
    const diasComidas = await Dias_Comidas.findAll();
    res.json(diasComidas);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// * Obtener un Dias_Comidas por id

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const diasComidas = await Dias_Comidas.findByPk(id);
    if (diasComidas) {
      res.status(200).json(diasComidas);
    } else {
      res.status(404).json({ error: 'Dias_Comidas not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// * Obtener los Dias_Comidas de un día por id de día
const getByDiaId = async (req, res) => {
  const diaId = parseInt(req.query.diaId); 
  try {
    if (isNaN(diaId)) {
      return res.status(404).json({ error: 'Dia not found' });
    }

    const diasComidas = await Dias_Comidas.findAll({
      where: {
        dia_id: diaId
      }
    });
    res.status(200).json(diasComidas);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}



module.exports = {
  getAll,
  getById,
  getByDiaId
};