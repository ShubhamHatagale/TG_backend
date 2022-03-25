const validateController = require('../controllers/validation.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper = require('../config/helpers')
module.exports = (router) => {
  router.get('/validate', validateController.getRecords);
  router.get('/validate/user/:u_id', validateController.getRecordsByUserId);
  router.get('/validate/:ValidationId', validateController.getRecordsById)
  router.post('/validate', validateController.postRecords);
  router.put('/validate/:ValidationId', validateController.updateRecords);
  router.delete('/validate/:id', validateController.deleteRecords);
  router.put('/validate/verify/:var_id', validateController.updateVerify);

}
