const boilerTypesRouter = require("./boilerTypesRoutes");
const buildingsRouter = require("./buildingsRoutes");
const companyRouter = require("./companyRoutes");
const boilersRouter = require("./boilersRoutes");
const technicianRouter = require("./technicianRoutes");
const appointmentsRouter = require("./appointmentsRoutes");
const express = require("express");
const path = require("path");

const router = express.Router();
router.use(express.static("public"));

router.use("/types", boilerTypesRouter);
router.use("/buildings", buildingsRouter);
router.use("/company", companyRouter);
router.use("/boilers", boilersRouter);
router.use("/technicians", technicianRouter);
router.use("/appointment", appointmentsRouter);
router.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../../public", "index.html"));
});

module.exports = router;
