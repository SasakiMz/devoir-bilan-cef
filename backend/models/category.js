const {DataTypes} = require('sequelize');
const sequelize = require('../config/db.js');

const Category = sequelize.define('Category', {
    name: DataTypes.STRING
}, {
    tableName: 'categories',
    timestamps: false
});

module.exports = Category;