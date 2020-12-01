const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technicianSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        birthdate: {
            type: Date,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        boilerType: {
            type: String,
            required: true,  
        },
    }
)
const Technicians = mongoose.model('Technicians', technicianSchema);
module.exports = Technicians;
