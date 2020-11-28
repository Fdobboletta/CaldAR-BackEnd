const boilers = require("../controllers/boilersController.js")
var router = require("express").Router();

// Add a new Boiler
router.post("/", boilers.create);

// Get all Boilers
router.get("/", boilers.findAll);