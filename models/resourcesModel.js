const mongoose = require('mongoose');

/* resource Schema*/
const resourceSchema = new mongoose.Schema({
  name : {
     type : String,
     required : true
  },
  price : {
    type : Number,
    required : true,
    min : 0 },
});

// export the schema
module.exports = resourceSchema;

// schema must be "compiled" into a model and "bound" to a collection of a database managed by a connection
const dbConnection = require('../controllers/db');
const Resources = dbConnection.model('Resource', resourceSchema,'resource');


// export the model
module.exports.model = Resources;
