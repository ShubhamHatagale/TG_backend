const smsapiController=require('../controllers/smsapi.controller');
const { body } = require('express-validator');
const { validate } = require('../config/validate');

const helper=require('../config/helpers')
module.exports=(router)=>{
 
  router.get('/smsapi',smsapiController.postRecords);
 
}
