const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Rebirth = sequelize.define('rebirth', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Search: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    Manan: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Sadhana: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Spiritual: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    submit_flag: {
        type: Sequelize.ENUM('0', '1'),
        defaultValue: '0',
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



module.exports = Rebirth;


