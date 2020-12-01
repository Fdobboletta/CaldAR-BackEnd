const buildings = require("../models/buildings");

const validateBuilding = !req.body.adress || !req.body.boliers || !req.body.companyId || !req.body.fullname || !req.body.phone;

// Add a new Building
exports.create = (req, res) => {
    //Validate Request
    if(validateBuilding) {
        res.status(400).send ({msg: "Content can not be empty"});
        return;
    }

    //Create a new building
    const building = new buildings({
        adress: req.body.adress,
        buildings: req.body.buildings,
        companyId: req.body.companyId,
        fullname: req.body.fullname,
        phone: req.body.phone,
    });

    //Save building in the database
    building
        .save(building)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => { 
            res.status(500).send({
              message: "Some error occurred while creating the building."
            });
        });
};

// Get all buildings
exports.findAll = (req, res) => {
    buildings.find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while getting all buildings." 
            })
        }) 
}

// Get Building by ID
exports.findById = (req,res) => {
    buildings.findById(req.params.id)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                  message: `building with id ${req.params.id} was not found`
                })
            }
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send ({
                message: "Some error occurred while retrieving building."
            });
        });
};


// Delete a Building by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    buildings.findOneAndRemove({id}, {useFindAndModify: false})
    .then (data => {
        if (!data) {
            return res.status(404).send ({
                message: `There is no building with Id: ${req.params.id}`
            })
        }
        res.status(200).send({message: "Building was deleted successfully."})    
    })
    .catch(err => {
        res.status(500).send ({
            message: "Error removing building with id:" + id
        });
    });
};

// Update a Building by Id
exports.update = (req, res) => {
    if(validateBuilding) {
        res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    buildings.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `There is no building with id=${req.params.id}`
                });
            }
            res.status(200).send({ message: "Building updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating building with id=" + id
            });
        });
};

// Get all Buildings with a specific attribute (CompanyId)
exports.find = (req, res) => {
    buildings.find( {companyId: req.params.companyId})
        .then(data => {
            if (data.length < 1) {
                return res.status(404).send({
                  message: `Company with id ${req.params.companyId} was not found`
                })
            }
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while getting all buildings from the Company." 
            })
        }) 
};

