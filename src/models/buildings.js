const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingsSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  companyId: {
    type: Schema.Types.ObjectId,
  },
  fullname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("buildings", buildingsSchema);
