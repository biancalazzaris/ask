const Sequelize = require('sequelize');
const connection = new Sequelize('pandora', 'root', 'sqlserver', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;