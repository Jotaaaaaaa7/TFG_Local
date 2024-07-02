//* Modelo de la tabla Menu_Semanal

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Menu_Semanal = sequelize.define('Menu_Semanal', {
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
  tableName: 'Menu_Semanal',
  timestamps: false
});

module.exports = Menu_Semanal;