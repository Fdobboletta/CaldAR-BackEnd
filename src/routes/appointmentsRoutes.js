const appointments = require ("../controllers/appointmentsController");
const router = require("express").Router();

//Add new appointment
router.post("/", appointments.create);

//Get all appointments
router.get("/", appointments.findAll);

//Update an appointment
router.put("/:id", appointments.update);

//Get appointment by id
router.get("/:id", appointments.findById);

//Delete appointment by id
router.delete("/:id", appointments.delete);

//Get all appointments by attribute
router.get("/attribute/:technician", appointments.findByAttribute);

module.exports = router;
