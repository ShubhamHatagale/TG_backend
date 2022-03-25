const groupbeliverController=require('../controllers/groupbeliver.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper=require('../config/helpers')
module.exports=(router)=>{
  router.get('/groupbeliver',groupbeliverController.getRecords);
  router.get('/groupbeliver/user/:u_id',groupbeliverController.getRecordsByUserId);
  router.get('/groupbeliver/:GroupBeliverId',groupbeliverController.getRecordsById)
  router.post('/groupbeliver',groupbeliverController.postRecords);
  router.put('/groupbeliver/:GroupBeliverId',groupbeliverController.updateRecords);
  router.delete('/groupbeliver/:id', groupbeliverController.deleteRecords);
}
