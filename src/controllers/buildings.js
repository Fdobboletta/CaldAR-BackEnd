const buildings = require("../models/buildings");

// Add a new Building
exports.create = (req, res) => {
  const validateBuildingAddress = !req.body.address;
  const validateBuildingName = !req.body.fullName;
  const validateAddressAndName = !req.body.address && !req.body.fullName;
  const validatePhone = String(req.body.phone).length;

  if (validateAddressAndName) {
    return res.status(400).json({
      error: "Buildings must have name and address, remember to enter both",
    });
  } else if (validateBuildingAddress) {
    return res.status(400).json({
      error: "Buildings must have adress, remember to enter one",
    });
  } else if (validateBuildingName) {
    return res.status(400).json({
      error: "Buildings must have name, remember to enter one",
    });
  }

  if (validatePhone < 8 || validatePhone > 15) {
    return res.status(400).json({
      error: "Phone number must have between 8 and 15 digits",
    });
  }

  // Create a new building
  const building = new buildings({
    address: req.body.address,
    company: req.body.company,
    fullName: req.body.fullName,
    phone: req.body.phone,
  });

  // Save building in the database
  building
    .save(building)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Some error occurred while creating the building." + err,
      });
    });
};

// Get all buildings
exports.findAll = (req, res) => {
  buildings
    .find({})
    .populate("company")
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(500).json({
        error: "Some error occurred while getting all buildings." + err,
      });
    });
};

// Get Building by ID
exports.findById = (req, res) => {
  buildings
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          error: `Building with id ${req.params.id} was not found`,
        });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Some error occurred while retrieving building." + err,
      });
    });
};

// Delete a Building by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  buildings
    .findByIdAndUpdate(req.params.id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          message: `There is no building with Id: ${req.params.id}`,
        });
      } else {
        return res.status(200).json({
          msg: "The building " + id + " has been deleted successfully.",
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: "Error removing building with id: " + id,
      });
    });
};

// Update a Building by Id
exports.update = (req, res) => {
  const validateBuildingAddress = !req.body.address;
  const validateBuildingName = !req.body.fullName;
  const validateAddressAndName = !req.body.address && !req.body.fullName;
  const validatePhone = String(req.body.phone).length;
  const id = req.params.id;

  if (validateAddressAndName) {
    return res.status(400).json({
      error: "Buildings must have name and address, remember to enter both",
    });
  } else if (validateBuildingAddress) {
    return res.status(400).json({
      error: "Buildings must have adress, remember to enter one",
    });
  } else if (validateBuildingName) {
    return res.status(400).json({
      error: "Buildings must have name, remember to enter one",
    });
  } else if (validatePhone < 8 || validatePhone > 15) {
    return res.status(400).json({
      error: "Phone number must have between 8 and 15 digits",
    });
  }

  buildings
    .findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .json({ message: `There is no building with id=${req.params.id}` });
      }
      return res
        .status(200)
        .json({ message: "Building updated successfully." });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        error: "Error updating building with id=" + id,
      });
    });
};

// Get all Buildings with a specific attribute
exports.findByAttribute = (req, res) => {
  buildings
    .find({ company: req.params.company })
    .then((data) => {
      if (data.length < 1) {
        return res.status(404).json({
          error: `Company with id ${req.params.company} was not found`,
        });
      }
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(500).json({
        error: "Some error occurred while getting a building.",
      });
    });
};
