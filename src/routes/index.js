const appointmentsRouter = require('./appointmentsRoutes');
const router = require("express").Router();

router.use('/appointment', appointmentsRouter)

module.exports = router;