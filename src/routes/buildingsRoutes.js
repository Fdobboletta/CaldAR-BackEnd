const buildings = require("../controllers/buildingsController")
const router = require("express").Router();

// Add a new Building
router.post("/", buildings.create);

// Get all Buildings
router.get("/", buildings.findAll);

// Get Buildings by Id
router.get("/:id", buildings.findById);

// Delete a Building
router.delete("/:id", buildings.delete);

module.exports = router;