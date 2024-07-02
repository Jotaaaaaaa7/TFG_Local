//* Modelo de la tabla Rutinas_Semana

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rutinas_Semana = sequelize.define('Rutinas_Semana', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'Rutinas_Semana',
  timestamps: false,
});

module.exports = Rutinas_Semana;
