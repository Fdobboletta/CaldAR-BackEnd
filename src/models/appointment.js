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
            type: timestamp,
            required: true,
        },
        end_timestamp: {
            type: timestamp,
            required: true,
        },
        monthly_hourse: {
            type: Number,
            required: true,
        },

    }
)
module.exports = mongoose.model('Appointments', appointmentsSchema);