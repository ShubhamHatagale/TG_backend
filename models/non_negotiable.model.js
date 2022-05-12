const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const non_negotiable = sequelize.define('non_negotiable', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  gross_margin: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  opportunity_size: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  unit_pricing: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  unit_margin: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  time_to_breakeven: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  fixed_cost_investment: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  credit_terms: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  npv: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  end_prod_quality: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  supplier_quality_standard: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  customer_service: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  channels: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lead_time: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  // fixed_cost_investment2: {
  //   type: Sequelize.STRING,
  //   allowNull: true,
  // },
  through_put: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  pricing: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  prod_dev_life_cycle: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  brand_parameter: {
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
    type: Sequelize.STRING,
    allowNull: false,
  },
  created_on: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updated_by: {
    type: Sequelize.STRING,
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
module.exports = non_negotiable;


