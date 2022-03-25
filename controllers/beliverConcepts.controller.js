const beliverConcepts = require("../models/beliverConcepts.model");
const helper = require("../config/helpers");
const hg = require("../config/hg");

var moment = require("moment");
const TZ = moment.tz("Asia/Kolkata").format();

exports.getRecords = async (req, res, next) => {
  try {
    const Data = await beliverConcepts.findAll(
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


exports.postToRecords = async (req, res, next) => {
  // const t = await sequelize.transaction();
  let belEmail = req.body.belEmail;
  let transEmail = req.body.transEmail;
  let bypassEmail = req.body.bypassEmail;

  var maillist = [
    `${req.body.belEmail}`,
    `${req.body.transEmail}`
  ];
  console.log(transEmail + "  email : " + belEmail + "dd" + bypassEmail)
  let EmployeeLastName, EmployeeFirstName, ManagerFirstName, ManagerLastName;
  let activeDate = moment().tz(TZ).utcOffset("+05:30").format('DD MMM YYYY');
  let EndDate = moment().tz(TZ).utcOffset("+05:30").add(15, 'd').format('DD MMM YYYY');
  console.log(activeDate + "  Next : " + EndDate)
  console.log(req.body.otp);
  const sub = ` Action Requested:  Performance Feedback ()`;
  const toBcc = [`${req.body.transEmail}`, `${req.body.bypassEmail}`];
  const content = ` <p><b>Your OTP is ${req.body.otp}</b></p>`;
  const toEmail = [`${req.body.belEmail}`]
  helper.SendMail(toEmail, toBcc, sub, content, res);
  res.status(200).json({
    status: 200,
    message: 'Data Added Successfully',
  });
};

// postToEmail
exports.postToEmail = async () => {
  hg.SendMail();
  res.status(200).json({
    status: 200,
    message: 'Data Added Successfully',
  });
};

exports.getRecordsByUserId = async (req, res, next) => {
  try {
    const Data = await beliverConcepts.findAll({
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
    const Data = await beliverConcepts.findAll({
      where: { id: req.params.beliverConceptsId, is_deleted: "0" },
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
    const beliverConceptss = await beliverConcepts.create({
      beliverse_group: req.body.beliverse_group,
      face_of_tribe: req.body.face_of_tribe,
      tribe: req.body.tribe,
      primary_customer_beliver: req.body.primary_customer_beliver,
      face_of_primary_customer_beliver: req.body.face_of_primary_customer_beliver,
      email_id: req.body.email_id,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
      created_on: moment().tz(TZ).utcOffset("+05:30").format(),
    });

    if (!beliverConceptss) {
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
    const beliverConceptsdetails = await beliverConcepts.update(
      {
        beliverse_group: req.body.beliverse_group,
        face_of_tribe: req.body.face_of_tribe,
        tribe: req.body.tribe,
        primary_customer_beliver: req.body.primary_customer_beliver,
        face_of_primary_customer_beliver:
          req.body.face_of_primary_customer_beliver,
        possible_combination: req.body.possible_combination,
        email_id: req.body.email_id,
        updated_by: req.body.updated_by,
        updated_on: moment().tz(TZ).utcOffset("+05:30").format(),
      },
      { where: { id: req.params.belId } }
    );

    if (!beliverConceptsdetails) {
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
    const beliverConceptsdetails = await beliverConcepts.update(
      {
        verified: "1",
      },
      { where: { id: req.params.var_id } }
    );
    if (!beliverConceptsdetails) {
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

  const beliverConceptsId = req.params.id;
  try {
    const details = await beliverConcepts.update(
      {
        is_deleted: "1",
      },
      { where: { id: beliverConceptsId } }
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
