const customerSegment=require('../controllers/customerSegment.controller');

module.exports=(router)=>{
  router.get('/customerSegment',customerSegment.getRecords);
  router.get('/customerSegment/user/:u_id',customerSegment.getRecordsByUserId);
  router.get('/customerSegment/:customerSegmentId',customerSegment.getRecordsById)
  router.post('/customerSegment',customerSegment.postRecords);
  router.put('/customerSegment/:customerSegmentId',customerSegment.updateRecords);
  router.delete('/customerSegment/:id', customerSegment.deleteRecords);
}
