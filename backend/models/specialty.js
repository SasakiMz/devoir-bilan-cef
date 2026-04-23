const {DataTypes} = require('sequelize');
const sequelize = require('../config/db.js');


const Specialty = sequelize.define('Specialty', {
    name: DataTypes.INTEGER
}, {
    tableName: 'specialties',
    timestamps: false
});

module.exports = Specialty;