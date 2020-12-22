const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingsSchema = mongoose.Schema(
    {
        address:{
            type: String,
            required: true,
        },
        companyId:{
            type: Schema.Types.ObjectId, 
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

module.exports = mongoose.model("buildings", buildingsSchema);
