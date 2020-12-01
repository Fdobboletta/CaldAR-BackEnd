const technicianRouter = require('./technicianRoutes')
const router = require("express").Router();

router.use('/technicians', technicianRouter)

module.exports = router;