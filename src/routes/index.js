const boilersRouter = require('./boilersRoutes')
const router = require("express").Router();

router.use('/boilers', boilersRouter)

module.exports = router;