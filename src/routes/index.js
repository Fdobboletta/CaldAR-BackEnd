const buildingsRouter = require('./buildingsRoutes');
const router = require("express").Router();

router.use('/buildings', buildingsRouter)

module.exports = router;