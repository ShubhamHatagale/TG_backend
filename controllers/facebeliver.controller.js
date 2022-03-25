const FaceBeliver = require('../models/beliversface.model');
const helper = require('../config/helpers')
var moment = require("moment");
const TZ = moment.tz("Asia/Kolkata").format();


exports.getRecords = async (req, res, next) => {
  try {
    const Data = await FaceBeliver.findAll();
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
    const Data = await FaceBeliver.findAll({
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
    const Data = await FaceBeliver.findAll({
      where: { email_id: req.params.FaceBeliverId, is_deleted: '0' }
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
    const FaceBelivers = await FaceBeliver.create({
      Word_define_face: req.body.Word_define_face,
      email_id: req.body.email_id,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
      created_on: (moment().tz(TZ).utcOffset("+05:30").format())
    })

    if (!FaceBelivers) {
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
    const FaceBeliverdetails = await FaceBeliver.update({
      Word_define_face: req.body.Word_define_face,
      email_id: req.body.email_id,
      updated_by: req.body.updated_by,
      updated_on: (moment().tz(TZ).utcOffset("+05:30").format()),
    },
      { where: { id: req.params.FaceBeliverId } });

    if (!FaceBeliverdetails) {
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


  const FaceBeliverId = req.params.id;
  try {
    const details = await FaceBeliver.update({
      is_deleted: '1'
    },
      { where: { id: FaceBeliverId } });
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