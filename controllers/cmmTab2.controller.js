const CMMT2 = require('../models/cmmTab2.model');
const helper = require('../config/helpers')
var moment = require("moment");
const TZ = moment.tz("Asia/Kolkata").format();
var sequelize = require('sequelize');


exports.getRecords = async (req, res, next) => {
  try {
    const Data = await CMMT2.findAll(
      {
        where: { is_deleted: '0' },
        order: sequelize.col('order_by')

      },


    );
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
    const Data = await CMMT2.findAll({
      where: { email_id: req.params.u_id, is_deleted: "0" },
      order: sequelize.col('order_by')

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
    const Data = await CMMT2.findAll({
      where: { email_id: req.params.customerTabId, is_deleted: '0' },
      // order: sequelize.col('order_by')

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
    const CMMT2s = await CMMT2.create({
      features: req.body.features,
      email_id: req.body.email_id,
      created_by: req.body.created_by,
      created_on: (moment().tz(TZ).utcOffset("+05:30").format())
    })

    if (!CMMT2s) {
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
    const CMMT2details = await CMMT2.update({
      features: req.body.features,
      updated_by: req.body.updated_by,
      updated_on: (moment().tz(TZ).utcOffset("+05:30").format()),
    },
      { where: { email_id: req.params.customerTabId } });

    if (!CMMT2details) {
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


exports.updateRecordId = async (req, res, next) => {
  try {
    const CMMT2details = await CMMT2.update({
      order_by: req.body.order_by,
      updated_on: (moment().tz(TZ).utcOffset("+05:30").format()),
    },
      { where: { email_id: req.params.customerTabId } });

    if (!CMMT2details) {
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
    const parivartan_userData = await parivartan_user.update(
      {
        verified: "1",
      },
      { where: { id: req.params.var_id } }
    );
    if (!parivartan_userData) {
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


  const customerTabId = req.params.id;
  try {
    const details = await CMMT2.update({
      is_deleted: '1'
    },
      { where: { id: customerTabId } });
    const details1 = await CMMT3.update({
      is_deleted: '1'
    },
      { where: { cmmid: customerTabId } });

    if (!(details && details1)) {
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