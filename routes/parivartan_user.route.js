const parivartan_userController = require('../controllers/parivartan_user.controller');

module.exports = (router) => {
  router.get('/parivartan_user', parivartan_userController.getRecords);
  router.get('/parivartan_user/user/:u_id', parivartan_userController.getRecordsByUserId);
  router.get('/parivartan_user/:parivartan_userId', parivartan_userController.getRecordsById)
  router.post('/parivartan_user', parivartan_userController.postRecords);
  router.put('/parivartan_user/:parivartan_userId', parivartan_userController.updateRecords);
  router.delete('/parivartan_user/:id', parivartan_userController.deleteRecords);
  router.get('/parivartan_user/checkemail/email=:c_id', parivartan_userController.checkEmail);
  router.put('/parivartan_user/verify/:var_id', parivartan_userController.updateVerify);
}




