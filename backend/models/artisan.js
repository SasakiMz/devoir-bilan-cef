const {DataTypes} = require('sequelize');
const sequelize = require('../config/db.js');

const Artisan = sequelize.define('Artisan', {
    name:           DataTypes.STRING,
    specialty_id:   DataTypes.INTEGER,
    location:           DataTypes.STRING,
    rating:           DataTypes.FLOAT,
    email:           DataTypes.STRING,
    website:           DataTypes.STRING,
    top:           DataTypes.BOOLEAN,
}, {
    tableName: 'artisans',
    timestamps : false
});


Artisan.associate = (models) => {
  Artisan.belongsTo(models.Specialty, {
    foreignKey: 'specialty_id'
  });
};

const Specialty = require('./specialty');

Artisan.belongsTo(Specialty, {
  foreignKey: 'specialty_id'
});

module.exports = Artisan;