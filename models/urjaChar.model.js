const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const urjaChar = sequelize.define('urjaChar', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  TotalRevenue1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  TotalRevenue2: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  TotalRevenue3: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  TotalRevenue4: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  TotalRevenue5: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  TotalRevenue6: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // RevenueReadOnly1: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // RevenueReadOnly2: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // RevenueReadOnly3: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // RevenueReadOnly4: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // RevenueReadOnly5: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // RevenueReadOnly6: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  DirectExpences1: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  DirectExpences2: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  DirectExpences3: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  DirectExpences4: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  DirectExpences5: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  DirectExpences6: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // DirectExpencesReadOnly1: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  // DirectExpencesReadOnly2: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  // DirectExpencesReadOnly3: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  // DirectExpencesReadOnly4: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  // DirectExpencesReadOnly5: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  // DirectExpencesReadOnly6: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  GrossProfit1: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  GrossProfit2: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  GrossProfit3: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  GrossProfit4: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  GrossProfit5: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  GrossProfit6: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // GrossProfitID1: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // GrossProfitID2: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // GrossProfitID3: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // GrossProfitID4: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // GrossProfitID5: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // GrossProfitID6: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  IndirectExpences1: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  IndirectExpences2: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  IndirectExpences3: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  IndirectExpences4: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  IndirectExpences5: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  IndirectExpences6: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // IndirectExpencesID1: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // IndirectExpencesID2: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // IndirectExpencesID3: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // IndirectExpencesID4: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // IndirectExpencesID5: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // IndirectExpencesID6: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  EBITDA1: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  EBITDA2: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  EBITDA3: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  EBITDA4: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  EBITDA5: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  EBITDA6: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  EBITDApercent1: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  EBITDApercent2: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  EBITDApercent3: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  EBITDApercent4: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  EBITDApercent5: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  EBITDApercent6: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // EBITDA_ID1: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // EBITDA_ID2: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // EBITDA_ID3: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // EBITDA_ID4: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // EBITDA_ID5: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // EBITDA_ID6: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  email_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
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
module.exports = urjaChar;





