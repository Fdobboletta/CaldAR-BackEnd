const boilerTypesRouter = require('./boilerTypesRoutes');
const buildingsRouter = require('./buildingsRoutes');
const companyRouter = require('./companyRoutes');
const boilersRouter = require('./boilersRoutes');
const technicianRouter = require('./technicianRoutes');
const appointmentsRouter = require('./appointmentsRoutes');
const express = require('express');
const router = express.Router();

router.use('/types', boilerTypesRouter);
router.use('/company', companyRouter);
router.use('/boilers', boilersRouter);
router.use('/technicians', technicianRouter);
router.use('/appointment', appointmentsRouter);
router.use('/buildings', buildingsRouter);

module.exports = router;