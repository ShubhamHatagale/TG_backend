const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const CustomerTab = require('./tab2ddl.model')
const cmmTab2 = sequelize.define('goal_drillerRaw', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    business_unit: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    insteelObjective: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    FY: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    goalDescription: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    division: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    exptMngmt: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    Weightages: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    fy_target: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    fy_actuals: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    achievement_till_date: {
        type: Sequelize.STRING,
        allowNull: true,
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


