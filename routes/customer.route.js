const customerController=require('../controllers/customertab.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper=require('../config/helpers')
module.exports=(router)=>{
  router.get('/customerTab',customerController.getRecords);
  router.get('/customerTab/user/:u_id',customerController.getRecordsByUserId);
  router.get('/customerTab/:customerTabId',customerController.getRecordsById)
  router.post('/customerTab',customerController.postRecords);
  router.put('/customerTab/:customerTabId',customerController.updateRecords);
  router.delete('/customerTab/:id', customerController.deleteRecords);
}
