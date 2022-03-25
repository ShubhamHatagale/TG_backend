const buisenessModController=require('../controllers/buisenessMod.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper=require('../config/helpers')
module.exports=(router)=>{
  router.get('/buisenessMod',buisenessModController.getRecords);
  router.get('/buisenessMod/user/:u_id',buisenessModController.getRecordsByUserId);
  router.get('/buisenessMod/:buisenessModId',buisenessModController.getRecordsById)
  router.post('/buisenessMod',buisenessModController.postRecords);
  router.put('/buisenessMod/:buisenessModId',buisenessModController.updateRecords);
  router.delete('/buisenessMod/:id', buisenessModController.deleteRecords);
}



