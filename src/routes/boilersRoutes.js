const boilers = require("../controllers/boilersController")
const router = require("express").Router();

// Add a new Boiler
router.post("/", boilers.create);

// Get all Boilers
router.get("/", boilers.findAll);

// Get Boiler by Id
router.get("/:id", boilers.findById);


// Delete a Boiler
router.delete("/:id", boilers.delete)

module.exports = router;