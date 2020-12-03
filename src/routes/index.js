const buildingsRouter = require('./buildingsRoutes');
const express = require('express');
const router = express.Router();

router.use('/buildings', buildingsRouter)

module.exports = router;