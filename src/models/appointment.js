const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentsSchema = new Schema (
    {
        building: {
            type: Schema.Types.ObjectId,
            ref: "Building",
            required: true,
        },
        boiler: {
            type: Schema.Types.ObjectId,
            ref: "Boiler",
            required: true, 
        },
        technician: {
            type: Schema.Types.ObjectId,
            ref: "id_user",
            type: String,
            required: true,
        },
        start_timestamp: {
            type: Date,
            required: true,
        },
        end_timestamp: {
            type: Date,
            required: true,
        },
        monthly_hours: {
            type: Number,
            required: true,
        },
        maintainceType: {
            type: String,
            required: true,
        }

    }
)
const Appointments = mongoose.model('Appointment', appointmentsSchema);
module.exports = Appointments;