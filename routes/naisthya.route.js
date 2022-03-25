const NaisthyaController = require('../controllers/naisthya.controller');

module.exports = (router) => {
  router.get('/naisthya', NaisthyaController.getRecords);
  router.get('/naisthya/user/:u_id', NaisthyaController.getRecordsByUserId);
  router.get('/naisthya/:naisthyaId', NaisthyaController.getRecordsById)
  router.post('/naisthya', NaisthyaController.postRecords);
  router.put('/naisthya/:naisthyaId', NaisthyaController.updateRecords);
  router.delete('/naisthya/:id', NaisthyaController.deleteRecords);
  router.put('/naisthya/verify/:var_id', NaisthyaController.updateVerify);

}
