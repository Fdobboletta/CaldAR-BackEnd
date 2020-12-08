const appointments = require("../models/appointment.js");

//Add new appointment
exports.create = (req, res) => {
  const emptyAttribute =
    !req.body.building ||
    !req.body.boiler ||
    !req.body.technician ||
    !req.body.start_timestamp ||
    !req.body.end_timestamp ||
    !req.body.monthly_hours ||
    !req.body.maintainceType;
  if (emptyAttribute) {
    res.status(400).send({ msg: "Content can not be empty" });
    return;
  }
  //Create a new appointment
  const appointment = new appointments({
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
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while creating the building",
      });
    });
};

exports.findAll = (req, res) => {
  appointments
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while gettin all appointments",
      });
    });
};

exports.update = (req, res) => {
  const emptyAttribute =
    !req.body.building ||
    !req.body.boiler ||
    !req.body.technician ||
    !req.body.start_timestamp ||
    !req.body.end_timestamp ||
    !req.body.monthly_hours ||
    !req.body.maintainceType;
  // Validation
  if (emptyAttribute) {
    res.status(400).send({ msg: "Content can not be empty" });
    return;
  }
  appointments
    .findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update the appointment with id=${req.params.id}. Maybe appointment was not found`,
        });
      }
      res.status(200).send({ message: "Appointment was updated successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating tje appointment with id=" + id,
      });
    });
};

// Get appointment by id
exports.findById = (req, res) => {
  appointments
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Appointment with id ${req.params.id} was not found`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while retrieving appintment.",
      });
    });
};

//Delete an appointment by id
exports.delete = (req, res) => {
  appointments
    .findByIdAndRemove(req.params.id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot delete appointment witch id ${req.params.id}. Maybe appointmnet was not found`,
        });
      }
      res
        .status(200)
        .send({ message: "Appointment was deleted successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error removing appointment with id:" + id,
      });
    });
};

//Find by attribute technician
exports.findByAttribute = (req, res) => {
  appointments
    .find({ technician: req.params.technician })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          msg: "There is not any appointment with requested techinician",
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error ocurred while getting all appointments by technician",
      });
    });
};
