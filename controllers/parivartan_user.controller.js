const parivartan_user = require('../models/parivartan_user.model');
const helper = require('../config/helpers')
var moment = require("moment");
const TZ = moment.tz("Asia/Kolkata").format();
var jwt = require("jsonwebtoken");
var config = require("../config/config");

exports.getRecords = async (req, res, next) => {
  try {
    const Data = await parivartan_user.findAll({
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
    const Data = await parivartan_user.findOne({
      where: { id: req.params.u_id, is_deleted: "0" },
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

exports.checkEmail = async (req, res, next) => {
  try {
    const Data = await parivartan_user.findOne({
      where: { beliver_email: req.params.c_id },
    });
    if (!Data) {

      res.status(401).send({ auth: false, token: null });

    } else if (Data) {
      var token = jwt.sign({ id: Data.id }, config.secret, { expiresIn: 86400 });

      res.status(200).send({ auth: true, token: token, id: Data.id });

    }
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
    const Data = await parivartan_user.findAll({
      where: { id: req.params.parivartan_userId, is_deleted: '0' }
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
    const parivartan_userData = await parivartan_user.create({
      beliver_name: req.body.beliver_name,
      beliver_company: req.body.beliver_company,
      beliver_email: req.body.beliver_email,
      beliver_mobile: req.body.beliver_mobile,
      tranz_name: req.body.tranz_name,
      tranz_email: req.body.tranz_email,
      tranz_mobile: req.body.tranz_mobile,
      bypass_email: req.body.bypass_email,
      bypass_mobile: req.body.bypass_mobile,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
      created_on: (moment().tz(TZ).utcOffset("+05:30").format())
    })
    if (!parivartan_userData) {
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
    const parivartan_userData = await parivartan_user.update({
      beliver_name: req.body.beliver_name,
      beliver_company: req.body.beliver_company,
      beliver_email: req.body.beliver_email,
      beliver_mobile: req.body.beliver_mobile,
      tranz_name: req.body.tranz_name,
      tranz_email: req.body.tranz_email,
      tranz_mobile: req.body.tranz_mobile,
      bypass_email: req.body.bypass_email,
      bypass_mobile: req.body.bypass_mobile,
      updated_by: req.body.updated_by,
      updated_on: (moment().tz(TZ).utcOffset("+05:30").format()),
    },
      { where: { id: req.params.parivartan_userId } });
    if (!parivartan_userData) {
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

  try {
    const parivartan_userData = await parivartan_user.update({
      is_deleted: '1'
    },
      { where: { id: req.params.id } });
    if (!parivartan_userData) {
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