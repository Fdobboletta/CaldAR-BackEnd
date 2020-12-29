const Technicians = require("../models/technician");
const Appointments = require("../models/appointment");

// Add a new Technician
exports.create = (req, res) => {
  const capabilities = req.body.capabilities;
  const hour_rate = req.body.hour_rate;
  const phone = req.body.phone;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  //Validate Request
  if(!capabilities) {
    res.status(400).send ({msg: "Capabilities are required. Enter a capabilitie type."});
    return;
  }  
  
  if(!hour_rate) {
    res.status(400).send ({msg: "Hour rate is required."});
    return;   
  } 
  
  if(!phone) {
    res.status(400).send ({msg: "Phone number is required."});
    return; 
  }
  
  if(!firstName) {
    res.status(400).send ({msg: "First name is required."});
    return;
  }
  
  if(!lastName) {
    res.status(400).send ({msg: "Last name is required."});
    return;
  }

  //Create a new Technician
  const technician = new Technicians({
    capabilities: req.body.capabilities,
    hour_rate: req.body.hour_rate,
    monthly_capacity: req.body.monthly_capacity,
    phone: req.body.phone,
    birthdate: req.body.birthdate,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  //Save Technician in the database
  technician
    .save(technician)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Technician.",
      });
    });
};

// Update a Technician by Id
exports.update = (req, res) => {
  const capabilities = req.body.capabilities;
  const hour_rate = req.body.hour_rate;
  const phone = req.body.phone;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  // Validate request
  if(!capabilities) {
    res.status(400).send ({msg: "Capabilities are required. Enter a capabilitie type."});
    return;
  }  
  
  if(!hour_rate) {
    res.status(400).send ({msg: "Hour rate is required."});
    return;   
  } 
  
  if(!phone) {
    res.status(400).send ({msg: "Phone number is required."});
    return; 
  }
  
  if(!firstName) {
    res.status(400).send ({msg: "First name is required."});
    return;
  }

  if(!lastName) {
    res.status(400).send ({msg: "Last name is required."});
    return;
  }

  Technicians.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Technician with id=${req.params.id}. Maybe Technician was not found!`,
        });
      }
      res.status(200).send({
        message: "Technician was updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Technician with id " + req.params.id,
      });
    });
};

// Delete a Technician with an specified Id
exports.delete = (req, res) => {
  Technicians.findByIdAndRemove(req.params.id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot delete Technician with id ${req.params.id}. Maybe Technician was not found.`,
        });
      }
      Appointments.deleteMany({ technician: req.params.id }).then(() => {
        res.status(200).send({
          message: "Technician was deleted successfully.",
        })
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error removing Technician with id ${req.params.id}.`
      });
    });
};

// Get all Technicians
exports.findAll = (req, res) => {
  Technicians.find({})
    .populate({
      path: 'capabilities',
      model: 'BoilerTypes',
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while getting all the technicians.",
      });
    });
};

// Get Technician by Id
exports.findById = (req, res) => {
  Technicians.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Technician with id ${req.params.id} was not found.`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the technician.",
      });
    });
};

// Get all Technicians with a specific attribute (firstName)
exports.findByAttribute = (req, res) => {
  Technicians.find({ firstName: req.params.firstName })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Technician with first name ${req.params.firstName} was not found.`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting the technicians.",
      });
    });
};
