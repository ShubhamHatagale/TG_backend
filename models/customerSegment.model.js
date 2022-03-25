const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const customerSegment = sequelize.define('customerSegment', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    org_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    product_service_offering_by: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    customer_face: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    problem_solving: {
        type: Sequelize.STRING,
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
module.exports = customerSegment;


