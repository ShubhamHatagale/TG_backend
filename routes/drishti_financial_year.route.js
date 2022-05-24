const drishtiController = require('../controllers/drishti_financial_year.controller');

module.exports = (router) => {
  router.get('/drishti_financial_year', drishtiController.getRecords);
  router.get('/drishti_financial_year/user/:u_id', drishtiController.getRecordsByUserId);
  router.get('/drishti_financial_year/:drishtiId', drishtiController.getRecordsById)
  router.post('/drishti_financial_year', drishtiController.postRecords);
  router.put('/drishti_financial_year/:drishtiId', drishtiController.updateRecords);
  router.delete('/drishti_financial_year/:id', drishtiController.deleteRecords);
  router.put('/drishti_financial_year/verify/:var_id', drishtiController.updateVerify);

}
