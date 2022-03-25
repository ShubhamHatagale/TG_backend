const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const CMMT1 = sequelize.define('cmmt1', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    question_mind_journy: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question_mind_of: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    who_give_answer: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    possible_answer: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    choice_made: {
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



module.exports = CMMT1;


