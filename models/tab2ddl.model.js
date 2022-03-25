const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const CustomerTab = require('./cmmTab2.model')

const tab2ddl = sequelize.define('cmmt2ddl', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    point_to_be_considered: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cmmtab_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email_id: {
        type: Sequelize.STRING,
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



module.exports = tab2ddl;


