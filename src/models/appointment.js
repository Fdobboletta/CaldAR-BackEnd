const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentsSchema = new Schema (
    {
        building: {
            // type: Schema.ObjectiId,
            // ref: "id_building",
            type: String,
            required: true,
        },
        boiler: {
            // type: Schema.ObjectiId,
            // ref: "id_boiler",
            type: String,
            required: true, 
        },
        technician: {
            // type: Schema.ObjectiId,
            // ref: "id_user",
            type: String,
            required: true,
        },
        start_timestamp: {
            type: String,
            required: true,
        },
        end_timestamp: {
            type: String,
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