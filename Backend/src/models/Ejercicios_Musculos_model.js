//* Modelo de la tabla Ejercicios_Musculos, tabla de union entre Ejercicios y Musculos

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ejercicios_Musculos = sequelize.define('Ejercicios_Musculos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_ejercicio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Ejercicios',
      key: 'id'
    }
  },
  id_musculo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Musculos',
      key: 'id'
    }
  }
}, {
  tableName: 'Ejercicios_Musculos',
  timestamps: false
});

module.exports = Ejercicios_Musculos;