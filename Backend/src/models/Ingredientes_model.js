//* Modelo de la tabla Ingredientes, tabla de unión entre Recetas y Alimentos

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ingredientes_model = sequelize.define('Ingredientes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_alimento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Alimentos',
      key: 'id'
    }
  },
  id_receta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Recetas',
      key: 'id'
    }
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
}, {
  tableName: 'Ingredientes',
  timestamps: false
});


module.exports = Ingredientes_model;

