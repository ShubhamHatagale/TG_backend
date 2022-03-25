const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Naisthya = sequelize.define('busiPlayground', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  basisofplayground: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  defineplayground: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Finalizationtext: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Finalizationddl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
verified: {
    type: Sequelize.ENUM('0', '1'),
    defaultValue: '0',
    allowNull: false
  },
  created_by: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  created_on: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updated_by: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  updated_on: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  is_deleted: {
    type: Sequelize.ENUM('0', '1'),
    defaultValue: '0',
    allowNull: false
  },
}, {
  freezeTableName: true
});
module.exports = Naisthya;


