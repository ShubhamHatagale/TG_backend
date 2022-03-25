const valueController=require('../controllers/valueproposition.controller');

module.exports=(router)=>{
  router.get('/valueprop',valueController.getRecords);
  router.get('/valueprop/user/:u_id',valueController.getRecordsByUserId);
  router.get('/valueprop/:valuepropId',valueController.getRecordsById)
  router.post('/valueprop',valueController.postRecords);
  router.put('/valueprop/:valuepropId',valueController.updateRecords);
  router.delete('/valueprop/:id', valueController.deleteRecords);
}
