const express = require('express');
const router = express.Router();

// import controller for resources
const controller = require('../controllers/resourceApiController');

//Routes for ressources
router.get('/', controller.home );
router.get( '/:resId', controller.getResource );
router.put( '/:resId', controller.newPrice );

module.exports = router;
