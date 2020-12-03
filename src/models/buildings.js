const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingsSchema = mongoose.Schema(
    {
        address:{
            type: String,
            required: true,
        },
        boilers:{
            //type:  Schema.ObjectId, 
            //ref:"id_boiler", 
            //required: false,
            type: String,
            required: true,
            
        },
        companyId:{
            type: String,
            required: true, 
        },
        fullname:{
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        }
    }
)

module.exports = mongoose.model('buildings', buildingsSchema);