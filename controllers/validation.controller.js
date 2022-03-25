const Validation = require('../models/validation.model');
const helper = require('../config/helpers')
var moment = require("moment");
const TZ = moment.tz("Asia/Kolkata").format();

exports.getRecords = async (req, res, next) => {
  try {
    const Data = await Validation.findAll(
      {
        where: { is_deleted: '0' }
      }
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
    const Data = await Validation.findAll({
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
    const Data = await Validation.findAll({
      where: { id: req.params.ValidationId, is_deleted: '0' }
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
    const Validations = await Validation.create({
      question1: req.body.question1,
      question2: req.body.question2,
      question3: req.body.question3,
      question4: req.body.question4,
      question5: req.body.question5,
      question6: req.body.question6,
      question7: req.body.question7,
      question8: req.body.question8,
      question9: req.body.question9,
      question10: req.body.question10,
      question11: req.body.question11,
      question12: req.body.question12,
      question13: req.body.question13,
      question14: req.body.question14,
      question15: req.body.question15,
      email_id: req.body.email_id,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
      created_on: (moment().tz(TZ).utcOffset("+05:30").format())
    })

    if (!Validations) {
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
    const Validationdetails = await Validation.update({
      question1: req.body.question1,
      question2: req.body.question2,
      question3: req.body.question3,
      question4: req.body.question4,
      question5: req.body.question5,
      question6: req.body.question6,
      question7: req.body.question7,
      question8: req.body.question8,
      question9: req.body.question9,
      question10: req.body.question10,
      question11: req.body.question11,
      question12: req.body.question12,
      question13: req.body.question13,
      question14: req.body.question14,
      question15: req.body.question15,
      email_id: req.body.email_id,
      updated_by: req.body.updated_by,
      updated_on: (moment().tz(TZ).utcOffset("+05:30").format()),
    },
      { where: { id: req.params.ValidationId } });

    if (!Validationdetails) {
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
    const ValidationId = await Validation.update(
      {
        verified: "1",
      },
      { where: { email_id: req.params.var_id } }
    );
    if (!ValidationId) {
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

  const ValidationId = req.params.id;
  try {
    const details = await Validation.update({
      is_deleted: '1'
    },
      { where: { id: ValidationId } });
    if (!details) {
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











