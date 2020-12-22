const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentsSchema = new Schema (
    {
        building: {
            type: Schema.Types.ObjectId,
            ref: "buildings",
            required: true,
        },
        boiler: {
            type: Schema.Types.ObjectId,
            ref: "Boilers",
            required: true, 
        },
        technician: {
            type: Schema.Types.ObjectId,
            ref: "Technicians",
            required: true,
        },
        start_timestamp: {
            type: Date,
            required: true,
        },
        end_timestamp: {
            type: Date,
        },
        monthly_hours: {
            type: Number,
        },
        maintainceType: {
            type: String,
        }

    }
)
const Appointments = mongoose.model('Appointment', appointmentsSchema);
module.exports = Appointments;
