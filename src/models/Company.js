const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CompanySchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    cuit: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fiscalAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
