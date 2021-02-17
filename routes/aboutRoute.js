var express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

router.get('/', aboutController.main);

module.exports = router;
