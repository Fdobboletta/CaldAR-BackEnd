const Boilers = require("../models/boilers");
const boilers = require("../models/boilers");

// Add a new Boiler
exports.create = (req, res) => {
  const emptyAttribute =
    !req.body.description ||
    !req.body.boilerType ||
    !req.body.maintenance_period ||
    !req.body.hour_maintenance_cost ||
    !req.body.hour_eventual_cost;
  //Validate Request
  if (emptyAttribute) {
    res.status(400).send({ msg: "Content can not be empty" });
    return;
  }

  //Create a new Boiler
  const boiler = new boilers({
    description: req.body.description,
    boilerType: req.body.boilerType,
    maintenance_period: req.body.maintenance_period,
    hour_maintenance_cost: req.body.hour_maintenance_cost,
    hour_eventual_cost: req.body.hour_eventual_cost,
  });

  //Save Boiler in the database
  boiler
    .save(boiler)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while creating the boiler.",
      });
    });
};

// Get all Boilers
exports.findAll = (req, res) => {
  boilers
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while getting all boilers.",
      });
    });
};

// Get Boiler by Id
exports.findById = (req, res) => {
  boilers
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Boiler with id ${req.params.id} was not found`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while retrieving boiler.",
      });
    });
};

// Delete a Boiler with an specified Id in the request
exports.delete = (req, res) => {
  boilers
    .findByIdAndRemove(req.params.id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot delete Boiler with id ${req.params.id}. Maybe Boiler was not found.`,
        });
      }
      res.status(200).send({
        message: "Boiler was deleted successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error removing Boiler with id:" + req.params.id,
      });
    });
};

// Update a Boiler by the Id in the request
exports.update = (req, res) => {
  const emptyAttribute =
    !req.body.description ||
    !req.body.boilerType ||
    !req.body.maintenance_period ||
    !req.body.hour_maintenance_cost ||
    !req.body.hour_eventual_cost;
  // Validate request
  if (emptyAttribute) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  Boilers.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Boiler with id=${req.params.id}. Maybe Boiler was not found!`,
        });
      }
      res.status(200).send({
        message: "Boiler was updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Boiler with id=" + id,
      });
    });
};

// Get all Boilers with a specific attribute (boilerType)
exports.find = (req, res) => {
  boilers
    .find({ boilerType: req.params.boilerType })
    .then((data) => {
      if (data.length < 1) {
        return res.status(404).send({
          message: `Boiler with id ${req.params.boilerType} was not found`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while getting all boilers.",
      });
    });
};
