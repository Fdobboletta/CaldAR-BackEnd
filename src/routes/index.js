const boilerTypesRouter = require("./boilerTypesRoutes");
const buildingsRouter = require("./buildingsRoutes");
const companyRouter = require("./companyRoutes");
const boilersRouter = require("./boilersRoutes");
const technicianRouter = require("./technicianRoutes");
const appointmentsRouter = require("./appointmentsRoutes");
const express = require("express");
const path = require("path");

const router = express.Router();
router.use(express.static(path.join(__dirname, "../../public")));
router.use(express.static("public"));

router.use('/api/v1/types', boilerTypesRouter);
router.use('/api/v1/buildings', buildingsRouter);
router.use('/api/v1/companies', companyRouter);
router.use('/api/v1/boilers', boilersRouter);
router.use('/technicians', technicianRouter);
router.use('/api/v1/appointments', appointmentsRouter);

router.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../../public", "index.html"));
});

module.exports = router;
