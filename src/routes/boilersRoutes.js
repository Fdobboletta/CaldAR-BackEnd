const boilers = require("../controllers/boilersController")
const router = require("express").Router();

// Add a new Boiler
router.post("/", boilers.create);

// Get all Boilers
router.get("/", boilers.findAll);

// Delete a Boiler

module.exports = router;