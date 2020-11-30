const companyRouter = require('./companyRoutes')
const express = require('express');
const router = express.Router();

router.use('/company', companyRouter);

module.exports = router;