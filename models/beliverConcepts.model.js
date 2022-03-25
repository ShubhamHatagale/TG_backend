const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const beliverConcepts = sequelize.define('beliverConcepts', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    beliverse_group: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    tribe: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    face_of_tribe: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    primary_customer_beliver: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    face_of_primary_customer_beliver: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email_id: {
        type: Sequelize.TEXT,
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
module.exports = beliverConcepts;


