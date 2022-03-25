const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const CMMT3 = sequelize.define('cmmt3', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    brief_building_blocks: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ownership: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    start_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    expected_closure_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    weeks: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    days: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cmmid: {
        type: Sequelize.INTEGER,
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



module.exports = CMMT3;


