const busiPlayground2Controller = require('../controllers/busiPlayground2.controller');

module.exports = (router) => {
  router.get('/busiPlayground2', busiPlayground2Controller.getRecords);
  router.get('/busiPlayground2/user/:u_id',busiPlayground2Controller.getRecordsByUserId);
  router.get('/busiPlayground2/:busiPlayground2Id', busiPlayground2Controller.getRecordsById)
  router.post('/busiPlayground2', busiPlayground2Controller.postRecords);
  router.put('/busiPlayground2/:busiPlayground2Id', busiPlayground2Controller.updateRecords);
  router.delete('/busiPlayground2/:id', busiPlayground2Controller.deleteRecords);
}
