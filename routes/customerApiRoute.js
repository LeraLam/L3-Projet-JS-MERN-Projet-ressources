const express = require('express');
const router = express.Router();

// import controller for resources
const controller = require('../controllers/customerApiController');

//Routes for ressources
router.get('/', controller.home );
router.get( '/:cusId', controller.getCustomer );
router.post('/',controller.createCustomer);
router.delete('/:cusId', controller.removeCustomer);

module.exports = router;
