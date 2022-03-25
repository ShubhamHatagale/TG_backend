const drishtiController = require('../controllers/drishti.controller');

module.exports = (router) => {
  router.get('/drishti', drishtiController.getRecords);
  router.get('/drishti/user/:u_id',drishtiController.getRecordsByUserId);
  router.get('/drishti/:drishtiId', drishtiController.getRecordsById)
  router.post('/drishti', drishtiController.postRecords);
  router.put('/drishti/:drishtiId', drishtiController.updateRecords);
  router.delete('/drishti/:id', drishtiController.deleteRecords);
  router.put('/drishti/verify/:var_id', drishtiController.updateVerify);

}
