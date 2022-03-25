const customerController=require('../controllers/goal_drillerRaw.controller');
module.exports=(router)=>{
  router.get('/goal_drillerRaw',customerController.getRecords);
  router.get('/goal_drillerRaw/user/:u_id',customerController.getRecordsByUserId);
  router.get('/goal_drillerRaw/:customerTabId',customerController.getRecordsById)
  router.post('/goal_drillerRaw',customerController.postRecords);
  router.put('/goal_drillerRaw/:customerTabId',customerController.updateRecords);
  router.delete('/goal_drillerRaw/:id', customerController.deleteRecords);
}
