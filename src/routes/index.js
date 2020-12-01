  
const technicianRoutes = require('./technicianRoutes')
const router = require("express").Router();

router.use('/technicians', technicianRoutes)

module.exports = router;