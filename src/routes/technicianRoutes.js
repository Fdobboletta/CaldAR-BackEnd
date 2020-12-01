const technicians = require("../controllers/technicianController");
const router = require("express").Router();

// Add a new Technician
router.post("/", technicians.create);

// Update a Technician
router.put("/:id", technicians.update);

// Delete a Technician
router.delete("/:id", technicians.delete)

// Get all Technicians
router.get("/", technicians.findAll)

// Get Technician by Id
router.get("/:id", technicians.findById)

// Get all Technicians with a specific attribute
router.get("/attribute/:firstName", technicians.findByAttribute)

module.exports = router;