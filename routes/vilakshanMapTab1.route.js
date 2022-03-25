const customerController=require('../controllers/vilakshanMapTab1.controller');
module.exports=(router)=>{
  router.get('/vilakshanMapTab1',customerController.getRecords);
  router.get('/vilakshanMapTab1/user/:u_id',customerController.getRecordsByUserId);
  router.get('/vilakshanMapTab1/:vilakshanMapTab1Id',customerController.getRecordsById)
  router.post('/vilakshanMapTab1',customerController.postRecords);
  router.put('/vilakshanMapTab1/:vilakshanMapTab1Id',customerController.updateRecords);
  router.delete('/vilakshanMapTab1/:id', customerController.deleteRecords);
}
