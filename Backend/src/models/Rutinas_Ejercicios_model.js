//* Modelo de la tabla Rutinas_Ejercicios, tabla de unión entre Rutinas y Ejercicios

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rutinas_Ejercicios = sequelize.define('Rutinas_Ejercicios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_rutina: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Rutinas',
      key: 'id'
    }
  },
  id_ejercicio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Ejercicios',
      key: 'id'
    }
  },
  series: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  repeticiones: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    defaultValue: null
  }
}, {
  tableName: 'Rutinas_Ejercicios',
  timestamps: false
});

module.exports = Rutinas_Ejercicios;

