const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingsSchema = mongoose.Schema(
    {
        adress:{
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
            required: false, 
        },
        fullname:{
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: false,
        }
    }
)

module.exports = mongoose.model('buildings', buildingsSchema);