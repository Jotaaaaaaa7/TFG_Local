//* Modelo de la tabla Musculos




const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Musculos = sequelize.define('Musculos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  id_grupo_muscular: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Grupos_Musculares',
      key: 'id'
    }
  }
}, {
  tableName: 'Musculos',
  timestamps: false
});

module.exports = Musculos;