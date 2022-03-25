const Naisthya = require('../models/naisthya.model');
const helper = require('../config/helpers')
var moment = require("moment");
const TZ = moment.tz("Asia/Kolkata").format();

exports.getRecords = async (req, res, next) => {
  try {
    const Data = await Naisthya.findAll({
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
    const Data = await Naisthya.findAll({
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
    const Data = await Naisthya.findAll({
      where: { id: req.params.naisthyaId, is_deleted: '0' }
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
    const NaisthyaData = await Naisthya.create({
      naisthya_statement: req.body.naisthya_statement,
      time_period: req.body.time_period,
      believer_group: req.body.believer_group,
      impact_point: req.body.impact_point,
      prayaan_statement: req.body.prayaan_statement,
      date_of_lunch: req.body.date_of_lunch,
      list_of_activities: req.body.list_of_activities,
      email_id: req.body.email_id,
      created_by: req.body.created_by,
      updated_by: req.body.created_by,
      created_on: (moment().tz(TZ).utcOffset("+05:30").format())
    })
    if (!NaisthyaData) {
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
    const NaisthyaData = await Naisthya.update({
      naisthya_statement: req.body.naisthya_statement,
      time_period: req.body.time_period,
      believer_group: req.body.believer_group,
      impact_point: req.body.impact_point,
      prayaan_statement: req.body.prayaan_statement,
      date_of_lunch: req.body.date_of_lunch,
      list_of_activities: req.body.list_of_activities,
      email_id: req.body.email_id,
      updated_by: req.body.updated_by,
      updated_on: (moment().tz(TZ).utcOffset("+05:30").format()),
    },
      { where: { id: req.params.naisthyaId } });
    if (!NaisthyaData) {
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
    const NaisthyaData = await Naisthya.update(
      {
        verified: "1",
      },
      { where: { id: req.params.var_id } }
    );
    if (!NaisthyaData) {
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

  const naisthyaId = req.params.id;
  try {
    const NaisthyaData = await Naisthya.update({
      is_deleted: '1'
    },
      { where: { id: naisthyaId } });
    if (!NaisthyaData) {
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