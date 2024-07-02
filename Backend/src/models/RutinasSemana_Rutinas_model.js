//* Modelo de la tabla RutinasSemana_Rutinas, tabla de unión entre Rutinas y Rutinas_Semana

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RutinasSemana_Rutinas = sequelize.define('RutinasSemana_Rutinas', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_rutina: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
            model: 'Rutinas',
            key: 'id'
        }
    },
    id_rutina_semana: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
            model: 'Rutinas_Semana',
            key: 'id'
        }
    }
}, {
    tableName: 'RutinasSemana_Rutinas',
    timestamps: false
});

module.exports = RutinasSemana_Rutinas;