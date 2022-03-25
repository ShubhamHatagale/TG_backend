const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Reflection = sequelize.define('reflection', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    child_hood: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    post_education: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    post_marriage: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    submit_flag: {
        type: Sequelize.ENUM('0', '1'),
        defaultValue: '0',
        allowNull: false
    },
    email_id: {
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



module.exports = Reflection;


