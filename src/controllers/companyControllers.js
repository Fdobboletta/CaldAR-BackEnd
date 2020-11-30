const Company = require('../models/Company');

//Create new type
exports.create = (req, res) => {
    //validate
    const emptyParams = !req.body.companyName || !req.body.cuit || !req.body.email || !req.body.fiscalAddress;

    if(emptyParams){
        res.status(400).json({msg: 'Content can not be empty.'});
        return;
    }
    //create a element with the new boiler Type
    const company = new Company({
        companyName: req.body.companyName,
        cuit: req.body.cuit,
        email: req.body.email,
        buildings:req.body.buildings,
        fiscalAddress: req.body.fiscalAddress,
    })
    //Save the new boiler Type in the DataBase
    company.save(company)
        .then(data => {
            console.log(data);
            res.send(data);
            res.status(200);
        })
        .catch((err => { 
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the company."
            });
        }))

}

//Get all types
exports.findAll = (req, res) => {
    Company.find({})
        .then(data => {
            res.send(data);
            res.status(200);
        })
        .catch(err => {
            res.status(500).send({
                message:
                   err.message || "Some error occurred while getting all Companies." 
            })
        }) 
}

//Get one type by ID
exports.findById = (req, res) => {
    // validate
    const id = req.params.id;

    if(!id){
        res.status(400).json({msg: 'Content can not be empty.'});
        return;  
    }
    Company.findById(id)
        .then(data => {
            if(!data){
                return res.status(404).send({msg: 'Company Id not found'})
            }
            res.send(data);
            res.status(200);
        })
        .catch(err => {
            res.status(500).send({
                message:
                   err.message || "Some error occurred while getting all Companies." 
            })
        }) 
}
/*
//Get types by attribute
exports.findByAttr = (req, res) => {
    Company.find({description: req.params.description})
        .then(data => {
            if(!data){
                return res.status(404).send({msg: 'boilerType Id not found'})
            }
            res.send(data);
            res.status(200);
        })
        .catch(err => {
            res.status(500).send({
                message:
                   err.message || "Some error occurred while getting all Company." 
            })
        }) 
}


//Update existing type selected by id
exports.update = (req, res) => {
    //validate
    if(emptyParams){
        res.status(400).json({msg: 'Content can not be empty.'});
        return;
    }

    Company.findByIdAndUpdate(id, req.body , { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Cannot update Boiler Type with id=${id}. Maybe Type was not found!`
                });
            }
            res.send(data);
            console.log(data);
            res.status(200);
        })
        .catch((err => { 
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the boiler."
            });
        }))

}

//Delete type
exports.delete = (req, res) => {

    //validate
    if(!id){
        res.status(400).json({msg: 'Content can not be empty.'});
        return;
    }

    Company.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Cannot update Boiler Type with id=${id}. Maybe Type was not found!`
                });
            }
            res.send(data);
            console.log('boiler type deleted');
        })
        .catch((err => { 
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the boiler."
            });
        }))

}
*/