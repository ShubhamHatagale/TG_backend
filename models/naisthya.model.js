const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Naisthya = sequelize.define('naisthya', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  naisthya_statement: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  time_period: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  believer_group: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  impact_point: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  prayaan_statement: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date_of_lunch: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  list_of_activities: {
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


