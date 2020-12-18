const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boilersSchema = new Schema(
    {
        description:{
            type: String,
            required: false,
        },
        boilerType:{
            type: Schema.Types.ObjectId,
            ref: "BoilerTypes",
            required: true,
        },
        building:{
            type: Schema.Types.ObjectId,
            ref: "buildings",
            required: true
        },
        maintenance_period:{
            type: String,
            required: false, 
        },
        hour_maintenance_cost:{
            type: Number,
            required: false,
        },
        hour_eventual_cost: {
            type: Number,
            required: false,
        }
    }
)
const Boilers = mongoose.model('Boilers', boilersSchema);
module.exports = Boilers;