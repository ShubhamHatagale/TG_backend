const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const parivartan_user = sequelize.define('parivartan_user', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  beliver_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  beliver_company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  beliver_email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  beliver_mobile: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tranz_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tranz_email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tranz_mobile: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bypass_email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bypass_mobile: {
    type: Sequelize.STRING,
    allowNull: false,
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
module.exports = parivartan_user;


