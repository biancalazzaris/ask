const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define('resposta', {

    answerDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Resposta.sync({ force: false }).then(() => {});
module.exports = Resposta;