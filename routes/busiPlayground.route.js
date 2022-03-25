const busiPlaygroundController = require('../controllers/busiPlayground.controller');

module.exports = (router) => {
  router.get('/busiPlayground', busiPlaygroundController.getRecords);
  router.get('/busiPlayground/user/:u_id',busiPlaygroundController.getRecordsByUserId);
  router.get('/busiPlayground/:busiPlaygroundId', busiPlaygroundController.getRecordsById)
  router.post('/busiPlayground', busiPlaygroundController.postRecords);
  router.put('/busiPlayground/:busiPlaygroundId', busiPlaygroundController.updateRecords);
  router.delete('/busiPlayground/:id', busiPlaygroundController.deleteRecords);
}
