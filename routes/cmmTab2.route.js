const customerController=require('../controllers/cmmTab2.controller');
module.exports=(router)=>{
  router.get('/customerTab2',customerController.getRecords);
  router.get('/customerTab2/user/:u_id',customerController.getRecordsByUserId);
  router.get('/customerTab2/:customerTabId',customerController.getRecordsById)
  router.post('/customerTab2',customerController.postRecords);
  router.put('/customerTab2/:customerTabId',customerController.updateRecords);
  router.put('/customerTab2Id/:customerTabId',customerController.updateRecordId);
  router.delete('/customerTab2/:id', customerController.deleteRecords);
}
