const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Proposition = sequelize.define('valueproposition', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    features: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    possible_combination: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    text_stmt: {
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
module.exports = Proposition;


