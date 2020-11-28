const buildings = require("../controllers/buildingsController")
const router = require("express").Router();

// Add a new Building
router.post("/", buildings.create);

// Get all Buildings
router.get("/", buildings.findAll);

// Delete a Building

module.exports = router;