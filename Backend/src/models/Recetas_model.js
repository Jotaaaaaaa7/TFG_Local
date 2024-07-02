//* Modelo de la tabla Recetas

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Recetas = sequelize.define('Recetas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  foto: {
    type: DataTypes.TEXT,
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
  missing_fields: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}, {
  tableName: 'Recetas',
  timestamps: false,
});

module.exports = Recetas;