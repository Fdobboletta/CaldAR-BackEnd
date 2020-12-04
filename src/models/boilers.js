const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boilersSchema = new Schema(
    {
        description:{
            type: String,
            required: true,
        },
        boilerType:{
            type: Schema.Types.ObjectId,
            ref: "Type",
            required: true,
        },
        maintenance_period:{
            type: String,
            required: true, 
        },
        hour_maintenance_cost:{
            type: Number,
            required: true,
        },
        hour_eventual_cost: {
            type: Number,
            required: true,
        }
    }
)
const Boilers = mongoose.model('Boilers', boilersSchema);
module.exports = Boilers;