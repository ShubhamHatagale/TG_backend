const CMMT3Controller=require('../controllers/customerMind3.controller');
module.exports=(router)=>{
  router.get('/CMMT3',CMMT3Controller.getRecords);
  router.get('/CMMT3/user/:u_id',CMMT3Controller.getRecordsByUserId);
  router.get('/CMMT3/:CMMT3Id',CMMT3Controller.getRecordsById)
  router.post('/CMMT3',CMMT3Controller.postRecords);
  router.put('/CMMT3/:CMMT3Id',CMMT3Controller.updateRecords);
  router.delete('/CMMT3/:id', CMMT3Controller.deleteRecords);
}
