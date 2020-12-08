const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const boilerTypesSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const BoilerTypes = mongoose.model("BoilerTypes", boilerTypesSchema);

module.exports = BoilerTypes;
