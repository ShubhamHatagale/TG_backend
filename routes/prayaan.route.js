const prayaanController = require('../controllers/prayaan.controller');

module.exports = (router) => {
  router.get('/prayaan', prayaanController.getRecords);
  router.get('/prayaan/user/:u_id',prayaanController.getRecordsByUserId);
  router.get('/prayaan/:prayaanId', prayaanController.getRecordsById)
  router.post('/prayaan', prayaanController.postRecords);
  router.put('/prayaan/:prayaanId', prayaanController.updateRecords);
  router.delete('/prayaan/:id', prayaanController.deleteRecords);
  router.put('/prayaan/verify/:var_id', prayaanController.updateVerify);

}
