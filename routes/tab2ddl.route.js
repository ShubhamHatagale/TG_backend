const tab2ddlController=require('../controllers/tab2ddl.controller');
module.exports=(router)=>{
  router.get('/tab2ddl',tab2ddlController.getRecords);
  router.get('/tab2ddl/user/:u_id',tab2ddlController.getRecordsByUserId);
  router.get('/tab2ddl/:tab2ddlId',tab2ddlController.getRecordsById)
  router.post('/tab2ddl',tab2ddlController.postRecords);
  router.put('/tab2ddl/:tab2ddlId',tab2ddlController.updateRecords);
  router.delete('/tab2ddl/:id', tab2ddlController.deleteRecords);
}

