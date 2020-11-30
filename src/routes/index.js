const boilerTypesRouter = require('./boilerTypesRoutes')
const express = require('express');
const router = express.Router();

router.use('/types', boilerTypesRouter)

module.exports = router;