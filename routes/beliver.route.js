const beliverController=require('../controllers/belivers.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper=require('../config/helpers')
module.exports=(router)=>{
  router.get('/beliver',beliverController.getRecords);
  router.get('/beliver/user/:u_id',beliverController.getRecordsByUserId);
  router.get('/beliver/:BeliverId',beliverController.getRecordsById)
  router.post('/beliver',beliverController.postRecords);
  router.put('/beliver/:BeliverId',beliverController.updateRecords);
  router.delete('/beliver/:id', beliverController.deleteRecords);
}
