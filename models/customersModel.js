const mongoose = require('mongoose');
var resources = require('./resourcesModel.js');

/* 
  const consumptionSchema = new mongoose.Schema({
    resource : resources,
    consumptionList : [Number] //la liste des valeurs des consommations de la ressources associée.
  });
*/

/* customers Schema */
const customerSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  electricity : [Number],
  gas : [Number],
  water : [Number],
});

// export the schema
module.exports = customerSchema;

// schema must be "compiled" into a model and "bound" to a collection of a database managed by a connection
const dbConnection = require('../controllers/db');
const Customers = dbConnection.model('Customer', customerSchema, 'customer');

// export the model
module.exports.model = Customers;
