//* Modelo de la tabla Ejercicios

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ejercicios = sequelize.define('Ejercicios', {
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
    type: DataTypes.TEXT
  },
  nivel: {
    type: DataTypes.STRING(255)
  },
  video : {
    type: DataTypes.TEXT,
  },
  equipo: {
    type: DataTypes.STRING(255),
  },
  missing_muscles: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}, {
  tableName: 'Ejercicios',
  timestamps: false
});

module.exports = Ejercicios;