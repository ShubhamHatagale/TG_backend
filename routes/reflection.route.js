const reflectionController=require('../controllers/reflection.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper=require('../config/helpers')
module.exports=(router)=>{
  router.get('/reflection',reflectionController.getRecords);
  router.get('/reflection/user/:u_id',reflectionController.getRecordsByUserId);
  router.get('/reflection/:ReflectionId',reflectionController.getRecordsById)
  router.post('/reflection',reflectionController.postRecords);
  router.put('/reflection/:ReflectionId',reflectionController.updateRecords);
  router.delete('/reflection/:id', reflectionController.deleteRecords);
}
