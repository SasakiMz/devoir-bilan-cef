const {DataTypes} = require('sequelize');
const sequelize = require('../config/db.js');


const Specialty = sequelize.define('Specialty', {
    name: DataTypes.INTEGER
}, {
    tableName: 'specialties',
    timestamps: false
});

Specialty.associate = (models) => {
  Specialty.belongsTo(models.Category, {
    foreignKey: 'category_id'
  });
};

const Category = require('./category');

Specialty.belongsTo(Category, {
  foreignKey: 'category_id'
});

module.exports = Specialty;