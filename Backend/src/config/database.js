
//* Conexión a la base de datos MySQL
const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_tfg', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;


