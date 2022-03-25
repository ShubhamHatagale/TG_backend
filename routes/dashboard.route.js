const DashboardController = require('../controllers/dashboard.controller');

module.exports = (router) => {
  router.get('/dashboard', DashboardController.getRecords);
  router.get('/dashboard/user/:u_id', DashboardController.getRecordsByUserId);
  router.get('/dashboard/:dashboardId', DashboardController.getRecordsById)
  router.post('/dashboard', DashboardController.postRecords);
  router.put('/dashboard/:dashboardId', DashboardController.updateRecords);
  router.delete('/dashboard/:id', DashboardController.deleteRecords);
  router.put('/dashboard/verify/:var_id', DashboardController.updateVerify);
}
