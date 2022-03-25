const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const CustomerTab = require('./tab2ddl.model')
const cmmTab2 = sequelize.define('vilakshanMapTab2', {
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

// cmmTab2.belongsTo(CustomerTab,{foreignKey:'point_to_be_considered'})

module.exports = cmmTab2;


