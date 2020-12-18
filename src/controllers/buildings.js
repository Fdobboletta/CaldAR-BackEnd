const buildings = require("../models/buildings");

// Add a new Building
exports.create = (req, res) => {
    const validateBuildingAddress = !req.body.address;
    const validateBuildingName = !req.body.fullname;
    const validateAddressAndName = !req.body.address && !req.body.fullname;
    const validatePhone = String (req.body.phone).length; 
    if(validateAddressAndName) {
        res.status(400).send ({msg: "Buildings must have name and address, remember to enter both"});
        return;
        
    }else if(validateBuildingAddress) {
        res.status(400).send ({msg: "Buildings must have adress, remember to enter one "});
        return;

    }else if(validateBuildingName) {
        res.status(400).send ({msg: "Buildings must have name, remember to enter one"});
        return;
    }

    if (validatePhone < 8 || validatePhone > 15){
        res.status(400).send ({msg: "Phone number must have between 8 and 15 digits"});
        return;
    }
    
    // Create a new building
    const building = new buildings({
        address: req.body.address,
        companyId: req.body.companyId,
        fullname: req.body.fullname,
        phone: req.body.phone,
    });

  // Save building in the database
  building
    .save(building)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while creating the building.",
      });
    });
};

// Get all buildings
exports.findAll = (req, res) => {
  buildings
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while getting all buildings.",
      });
    });
};

// Get Building by ID
exports.findById = (req, res) => {
  buildings
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `building with id ${req.params.id} was not found`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while retrieving building.",
      });
    });
};

// Delete a Building by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    buildings.findOneAndRemove(req.params.id, {useFindAndModify: false})
    .then (data => {
        if (!data) {
            return res.status(404).send ({
                message: `There is no building with Id: ${req.params.id}`
            })
        }
        Boilers.deleteMany(
            {building: req.params.id})
            .then(function(){
                res.status(200).send({message: "Building was deleted successfully."})    
            })     
    })
    .catch(err => {
        res.status(500).send ({
            message: "Error removing building with id:" + id
        });
      }
      res.status(200).send({ message: "Building was deleted successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error removing building with id:" + id,
      });
    });
};

// Update a Building by Id
exports.update = (req, res) => {
    const validateBuildingAddress = !req.body.address;
    const validateBuildingName = !req.body.fullname;
    const validateAddressAndName = !req.body.address && !req.body.fullname;
    const validatePhone = String (req.body.phone).length;
    if(validateAddressAndName) {
        res.status(400).send ({msg: "Buildings must have name and address, remember to enter both"});
        return;
    }else if(validateBuildingAddress) {
        res.status(400).send ({msg: "Buildings must have adress, remember to enter one"});
        return;
    }else if(validateBuildingName) {
        res.status(400).send ({msg: "Buildings must have name, remember to enter one"});
        return;
    }
    if (validatePhone < 8 || validatePhone > 15){
        res.status(400).send ({msg: "Phone number must have between 8 and 15 digits"});
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
      }
      res.status(200).send({ message: "Building updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating building with id: ${req.params.id}`
      });
    });
};

// Get all Buildings with a specific attribute (CompanyId)
exports.findByAttribute = (req, res) => {
  buildings
    .find({ companyId: req.params.companyId })
    .then((data) => {
      if (data.length < 1) {
        return res.status(404).send({
          message: `Company with id ${req.params.companyId} was not found`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error occurred while getting all buildings from the Company.",
      });
    });
};
