//* Models de la tabla Categorias_Alimentos

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categorias_Alimentos = sequelize.define('Categorias_Alimentos', {
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
  tableName: 'Categorias_Alimentos',
  timestamps: false
});

module.exports = Categorias_Alimentos;