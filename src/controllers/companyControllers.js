const Company = require(`../models/Company`);
const Buildings = require(`../models/buildings`);

const fullNamePatt = /[a-zA-Z]+\s[a-zA-Z]+/;
const emailPatt = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const exclude = /\d/;
const cuitPatt = /[0-9]{11}/;
const fiscalAddressPatt =  /[a-zA-Z]{5,}\s\d+/;

// Create new Company
exports.create = (req, res) => {
    // Validate Request
    const emptyParams = !req.body.companyName || !req.body.cuit || !req.body.email || !req.body.fiscalAddress;
    
    if(emptyParams){
        res.status(400).json({msg: `Content can not be empty.`});
        return;
    }
    
    if (fullNamePatt.test(req.body.companyName) === false || exclude.test(req.body.companyName) === true){
        return res.status(400).json({msg: `Full name not valid, please use only letters`})
    }    
    if (emailPatt.test(req.body.email) === false){
        return res.status(400).json({msg: `Email not valid`})
    }
    if (cuitPatt.test(req.body.cuit) === false){
        return res.status(400).json({msg: `Cuit not valid`})
    }
    if (fiscalAddressPatt.test(req.body.fiscalAddress) === false){
        return res.status(400).json({msg: `Address not valid`})
    }

    // Create a new Company
    const company = new Company({
        companyName: req.body.companyName,
        cuit: req.body.cuit,
        email: req.body.email,
        buildings:req.body.buildings,
        fiscalAddress: req.body.fiscalAddress,
    })

    // Save the new Company in the DataBase
    company
        .save(company)
        .then(data => {
            res.status(200).send(data);
        })
        .catch((err => { 
            res.status(500).send({
              message:
                err.message || `Some error occurred while creating the company.`
            });
        }))
}

// Get all Companies
exports.findAll = (req, res) => {
    Company.find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                   err.message || `Some error occurred while getting all Companies.` 
            })
        }) 
}

// Get Company by ID
exports.findById = (req, res) => {
    // Validate
    const id = req.params.id;

    if(!id){
        res.status(400).json({msg: `Content can not be empty.`});
        return;  
    }
    Company.findById(id)
        .then(data => {
            if(!data){
                return res.status(404).send({msg: `Company Id not found`})
            }
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                   err.message || `Some error occurred while getting all Companies.` 
            })
        }) 
}

// Get all companies with an specific attribute
exports.findByAttr = (req, res) => {
    Company.find({companyName: req.params.companyName})
        .then(data => {
            if(data.length < 1){
                return res.status(404).send({
                    msg: `Company with name ${req.params.companyName} was not found`
                });
            }
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Some error occurred while getting companies.` 
            });
        });
};

// Update existing Company selected by id
exports.update = (req, res) => {
    const emptyParams = !req.body.companyName || !req.body.cuit || !req.body.email || !req.body.fiscalAddress;
    // Validate request
    
    if(emptyParams){
        res.status(400).json({msg: `Content can not be empty.`});
        return;
    }
    //Validate each camp
    if (fullNamePatt.test(req.body.companyName) === false || exclude.test(req.body.companyName) === true){
        return res.status(400).json({msg: `Full name not valid, please use only letters`})
    }    
    if (emailPatt.test(req.body.email) === false){
        return res.status(400).json({msg: `Email not valid`})
    }
    if (cuitPatt.test(req.body.cuit) === false){
        return res.status(400).json({msg: `Cuit not valid`})
    }
    if (fiscalAddressPatt.test(req.body.fiscalAddress) === false){
        return res.status(400).json({msg: `Address not valid`})
    }

    Company.findByIdAndUpdate(req.params.id, req.body , { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Company with id=${req.params.id}. Maybe Company was not found!`
                });
            }
            res.status(200).send({
                message: `Company was update successfully.`
            });
        })
        .catch((err => { 
            res.status(500).send({
                message: `Error updating Company with id:` + req.params.id
            });
        }))
};

// Delete Company with an specified Id in the request
exports.delete = (req, res) => {
    Company.findByIdAndRemove(req.params.id , { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Cannot delete Company with id=${req.params.id}. Maybe Company was not found.`
                });
            }     
        Buildings.deleteMany({companyId: req.params.id}).then(function(){
            res.status(200).send({
                msg: `Company was deleted successfully`
            })
        })
    })
    .catch(err => { 
        res.status(500).send({
            message: `Some error occurred while removing the Company with id:` + req.params.id
        });
    })
}