const urjaCharController = require('../controllers/urjaChar.controller');

module.exports = (router) => {
  router.get('/urjaChar', urjaCharController.getRecords);
  router.get('/urjaChar/user/:u_id',urjaCharController.getRecordsByUserId);
  router.get('/urjaChar/:urjaCharId', urjaCharController.getRecordsById)
  router.post('/urjaChar', urjaCharController.postRecords);
  router.put('/urjaChar/:urjaCharId', urjaCharController.updateRecords);
  router.delete('/urjaChar/:id', urjaCharController.deleteRecords);
  router.put('/urjaChar/verify/:var_id', urjaCharController.updateVerify);

}
