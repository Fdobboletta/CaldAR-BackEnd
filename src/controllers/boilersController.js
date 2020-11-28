const boilers = require("../models/boilers");

// Add a new Boiler
exports.create = (req, res) => {
    //Validate Request
    if(!req.body.description || !req.body.boilerType || !req.body.maintenance_period || !req.hour_maintenance_cost || !req.body.hour_eventual_cost){
        res.status(400).send ({msg: "Content can not be empty"});
        return;
    }

    //Create a new Boiler
    const boiler = new boilers({
        description: req.body.description,
        type: req.body.type,
        maintenance_period: req.body.maintenance_period,
        hour_maintenance_cost: req.body.hour_maintenance_cost,
        hour_eventual_cost: req.body.hour_eventual_cost,
    });

    //Save Boiler in the database
    boiler
        .save(boiler)
        .then(data => {
            res.send(data);
        })
        .catch(err=>{ 
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the boiler."
            });
        });
};

// Get all Boilers
exports.findAll = (req, res) => {
    boilers.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                   err.message || "Some error occurred while getting all boilers." 
            })
        }) 
}

// Delete a Boiler with an specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    boilers.findOneAndRemove({id}, {useFindAndModify: false})
    .then (data =>
        res.send({message: "Boiler was deleted successfully."})    
    )
    .catch(err => {
        res.status(500).send ({
            message: "Error removing Boiler with id:" + id
        });
    });
};