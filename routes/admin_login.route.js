const admin_loginController = require('../controllers/admin_login.controller');

module.exports = (router) => {
  router.post('/admin_login', admin_loginController.getRecords);
  // router.get('/admin_login/:checkEmail', admin_loginController.checkEmail);

}
