//* Modelo de la tabla Alimentos

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Alimentos = sequelize.define('Alimentos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  prot: {
    type: DataTypes.DECIMAL(10, 2)
  },
  carbs: {
    type: DataTypes.DECIMAL(10, 2)
  },
  fat: {
    type: DataTypes.DECIMAL(10, 2)
  },
  kcal: {
    type: DataTypes.DECIMAL(10, 2)
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2)
  },
  isVegan: {
    type: DataTypes.BOOLEAN
  },
  GlutenFree: {
    type: DataTypes.BOOLEAN
  },
  unidad: {
    type: DataTypes.INTEGER,
    defaultValue: null
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Categorias_Alimentos',
      key: 'id'
    }
  }
}, {
  tableName: 'Alimentos',
  timestamps: false
});

module.exports = Alimentos;

// This file is intentionally left blank.