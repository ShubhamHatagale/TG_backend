const customerController=require('../controllers/vilakshanMapTab2.controller');
module.exports=(router)=>{
  router.get('/vilakshanMapTab2',customerController.getRecords);
  router.get('/vilakshanMapTab2/user/:u_id',customerController.getRecordsByUserId);
  router.get('/vilakshanMapTab2/:vilakshanMapTab2Id',customerController.getRecordsById)
  router.post('/vilakshanMapTab2',customerController.postRecords);
  router.put('/vilakshanMapTab2/:vilakshanMapTab2Id',customerController.updateRecords);
  router.delete('/vilakshanMapTab2/:id', customerController.deleteRecords);
}
