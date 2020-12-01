const boilers = require("../controllers/boilersController");
const router = require("express").Router();

// Add a new Boiler
router.post("/", boilers.create);

// Get all Boilers
router.get("/", boilers.findAll)

// Get Boiler by Id
router.get("/:id", boilers.findById)

// Delete a Boiler
router.delete("/:id", boilers.delete)

// Update a Boiler
router.put("/:id", boilers.update)

// Get all Boilers with a specific attribute
router.get("/attribute/:boilerType", boilers.find)

module.exports = router;