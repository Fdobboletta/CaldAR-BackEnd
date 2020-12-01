const Technicians = require("../models/technician");

// Add a new Technician
exports.create = (req, res) => {
    //Validate Request
    if(!req.body.appointments || 
        !req.body.capabilities || 
        !req.body.hour_rate || 
        !req.body.monthly_capacity || 
        !req.body.phone ||
        !req.body.birthdate ||
        !req.body.firstName ||
        !req.body.lastName) {
        res.status(400).send ({msg: "Content cannot be empty"});
        return;
    }

    //Create a new Technician
    const technician = new Technicians({
        appointments: req.body.appointments, 
        capabilities: req.body.capabilities,
        hour_rate: req.body.hour_rate,
        monthly_capacity: req.body.monthly_capacity,
        phone: req.body.phone,
        birthdate: req.body.birthdate,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    //Save Technician in the database
    technician
        .save(technician)
        .then(data => {
            res.send(data);
        })
        .catch(err=>{ 
            res.status(500).send({
              message: "Some error occurred while creating the boiler."
            });
        });
};

// Update a Technician by Id
exports.update = (req, res) => {
    const emptyAttribute = !req.body.description || !req.body.boilerType || !req.body.maintenance_period || !req.body.hour_maintenance_cost || !req.body.hour_eventual_cost
    // Validate request
    if(emptyAttribute) {
        res.status(400).send({ message: "Content cannot be empty" });
      return;
    }
  
    Technicians.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Technician with id=${req.params.id}. Maybe Technician was not found!`
                });
            }
            res.status(200).send ({ 
                message: "Technician was updated successfully." 
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Technician with id ", id
            });
        });
};

