const reflectioncommonController=require('../controllers/reflectioncommon.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper=require('../config/helpers')
module.exports=(router)=>{
  router.get('/reflectioncommon',reflectioncommonController.getRecords);
  router.get('/reflectioncommon/user/:u_id',reflectioncommonController.getRecordsByUserId);
  router.get('/reflectioncommon/:ReflectionCommonId',reflectioncommonController.getRecordsById)
  router.post('/reflectioncommon',reflectioncommonController.postRecords);
  router.put('/reflectioncommon/:ReflectionCommonId',reflectioncommonController.updateRecords);
  router.delete('/reflectioncommon/:id', reflectioncommonController.deleteRecords);
}
