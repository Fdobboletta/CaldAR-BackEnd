const buildings = require("../models/buildings");


// Add a new Building
exports.create = (req, res) => {
    //Validate Request
    if(!req.body.adress || !req.body.boliers || !req.body.companyId || !req.body.fullname || !req.body.phone) {
        res.status(400).send ({msg: "Content can not be empty"});
        return;
    }

    //Create a new building
    const building = new buildings({
        adress: req.body.adress,
        boilers: req.body.boilers,
        companyId: req.body.companyId,
        fullname: req.body.fullname,
        phone: req.body.phone,
    });

    //Save building in the database
    building
        .save(building)
        .then(data => {
            res.send(data);
        })
        .catch(err=>{ 
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the building."
            });
        });
};

// Get all buildings
exports.findAll = (req, res) => {
    buildings.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                   err.message || "Some error occurred while getting all buildings." 
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
            res.send(data)
        })
        .catch(err => {
            res.status(500).send ({
                message:
                     "Some error occurred while retrieving building."
            });
        });
}


// Delete a Building by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    buildings.findOneAndRemove({id}, {useFindAndModify: false})
    .then (data =>
        res.send({message: "Building was deleted successfully."})    
    )
    .catch(err => {
        res.status(500).send ({
            message: "Error removing building with id:" + id
        });
    });
};