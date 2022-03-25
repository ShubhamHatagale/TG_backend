const non_negotiableController=require('../controllers/non_negotiable.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper=require('../config/helpers')
module.exports=(router)=>{
  router.get('/non_negotiable',non_negotiableController.getRecords);
  router.get('/non_negotiable/user/:u_id',non_negotiableController.getRecordsByUserId);
  router.get('/non_negotiable/:non_negotiableId',non_negotiableController.getRecordsById)
  router.post('/non_negotiable',non_negotiableController.postRecords);
  router.put('/non_negotiable/:non_negotiableId',non_negotiableController.updateRecords);
  router.delete('/non_negotiable/:id', non_negotiableController.deleteRecords);
  router.put('/non_negotiable/verify/:var_id', non_negotiableController.updateVerify);

}


