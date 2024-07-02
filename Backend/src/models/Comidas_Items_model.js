//* Models de la tabla Comidas_Items, tabla de unión entre Comidas, Recetas y Alimentos

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comidas_Items = sequelize.define('Comidas_Items', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  comida_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Comidas',
      key: 'id'
    }
  },
  alimento_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Alimentos',
      key: 'id'
    }
  },
  receta_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Recetas',
      key: 'id'
    }
  },
  cantidad_alimento: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'Comidas_Items',
  timestamps: false,
});

module.exports = Comidas_Items;