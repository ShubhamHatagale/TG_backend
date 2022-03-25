const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Process = sequelize.define('process', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  sr_no: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  step_decription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  trasaction_time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  resource_allocated: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  resource_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  parent_process_id: {
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


module.exports = Process;