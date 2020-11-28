const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingsSchema = new Schema(
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
export default mongoose.model('buildings', buildingsSchema);