var express = require('express');
const router = express.Router();
const dataController = require ('../controllers/dataController');

router.get('/', dataController.home);
module.exports = router;
