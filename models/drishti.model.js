const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Drishti = sequelize.define('drishti', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  drishti_parameter: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  year_1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  year_2: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  year_3: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  year_4: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  year_5: {
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
module.exports = Drishti;

