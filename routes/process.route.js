const processController = require('../controllers/process.controller');

module.exports = (router) => {
  router.get('/process', processController.getRecords);
  router.get('/process/user/:u_id',processController.getRecordsByUserId);
  router.get('/process/:processId', processController.getRecordsById)
  router.get('/processprocessId/:processId', processController.getRecordsByProcessId)
  router.post('/process', processController.postRecords);
  router.put('/process/:processId', processController.updateRecords);
  router.delete('/process/:id', processController.deleteRecords);
}
