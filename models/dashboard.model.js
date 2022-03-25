const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Dashboard = sequelize.define('dashboard', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  perspective: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description_of_the_report: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  report_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  area: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  daily: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  weekly: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  monthly: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quaterly: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  half_yearly: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  yearly: {
    type: Sequelize.INTEGER,
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
module.exports = Dashboard;


