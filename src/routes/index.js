const boilerTypesRouter = require('./boilerTypesRoutes');
const companyRouter = require('./companyRoutes');
const boilersRouter = require('./boilersRoutes');
const express = require('express');
const router = express.Router();

router.use('/types', boilerTypesRouter);
router.use('/company', companyRouter);
router.use('/boilers', boilersRouter);

module.exports = router;