// src/models.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Person = sequelize.define('Person', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

sequelize.sync();

module.exports = {
  Person
};
