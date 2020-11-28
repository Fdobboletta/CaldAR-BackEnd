const boilers = require("../controllers/boilersController.js")
var router = require("express").Router();

router.use('/boilers', boilers);

// Add a new Boiler
router.post("/", boilers.create);

// Get all Boilers
router.get("/", boilers.findAll);

// Delete a Boiler

module.exports = router;