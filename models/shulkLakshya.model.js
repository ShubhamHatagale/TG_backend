const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Shulk_Lakshya = sequelize.define('shulk_lakshya', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  revenue_1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  cost_of_goods_sold_1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  gross_profit_1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },

  gross_profit_per: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },



  overhead_expenses_1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  ebidta_1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  interest_1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  ebdt_1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  depreciation_1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  earning_before_tax_1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },


  Tax1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },





  tax_amount_1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  profit_after_tax_1: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  revenue_2: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  cost_of_goods_sold_2: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  gross_profit_2: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  overhead_expenses_2: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  ebidta_2: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  interest_2: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  ebdt_2: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  depreciation_2: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  earning_before_tax_2: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  tax_amount_2: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  profit_after_tax_2: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },






  avgDevideBy: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },

  avg_rate: {
    type: Sequelize.FLOAT,
    allowNull: true,
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
module.exports = Shulk_Lakshya;


