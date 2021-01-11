const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingsSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("buildings", buildingsSchema);
