const CMMT1Controller=require('../controllers/CMMT1.controller');
module.exports=(router)=>{
  router.get('/CMMT1',CMMT1Controller.getRecords);
  router.get('/CMMT1/user/:u_id',CMMT1Controller.getRecordsByUserId);
  router.get('/CMMT1/:CMMT1Id',CMMT1Controller.getRecordsById)
  router.post('/CMMT1',CMMT1Controller.postRecords);
  router.put('/CMMT1/:CMMT1Id',CMMT1Controller.updateRecords);
  router.delete('/CMMT1/:id', CMMT1Controller.deleteRecords);
}
