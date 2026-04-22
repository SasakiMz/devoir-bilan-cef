const {Sequelize} = require('sequelize');

// Création de l'instance de connexion
const sequelize = new Sequelize('artisans_db','root','root',
     {
        host: 'localhost',
        dialect: 'mysql'
     });

module.exports = sequelize;