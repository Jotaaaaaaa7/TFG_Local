//* Modelo de la tabla Comidas

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comidas = sequelize.define('Comidas', {
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
  tipo: {
    type: DataTypes.STRING(255),
  },
  isVegan: {
    type: DataTypes.BOOLEAN
  },
  GlutenFree: {
    type: DataTypes.BOOLEAN
  },
  missing_fields: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}, {
  tableName: 'Comidas',
  timestamps: false,
});

module.exports = Comidas;