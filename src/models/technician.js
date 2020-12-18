const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technicianSchema = new Schema({
  capabilities: {
    type: [Schema.Types.ObjectId],
    ref: "BoilerTypes",
  },
  hour_rate: {
    type: Number,
    required: true,
  },
  monthly_capacity: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});
const Technicians = mongoose.model("Technicians", technicianSchema);
module.exports = Technicians;
