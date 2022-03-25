const facebeliverController=require('../controllers/facebeliver.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper=require('../config/helpers')
module.exports=(router)=>{
  router.get('/facebeliver',facebeliverController.getRecords);
  router.get('/facebeliver/user/:u_id',facebeliverController.getRecordsByUserId);
  router.get('/facebeliver/:FaceBeliverId',facebeliverController.getRecordsById)
  router.post('/facebeliver',facebeliverController.postRecords);
  router.put('/facebeliver/:FaceBeliverId',facebeliverController.updateRecords);
  router.delete('/facebeliver/:id', facebeliverController.deleteRecords);
}
