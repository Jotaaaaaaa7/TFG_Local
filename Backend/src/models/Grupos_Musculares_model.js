//* Modelo de la tabla Grupos_Musculares

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Grupos_Musculares = sequelize.define('Grupos_Musculares', {
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
  tableName: 'Grupos_Musculares',
  timestamps: false
});

module.exports = Grupos_Musculares;

