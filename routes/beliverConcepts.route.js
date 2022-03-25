const beliverConcepts = require('../controllers/beliverConcepts.controller');

module.exports = (router) => {
  router.get('/beliverConcepts', beliverConcepts.getRecords);
  // router.get('/beliverConcepts/user/emailid=:u_id',beliverConcepts.getRecordsByUserId);
  router.get('/beliverConcepts/user/:u_id', beliverConcepts.getRecordsByUserId);
  router.get('/beliverConcepts/:beliverConceptsId', beliverConcepts.getRecordsById)
  router.post('/beliverConcepts', beliverConcepts.postRecords);
  router.put('/beliverConcepts/:belId', beliverConcepts.updateRecords);
  router.delete('/beliverConcepts/:id', beliverConcepts.deleteRecords);
  router.put('/beliverConcepts/verify/:var_id', beliverConcepts.updateVerify);
  router.post('/beliverConceptsSend', beliverConcepts.postToRecords);
  router.post('/postToEmail', beliverConcepts.postToEmail);

}
