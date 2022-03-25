const customerSegment = require("../models/customerSegment.model");
const helper = require("../config/helpers");
var moment = require("moment");
const TZ = moment.tz("Asia/Kolkata").format();

exports.getRecords = async (req, res, next) => {
  try {
    const Data = await customerSegment.findAll(
      {
        where: { is_deleted: "0" },
      }
    );
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
    const Data = await customerSegment.findAll({
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
    const Data = await customerSegment.findAll({
      where: { id: req.params.customerSegmentId, is_deleted: "0" },
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
    const customerSegments = await customerSegment.create({
      customer_face: req.body.customer_face,
      org_name: req.body.org_name,
      product_service_offering_by: req.body.product_service_offering_by,
      problem_solving: req.body.problem_solving,
      email_id: req.body.email_id,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
      created_on: moment().tz(TZ).utcOffset("+05:30").format(),
    });

    if (!customerSegments) {
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
    const customerSegmentdetails = await customerSegment.update(
      {
        customer_face: req.body.customer_face,
        org_name: req.body.org_name,
        product_service_offering_by: req.body.product_service_offering_by,
        problem_solving: req.body.problem_solving,
        email_id: req.body.email_id,
        updated_by: req.body.updated_by,
        updated_on: moment().tz(TZ).utcOffset("+05:30").format(),
      },
      { where: { id: req.params.customerSegmentId } }
    );

    if (!customerSegmentdetails) {
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

  const customerSegmentId = req.params.id;
  try {
    const details = await customerSegment.update(
      {
        is_deleted: "1",
      },
      { where: { id: customerSegmentId } }
    );
    if (!details) {
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
