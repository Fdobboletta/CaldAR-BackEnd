const technicians = require("../controllers/technicianController");
const router = require("express").Router();

// Add a new Technician
router.post("/", technicians.create);

module.exports = router;