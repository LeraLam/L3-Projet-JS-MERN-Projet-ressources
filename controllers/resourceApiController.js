/*Import du model*/
const Resources = require('../models/resourcesModel').model;

/* GET /
 Recupere la liste de toutes les ressources dans la database*/
const home =
    (req, res) =>
        Resources.find()
                 .then( allres => res.status(200).json(allres) );

/* GET /:resId
Recupere la ressource avec son ID passé en param*/
const getResource =
    (req, res) =>
        Resources.findById(req.params.resId)
                .then( ress => res.status(200).json(ress) );

/* PUT /:resId
Met à jour le prix de la ressource avec son ID passé en param*/
const newPrice =
    (req, res) => {
        let updatedPrice = { price: req.body.price };
        Resources.findByIdAndUpdate(req.params.resId, updatedPrice, {new :true } )
                .then( ress => res.status(200).json(ress));
    }

module.exports.home = home;
module.exports.getResource = getResource;
module.exports.newPrice = newPrice;
