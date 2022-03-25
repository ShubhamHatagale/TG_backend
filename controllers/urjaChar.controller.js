const urjaChar = require('../models/urjaChar.model');
const helper = require('../config/helpers')
var moment = require("moment");
const TZ = moment.tz("Asia/Kolkata").format();

exports.getRecords = async (req, res, next) => {
  try {
    const Data = await urjaChar.findAll({
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
    const Data = await urjaChar.findAll({
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
    const Data = await urjaChar.findAll({
      where: { id: req.params.urjaCharId, is_deleted: '0' }
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
    const urjaCharData = await urjaChar.create({
      TotalRevenue1: req.body.TotalRevenue1,
      // RevenueReadOnly1: req.body.RevenueReadOnly1,
      DirectExpences1: req.body.DirectExpences1,
      // DirectExpencesReadOnly1: req.body.DirectExpencesReadOnly1,
      GrossProfit1: req.body.GrossProfit1,
      // GrossProfitID1: req.body.GrossProfitID1,
      IndirectExpences1: req.body.IndirectExpences1,
      // IndirectExpencesID1: req.body.IndirectExpencesID1,
      EBITDA1: req.body.EBITDA1,
      EBITDApercent1: req.body.EBITDApercent1,
      // EBITDA_ID1: req.body.EBITDA_ID1,
      TotalRevenue2: req.body.TotalRevenue2,
      // RevenueReadOnly2: req.body.RevenueReadOnly2,
      DirectExpences2: req.body.DirectExpences2,
      // DirectExpencesReadOnly2: req.body.DirectExpencesReadOnly2,
      GrossProfit2: req.body.GrossProfit2,
      // GrossProfitID2: req.body.GrossProfitID2,
      IndirectExpences2: req.body.IndirectExpences2,
      // IndirectExpencesID2: req.body.IndirectExpencesID2,
      EBITDA2: req.body.EBITDA2,
      EBITDApercent2: req.body.EBITDApercent2,
      // EBITDA_ID2: req.body.EBITDA_ID2,
      TotalRevenue3: req.body.TotalRevenue3,
      // RevenueReadOnly3: req.body.RevenueReadOnly3,
      DirectExpences3: req.body.DirectExpences3,
      // DirectExpencesReadOnly3: req.body.DirectExpencesReadOnly3,
      GrossProfit3: req.body.GrossProfit3,
      // GrossProfitID3: req.body.GrossProfitID3,
      IndirectExpences3: req.body.IndirectExpences3,
      // IndirectExpencesID3: req.body.IndirectExpencesID3,
      EBITDA3: req.body.EBITDA3,
      EBITDApercent3: req.body.EBITDApercent3,
      // EBITDA_ID3: req.body.EBITDA_ID3,
      TotalRevenue4: req.body.TotalRevenue4,
      // RevenueReadOnly4: req.body.RevenueReadOnly4,
      DirectExpences4: req.body.DirectExpences4,
      // DirectExpencesReadOnly4: req.body.DirectExpencesReadOnly4,
      GrossProfit4: req.body.GrossProfit4,
      // GrossProfitID4: req.body.GrossProfitID4,
      IndirectExpences4: req.body.IndirectExpences4,
      // IndirectExpencesID4: req.body.IndirectExpencesID4,
      EBITDA4: req.body.EBITDA4,
      EBITDApercent4: req.body.EBITDApercent4,
      // EBITDA_ID4: req.body.EBITDA_ID4,
      TotalRevenue5: req.body.TotalRevenue5,
      // RevenueReadOnly5: req.body.RevenueReadOnly5,
      DirectExpences5: req.body.DirectExpences5,
      // DirectExpencesReadOnly5: req.body.DirectExpencesReadOnly5,
      GrossProfit5: req.body.GrossProfit5,
      // GrossProfitID5: req.body.GrossProfitID5,
      IndirectExpences5: req.body.IndirectExpences5,
      // IndirectExpencesID5: req.body.IndirectExpencesID5,
      EBITDA5: req.body.EBITDA5,
      EBITDApercent5: req.body.EBITDApercent5,
      // EBITDA_ID5: req.body.EBITDA_ID5,
      TotalRevenue6: req.body.TotalRevenue6,
      // RevenueReadOnly6: req.body.RevenueReadOnly6,
      DirectExpences6: req.body.DirectExpences6,
      // DirectExpencesReadOnly6: req.body.DirectExpencesReadOnly6,
      GrossProfit6: req.body.GrossProfit6,
      // GrossProfitID6: req.body.GrossProfitID6,
      IndirectExpences6: req.body.IndirectExpences6,
      // IndirectExpencesID6: req.body.IndirectExpencesID6,
      EBITDA6: req.body.EBITDA6,
      EBITDApercent6: req.body.EBITDApercent6,
      // EBITDA_ID6: req.body.EBITDA_ID6,
      email_id: req.body.email_id,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
      created_on: (moment().tz(TZ).utcOffset("+05:30").format())
    })
    if (!urjaCharData) {
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
    const urjaCharData = await urjaChar.update({
      TotalRevenue1: req.body.TotalRevenue1,
      // RevenueReadOnly1: req.body.RevenueReadOnly1,
      DirectExpences1: req.body.DirectExpences1,
      // DirectExpencesReadOnly1: req.body.DirectExpencesReadOnly1,
      GrossProfit1: req.body.GrossProfit1,
      // GrossProfitID1: req.body.GrossProfitID1,
      IndirectExpences1: req.body.IndirectExpences1,
      // IndirectExpencesID1: req.body.IndirectExpencesID1,
      EBITDA1: req.body.EBITDA1,
      EBITDApercent1: req.body.EBITDApercent1,
      // EBITDA_ID1: req.body.EBITDA_ID1,
      TotalRevenue2: req.body.TotalRevenue2,
      // RevenueReadOnly2: req.body.RevenueReadOnly2,
      DirectExpences2: req.body.DirectExpences2,
      // DirectExpencesReadOnly2: req.body.DirectExpencesReadOnly2,
      GrossProfit2: req.body.GrossProfit2,
      // GrossProfitID2: req.body.GrossProfitID2,
      IndirectExpences2: req.body.IndirectExpences2,
      // IndirectExpencesID2: req.body.IndirectExpencesID2,
      EBITDA2: req.body.EBITDA2,
      EBITDApercent2: req.body.EBITDApercent2,
      // EBITDA_ID2: req.body.EBITDA_ID2,
      TotalRevenue3: req.body.TotalRevenue3,
      // RevenueReadOnly3: req.body.RevenueReadOnly3,
      DirectExpences3: req.body.DirectExpences3,
      // DirectExpencesReadOnly3: req.body.DirectExpencesReadOnly3,
      GrossProfit3: req.body.GrossProfit3,
      // GrossProfitID3: req.body.GrossProfitID3,
      IndirectExpences3: req.body.IndirectExpences3,
      // IndirectExpencesID3: req.body.IndirectExpencesID3,
      EBITDA3: req.body.EBITDA3,
      EBITDApercent3: req.body.EBITDApercent3,
      // EBITDA_ID3: req.body.EBITDA_ID3,
      TotalRevenue4: req.body.TotalRevenue4,
      // RevenueReadOnly4: req.body.RevenueReadOnly4,
      DirectExpences4: req.body.DirectExpences4,
      // DirectExpencesReadOnly4: req.body.DirectExpencesReadOnly4,
      GrossProfit4: req.body.GrossProfit4,
      // GrossProfitID4: req.body.GrossProfitID4,
      IndirectExpences4: req.body.IndirectExpences4,
      // IndirectExpencesID4: req.body.IndirectExpencesID4,
      EBITDA4: req.body.EBITDA4,
      EBITDApercent4: req.body.EBITDApercent4,
      // EBITDA_ID4: req.body.EBITDA_ID4,
      TotalRevenue5: req.body.TotalRevenue5,
      // RevenueReadOnly5: req.body.RevenueReadOnly5,
      DirectExpences5: req.body.DirectExpences5,
      // DirectExpencesReadOnly5: req.body.DirectExpencesReadOnly5,
      GrossProfit5: req.body.GrossProfit5,
      // GrossProfitID5: req.body.GrossProfitID5,
      IndirectExpences5: req.body.IndirectExpences5,
      // IndirectExpencesID5: req.body.IndirectExpencesID5,
      EBITDA5: req.body.EBITDA5,
      EBITDApercent5: req.body.EBITDApercent5,
      // EBITDA_ID5: req.body.EBITDA_ID5,
      TotalRevenue6: req.body.TotalRevenue6,
      // RevenueReadOnly6: req.body.RevenueReadOnly6,
      DirectExpences6: req.body.DirectExpences6,
      // DirectExpencesReadOnly6: req.body.DirectExpencesReadOnly6,
      GrossProfit6: req.body.GrossProfit6,
      // GrossProfitID6: req.body.GrossProfitID6,
      IndirectExpences6: req.body.IndirectExpences6,
      // IndirectExpencesID6: req.body.IndirectExpencesID6,
      EBITDA6: req.body.EBITDA6,
      EBITDApercent6: req.body.EBITDApercent6,
      // EBITDA_ID6: req.body.EBITDA_ID6,
      email_id: req.body.email_id,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
      updated_on: (moment().tz(TZ).utcOffset("+05:30").format()),
    },
      { where: { id: req.params.urjaCharId } });
    if (!urjaCharData) {
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
    const urjaCharData = await urjaChar.update(
      {
        verified: "1",
      },
      { where: { id: req.params.var_id } }
    );
    if (!urjaCharData) {
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

  const urjaCharId = req.params.id;
  try {
    const urjaCharData = await urjaChar.update({
      is_deleted: '1'
    },
      { where: { id: urjaCharId } });
    if (!urjaCharData) {
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