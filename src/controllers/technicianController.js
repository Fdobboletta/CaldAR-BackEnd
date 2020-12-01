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
