//* Modelo de la tabla Rutinas

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rutinas = sequelize.define('Rutinas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  missing_fields: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}, {
  tableName: 'Rutinas',
  timestamps: false,
});
module.exports = Rutinas;