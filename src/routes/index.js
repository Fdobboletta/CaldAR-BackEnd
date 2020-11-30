const boilersRouter = require('./typesRoutes')
const router = require("express").Router();

router.use('/types', boilersRouter)

module.exports = router;