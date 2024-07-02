//* Models de la tabla Dias_Comidas, tabla de unión entre Dias y Comidas

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Dias_Comidas = sequelize.define('Dias_Comidas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dia_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Dias',
      key: 'id'
    }
  },
  comida_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Comidas',
      key: 'id'
    }
  }
}, {
  tableName: 'Dias_Comidas',
  timestamps: false
});

module.exports = Dias_Comidas;