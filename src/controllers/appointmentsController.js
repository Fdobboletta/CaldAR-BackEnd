const appointments = require ("../models/appointment.js");

//Add new appointment
exports.create = (req,res) => {
    if(!req.body.building) {
            res.status(400).send ({msg: "Building is required. Please, enter a building id"});
            return;
        } else if(!req.body.boiler) {
                res.status(400).send ({msg: "Boiler identification is required. Please, enter a boiler id"});
                return; 
        } else if(!req.body.technician) {
                res.status(400).send ({msg: "Technician's name is required. Please, enter a name"});
                return; 
        } else if(!req.body.start_timestamp) {
                res.status(400).send ({msg: "Start time is required. Please, enter a start time"});
                return;
        }
    //Create a new appointment
    const appointment = new appointments ({
        building: req.body.building,
        boiler: req.body.boiler,
        technician: req.body.technician,
        start_timestamp: req.body.start_timestamp,
        end_timestamp: req.body.end_timestamp,
        monthly_hours: req.body.monthly_hours,
        maintainceType: req.body.maintainceType,
    });

    //Save appointment in the DB
    appointment
        .save(appointment)
        .then(data => {
            res.status(200).send(data);
        })
        .catch (err => {
            res.status(500).send ({
                message:
                    err.message || "Some error ocurred while creating the building"
            });
        });
};

exports.findAll = (req,res) => {
    appointments.find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send ({
                message: "Some error ocurred while gettin all appointments"
            })
        })
};

exports.update = (req,res) => {
    if(!req.body.building) {
        res.status(400).send ({msg: "Building is required. Please, enter a building id"});
        return;
    } else if(!req.body.boiler) {
            res.status(400).send ({msg: "Boiler identification is required. Please, enter a boiler id"});
            return; 
    } else if(!req.body.technician) {
            res.status(400).send ({msg: "Technician's name is required. Please, enter a name"});
            return; 
    } else if(!req.body.start_timestamp) {
            res.status(400).send ({msg: "Start time is required. Please, enter a start time"});
            return;
    }
    appointments.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
        .then (data => {
            if (!data) {
                res.status(404).send ({
                    message: `Cannot update the appointment with id=${req.params.id}. Maybe appointment was not found`
                });
            }
            res.status(200).send ({ message: "Appointment was updated successfully"});
        })
        .catch (err => {
            res.status(500).send ({
                message: "Error updating tje appointment with id=" + id
            });
        });
};

// Get appointment by id
exports.findById = (req,res) => {
    appointments.findById(req.params.id)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                  message: `Appointment with id ${req.params.id} was not found`
                })
            }
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send ({
                message: "Some error occurred while retrieving appintment."
            });
        });
};

//Delete an appointment by id
exports.delete = (req, res) => {
    appointments.findByIdAndRemove(req.params.id, {useFindAndModify: false})
        .then (data => {
            if (!data) {
                return res.status(404).send ({
                    message: `Cannot delete appointment witch id ${req.params.id}. Maybe appointmnet was not found`
                })
            }
            res.status(200).send({message: "Appointment was deleted successfully."});  
        })
        .catch (err => {
            res.status(500).send ({
                message: "Error removing appointment with id:" + id
            });
        });
};

//Find by attribute technician
exports.findByAttribute = (req, res) => {
    appointments.find({technician: req.params.technician})
        .then (data => {
            if (!data) {
                return res.status(404).send({
                    msg: "There is not any appointment with requested techinician"
                })
            }
            res.status(200).send (data);
        })
        .catch (err => {
            res.status(500).send ({
                message: "Some error ocurred while getting all appointments by technician"
            });
        });
};

