const competionController=require('../controllers/CompetionSheet.controller');

module.exports=(router)=>{
  router.get('/competionsheet',competionController.getRecords);
  router.get('/competionsheet/user/:u_id',competionController.getRecordsByUserId);
  router.get('/competionsheet/:competionsheetId',competionController.getRecordsById)
  router.post('/competionsheet',competionController.postRecords);
  router.put('/competionsheetCheck/:checked_id',competionController.postCheckedRecords);
  router.put('/competionsheet/:competionsheetId',competionController.updateRecords);
  router.delete('/competionsheet/:id', competionController.deleteRecords);
  router.put('/competionsheet/verify/:var_id', competionController.updateVerify);
  
}
