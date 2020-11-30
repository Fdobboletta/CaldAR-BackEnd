const mongoose = require('mongoose');
//Initialice schemas
const Schema = mongoose.Schema
//Create new schema
const CompanySchema = mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        cuit: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        buildings: {
            building:[],
            type: String,
        },
        fiscalAddress: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },

);
//Set a model based on the scheme
const Company = mongoose.model('Company', CompanySchema);

//export the new model to the rest of the app
module.exports = Company;
