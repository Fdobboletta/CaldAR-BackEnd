const Technicians = require("../models/technician");

// Add a new Technician
exports.create = (req, res) => {
    //Validate Request
    const emptyAttribute = !req.body.appointments || !req.body.capabilities || !req.body.hour_rate || !req.body.monthly_capacity || !req.body.phone || !req.body.birthdate || !req.body.firstName || !req.body.lastName;
    if (emptyAttribute) {
        res.status(400).send({ msg: "Content cannot be empty" });
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
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while creating the boiler."
            });
        });
};

// Update a Technician by Id
exports.update = (req, res) => {
    const emptyAttribute = !req.body.appointments || !req.body.capabilities || !req.body.hour_rate || !req.body.monthly_capacity || !req.body.phone || !req.body.birthdate || !req.body.firstName || !req.body.lastName;
    // Validate request
    if (emptyAttribute) {
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
            res.status(200).send({
                message: "Technician was updated successfully."
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Technician with id " + req.params.id
            });
        });
};

// Delete a Technician with an specified Id
exports.delete = (req, res) => {
    Technicians.findByIdAndRemove(req.params.id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Cannot delete Technician with id ${req.params.id}. Maybe Technician was not found.`
                })
            }
            res.status(200).send({
                message: "Technician was deleted successfully."
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error removing Technician with id " + req.params.id
            });
        });
};

// Get all Technicians
exports.findAll = (req, res) => {
    Technicians.find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while getting all the technicians."
            })
        })
};

// Get Technician by Id
exports.findById = (req, res) => {
    Technicians.findById(req.params.id)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Technician with id ${req.params.id} was not found`
                })
            }
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while retrieving the technician."
            });
        });
};

// Get all Technicians with a specific attribute (firstName)
exports.findByAttribute = (req, res) => {
    Technicians.find({ firstName: req.params.firstName })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Technician with first name ${req.params.firstName} was not found`
                })
            }
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while getting the technicians."
            })
        })
};