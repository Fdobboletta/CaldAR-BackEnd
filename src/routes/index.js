const companyRouter = require('./companyRoutes')
const express = require('express');
const router = express.Router();
const boilersRouter = require('./boilersRoutes')

router.use('/company', companyRouter);
router.use('/boilers', boilersRouter)

module.exports = router;