const Vilakshan = require("../models/vilakshan.model");
const helper = require("../config/helpers");
var moment = require("moment");
const TZ = moment.tz("Asia/Kolkata").format();

exports.getRecords = async (req, res, next) => {
  try {
    const Data = await Vilakshan.findAll({
      where: { is_deleted: "0" },
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

exports.getRecordsByUserId = async (req, res, next) => {
  try {
    const Data = await Vilakshan.findAll({
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
    const Data = await Vilakshan.findAll({
      where: { email_id: req.params.vilakshanId, is_deleted: "0" },
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

exports.postRecords = async (req, res, next) => {
  try {
    const VilakshanData = await Vilakshan.create({
      features: req.body.features,
      email_id: req.body.email_id,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
      created_on: moment().tz(TZ).utcOffset("+05:30").format(),
    });
    if (!VilakshanData) {
      return res.status(200).json({
        status: 404,
        message: "No data found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "Post created successfully!",
    });
  } catch (error) {
    helper.logger.info(error);
    return res.status(500).send({
      message: "Unable to Post data",
      status: 500,
    });
  }
};

exports.updateRecords = async (req, res, next) => {
  try {
    const VilakshanData = await Vilakshan.update(
      {
        features: req.body.features,
        email_id: req.body.email_id,
        updated_by: req.body.updated_by,
        updated_on: moment().tz(TZ).utcOffset("+05:30").format(),
      },
      { where: { email_id: req.params.vilakshanId } }
    );
    if (!VilakshanData) {
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
};

exports.updateCheck = async (req, res, next) => {
  try {
    const VilakshanData = await Vilakshan.update(
      {
        checkVal: req.body.checkVal,
        email_id: req.body.email_id,
        created_by: req.body.created_by,
        updated_on: moment().tz(TZ).utcOffset("+05:30").format(),
      },
      { where: { id: req.params.uid } }
    );
    if (!VilakshanData) {
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
};

exports.updateVerify = async (req, res, next) => {
  try {
    console.log(req.params.verifiedVal)
    const VilakshanData = await Vilakshan.update(
      {
        verified: "1",
      },
      { where: { id: req.params.var_id } }
    );
    if (!VilakshanData) {
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

  const vilakshanId = req.params.id;
  try {
    const vilakshanDetails = await Vilakshan.update(
      {
        is_deleted: "1",
      },
      { where: { id: vilakshanId } }
    );
    if (!vilakshanDetails) {
      return res.status(200).json({
        status: 404,
        message: "No data found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "Record Deleted Successfully",
    });
  } catch (error) {
    helper.logger.info(error);
    return res.status(500).send({
      message: "Unable to Delete Record",
      status: 500,
    });
  }
};
