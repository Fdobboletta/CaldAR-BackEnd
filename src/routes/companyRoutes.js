const express = require("express");
const router = express.Router();
const company = require("../controllers/companyControllers");

// Create new Company
router.post("/", company.create);

// Get all Companies
router.get("/", company.findAll);

// Get Company by ID
router.get("/:id", company.findById);

// Get Company by attribute
router.get("/attribute/:companyName", company.findByAttr);

// Update Company by Id
router.put("/:id", company.update);

// Delete Company
router.delete("/:id", company.delete);

module.exports = router;
