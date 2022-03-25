const vilakshanController = require('../controllers/vilakshan.controller');

module.exports = (router) => {
  router.get('/vilakshan', vilakshanController.getRecords);
  router.get('/vilakshan/user/:u_id', vilakshanController.getRecordsByUserId);
  router.get('/vilakshan/:vilakshanId', vilakshanController.getRecordsById)
  router.post('/vilakshan', vilakshanController.postRecords);
  router.put('/vilakshan/:vilakshanId', vilakshanController.updateRecords);
  router.delete('/vilakshan/:id', vilakshanController.deleteRecords);
  router.put('/vilakshan/checked/:uid', vilakshanController.updateCheck);
  router.put('/vilakshan/verify/:var_id', vilakshanController.updateVerify);

}
