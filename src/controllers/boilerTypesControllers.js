const Boilers = require("../models/boilers");
const BoilerTypes = require("../models/boilerTypes");
const Technicians = require("../models/technician");

// Add a new BoilerType
exports.create = (req, res) => {
  //Validate Request
  if (!req.body.description) {
    res.status(400).json({ msg: "Content can not be empty." });
    return;
  }

  //Create a new BoilerType
  const boilerType = new BoilerTypes({
    description: req.body.description,
  });

  //Save BoilerType in the database
  boilerType
    .save(boilerType)
    .then((data) => {
      res.send(data);
      res.status(200);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the type.",
      });
    });
};

// Get all Boilers
exports.findAll = (req, res) => {
  BoilerTypes.find({})
    .then((data) => {
      res.send(data);
      res.status(200);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting all boilerTypes.",
      });
    });
};

// Get BoilerType by Id
exports.findById = (req, res) => {
  // Validation Request
  if (!req.params.id) {
    res.status(400).json({ msg: "Content can not be empty." });
    return;
  }
  BoilerTypes.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({ msg: "boilerType Id not found" });
      }
      res.send(data);
      res.status(200);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting all boilerTypes.",
      });
    });
};

// Get all BoilersTypes with a specific attribute
exports.findByAttr = (req, res) => {
  BoilerTypes.find({ description: req.params.description })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ msg: "boilerType Id not found" });
      }
      res.send(data);
      res.status(200);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting all boilerTypes.",
      });
    });
};

exports.update = (req, res) => {
  if (!req.body.description) {
    res.status(400).json({ msg: "Content can not be empty." });
    return;
  }

  BoilerTypes.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot update Boiler Type with id=${req.params.id}. Maybe Type was not found!`,
        });
      }
      res.send(data);
      res.status(200);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the boiler.",
      });
    });
};

// Delete a BoilerType with an specified Id in the request
exports.delete = (req, res) => {
  // Validation Request
  if (!req.params.id) {
    res.status(400).json({ msg: "Content can not be empty." });
    return;
  }

  BoilerTypes.findByIdAndRemove(req.params.id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot update Boiler Type with id=${req.params.id}. Maybe Type was not found!`,
        });
      }
      Boilers.deleteMany({ boilerType: req.params.id }).then(function () {});
      Technicians.updateMany(
        { capabilities: req.params.id },
        { $pull: { capabilities: req.params.id } }
      ).then(function () {});
      res.status(200).send({
        message:
          "Boiler Type was deleted successfully from technicians and boilers.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the boiler.",
      });
    });
};
