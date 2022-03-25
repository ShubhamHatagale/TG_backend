const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Validation = sequelize.define('validate', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    question1: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question2: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question3: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question4: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question5: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question6: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question7: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question8: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question9: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question10: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question11: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question12: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question13: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question14: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question15: {
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
module.exports = Validation;


