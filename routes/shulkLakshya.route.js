const Shulk_LakshyaController = require('../controllers/shulk_lakshya.controller');

module.exports = (router) => {
  router.get('/shulk-lakshya', Shulk_LakshyaController.getRecords);
  router.get('/shulk-lakshya/user/:u_id',Shulk_LakshyaController.getRecordsByUserId);
  router.get('/shulk-lakshya/:shulkId', Shulk_LakshyaController.getRecordsById)
  router.post('/shulk-lakshya', Shulk_LakshyaController.postRecords);
  router.put('/shulk-lakshya/:shulkId', Shulk_LakshyaController.updateRecords);
  router.delete('/shulk-lakshya/:id', Shulk_LakshyaController.deleteRecords);
  router.put('/shulk-lakshya/verify/:var_id', Shulk_LakshyaController.updateVerify);

}
