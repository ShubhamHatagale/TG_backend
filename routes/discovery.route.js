const discoveryController=require('../controllers/discovery.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper=require('../config/helpers')
module.exports=(router)=>{
  router.get('/discovery',discoveryController.getRecords);
  router.get('/discovery/user/:u_id',discoveryController.getRecordsByUserId);
  router.get('/discovery/:DiscoveryId',discoveryController.getRecordsById)
  router.post('/discovery',discoveryController.postRecords);
  router.put('/discovery/:DiscoveryId',discoveryController.updateRecords);
  router.delete('/discovery/:id', discoveryController.deleteRecords);
}
