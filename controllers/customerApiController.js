/*Import du model*/
const Customers = require('../models/customersModel').model;

/*Recupere la liste de tout les clients dans la database*/
const home =
    (req, res) =>
        Customers.find()
                 .then( allCustomers => res.status(200).json(allCustomers) );

/* GET /:cusId
 Recupere le client avec son ID passé en param*/
const getCustomer =
    (req, res) =>
        Customers.findById(req.params.cusId)
                  .then( cus => res.status(200).json(cus) );

/* POST
Creation d'un nouveau client dans la bdd*/
const createCustomer =
    (req, res) => {
        let newCustomer = { ...req.body };
        Customers.create(newCustomer)
                 .then(cus => res.status(200).json(cus));
             }

/* DELETE /:cusId
Supprime un customer dans la bdd*/
const removeCustomer =
    (req, res) =>
        Customers.findByIdAndRemove(req.params.cusId)
                 .then(() => res.status(200).end());


module.exports.home = home;
module.exports.getCustomer = getCustomer;
module.exports.createCustomer = createCustomer;
module.exports.removeCustomer = removeCustomer;
