const buildings = require("../controllers/buildings")
const router = require("express").Router();

// Add a new Building
router.post("/", buildings.create);

// Get all Buildings
router.get("/", buildings.findAll);

// Get Buildings by Id
router.get("/:id", buildings.findById);

//Get Buildings by attribute
router.get("/attribute/:companyId", buildings.findByAttribute);

//Update a Building by Id
router.put("/:id", buildings.update);

// Delete a Building
router.delete("/:id", buildings.delete);

module.exports = router;