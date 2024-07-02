//* Modelo de la tabla Menu_Dias, tabla de unión entre Menu_Semanal y Dias

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Menu_Dias = sequelize.define('Menu_Dias', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  menu_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Menu_Semanal',
      key: 'id'
    }
  },
  dia_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Dias',
      key: 'id'
    }
  }
}, {
  tableName: 'Menu_Dias',
  timestamps: false
});

module.exports = Menu_Dias;