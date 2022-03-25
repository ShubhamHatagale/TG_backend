const Shulk_Lakshya = require('../models/shulkLakshya.model');
const helper = require('../config/helpers')
var moment = require("moment");
const TZ = moment.tz("Asia/Kolkata").format();

exports.getRecords = async (req, res, next) => {
  try {
    const Data = await Shulk_Lakshya.findAll({
      where: { is_deleted: '0' }
    });
    if (!Data) {
      return res.status(404).json({
        status: 404,
        message: 'could not find result',
      })
    }
    res.status(200).json({
      message: "Result Fetched",
      data: Data,
    })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
    helper.logger.info(error)
  }
}

exports.getRecordsByUserId = async (req, res, next) => {
  try {
    const Data = await Shulk_Lakshya.findAll({
      where: { email_id: req.params.u_id, is_deleted: "0" },
    });
    if (!Data) {
      return res.status(404).json({
        status: 404,
        message: "could not find result",
      });
    }
    res.status(200).json({
      message: "Result Fetched",
      data: Data,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
    helper.logger.info(error);
  }
};

exports.getRecordsById = async (req, res, next) => {
  try {
    const Data = await Shulk_Lakshya.findAll({
      where: { id: req.params.shulkId, is_deleted: '0' }
    });
    if (!Data) {
      return res.status(404).json({
        status: 404,
        message: 'could not find result',
      })
    }
    res.status(200).json({
      message: "Result Fetched",
      data: Data
    })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
    helper.logger.info(error)
  }
}


exports.postRecords = async (req, res, next) => {
  try {
    const Shulk_LakshyaData = await Shulk_Lakshya.create({
      revenue_1: req.body.revenue_1,
      cost_of_goods_sold_1: req.body.cost_of_goods_sold_1,
      gross_profit_1: req.body.gross_profit_1,
      gross_profit_per: req.body.gross_profit_per,

      overhead_expenses_1: req.body.overhead_expenses_1,
      ebidta_1: req.body.ebidta_1,
      interest_1: req.body.interest_1,
      ebdt_1: req.body.ebdt_1,
      depreciation_1: req.body.depreciation_1,
      earning_before_tax_1: req.body.earning_before_tax_1,
      Tax1: req.body.Tax1,

      tax_amount_1: req.body.tax_amount_1,
      profit_after_tax_1: req.body.profit_after_tax_1,
      revenue_2: req.body.revenue_2,
      cost_of_goods_sold_2: req.body.cost_of_goods_sold_2,
      gross_profit_2: req.body.gross_profit_2,
      overhead_expenses_2: req.body.overhead_expenses_2,
      ebidta_2: req.body.ebidta_2,
      interest_2: req.body.interest_2,
      ebdt_2: req.body.ebdt_2,
      depreciation_2: req.body.depreciation_2,
      earning_before_tax_2: req.body.earning_before_tax_2,
      tax_amount_2: req.body.tax_amount_2,
      profit_after_tax_2: req.body.profit_after_tax_2,

      avgDevideBy: req.body.avgDevideBy,
      avg_rate: req.body.avg_rate,


      email_id: req.body.email_id,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
      created_on: (moment().tz(TZ).utcOffset("+05:30").format())
    })
    if (!Shulk_LakshyaData) {
      return res.status(200).json({
        status: 404,
        message: 'No data found'
      })
    }
    res.status(200).json({
      status: 200,
      message: 'Post created successfully!',
    });
  } catch (error) {
    helper.logger.info(error)
    return res.status(500).send({
      message: 'Unable to Post data',
      status: 500
    });
  }
};
exports.updateRecords = async (req, res, next) => {
  try {
    const Shulk_LakshyaData = await Shulk_Lakshya.update({
      revenue_1: req.body.revenue_1,
      cost_of_goods_sold_1: req.body.cost_of_goods_sold_1,
      gross_profit_1: req.body.gross_profit_1,
      gross_profit_per: req.body.gross_profit_per,

      overhead_expenses_1: req.body.overhead_expenses_1,
      ebidta_1: req.body.ebidta_1,
      interest_1: req.body.interest_1,
      ebdt_1: req.body.ebdt_1,
      depreciation_1: req.body.depreciation_1,
      earning_before_tax_1: req.body.earning_before_tax_1,
      Tax1: req.body.Tax1,

      tax_amount_1: req.body.tax_amount_1,
      profit_after_tax_1: req.body.profit_after_tax_1,
      revenue_2: req.body.revenue_2,
      cost_of_goods_sold_2: req.body.cost_of_goods_sold_2,
      gross_profit_2: req.body.gross_profit_2,
      overhead_expenses_2: req.body.overhead_expenses_2,
      ebidta_2: req.body.ebidta_2,
      interest_2: req.body.interest_2,
      ebdt_2: req.body.ebdt_2,
      depreciation_2: req.body.depreciation_2,
      earning_before_tax_2: req.body.earning_before_tax_2,
      tax_amount_2: req.body.tax_amount_2,
      profit_after_tax_2: req.body.profit_after_tax_2,

      avgDevideBy: req.body.avgDevideBy,
      avg_rate: req.body.avg_rate,

      email_id: req.body.email_id,
      updated_by: req.body.updated_by,
      updated_on: (moment().tz(TZ).utcOffset("+05:30").format()),
    },
      { where: { id: req.params.shulkId } });
    if (!Shulk_LakshyaData) {
      return res.status(200).json({
        status: 404,
        message: 'No data found'
      })
    }
    res.status(200).json({
      status: 200,
      message: 'Data Updated Successfully',
    });
  } catch (error) {
    helper.logger.info(error)
    return res.status(500).send({
      message: 'Unable to Update data',
      status: 500
    });
  }
}
exports.updateVerify = async (req, res, next) => {
  try {
    console.log(req.params.verifiedVal)
    const Shulk_LakshyaData = await Shulk_Lakshya.update(
      {
        verified: "1",
      },
      { where: { id: req.params.var_id } }
    );
    if (!Shulk_LakshyaData) {
      return res.status(200).json({
        status: 404,
        message: "No data found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "Data Updated Successfully",
    });
  } catch (error) {
    helper.logger.info(error);
    return res.status(500).send({
      message: "Unable to Update data",
      status: 500,
    });
  }
}



exports.deleteRecords = async (req, res, next) => {

  try {
    const Shulk_LakshyaData = await Shulk_Lakshya.update({
      is_deleted: '1'
    },
      { where: { id: req.params.id } });
    if (!Shulk_LakshyaData) {
      return res.status(200).json({
        status: 404,
        message: 'No data found'
      })
    }
    res.status(200).json({
      status: 200,
      message: 'Record Deleted Successfully',
    });
  } catch (error) {
    helper.logger.info(error)
    return res.status(500).send({
      message: 'Unable to Delete Record',
      status: 500
    });
  }
};