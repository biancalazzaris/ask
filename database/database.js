const Sequelize = require('sequelize');
const connection = new Sequelize('pandora', 'root', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;