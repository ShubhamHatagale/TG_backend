const rebirthController = require('../controllers/rebirth.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper = require('../config/helpers')
module.exports = (router) => {
  router.get('/rebirth', rebirthController.getRecords);
  router.get('/rebirth/user/:u_id',rebirthController.getRecordsByUserId);
  router.get('/rebirth/:rebirthId', rebirthController.getRecordsById)
  router.post('/rebirth', rebirthController.postRecords);
  router.put('/rebirth/:rebirthId', rebirthController.updateRecords);
  router.delete('/rebirth/:id', rebirthController.deleteRecords);
}
