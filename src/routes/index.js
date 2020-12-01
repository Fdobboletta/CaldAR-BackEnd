const boilerTypesRouter = require('./boilerTypesRoutes');
const companyRouter = require('./companyRoutes');
const boilersRouter = require('./boilersRoutes');
const technicianRouter = require('./technicianRoutes');
const express = require('express');
const router = express.Router();

router.use('/types', boilerTypesRouter);
router.use('/company', companyRouter);
router.use('/boilers', boilersRouter);
router.use('/technicians', technicianRouter);

module.exports = router;