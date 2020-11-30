//initialice mongoose
const mongoose = require('mongoose');
//Initialice schemas
const Schema = mongoose.Schema
//Create new schema
const boilerTypesSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },

);
//Set a model based on the scheme
const BoilerTypes = mongoose.model('BoilerTypes', boilerTypesSchema);

//export the new model to the rest of the app
module.exports = BoilerTypes;