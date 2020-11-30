const BoilerTypes = require('../models/BoilerTypes');

const emptyDescription = !req.body.description;
const id = req.params.id;
//Create new type
exports.create = (req, res) => {
    //validate
    if(emptyDescription){
        res.status(400).json({msg: 'Content can not be empty.'});
        return;
    }
    //create a element with the new boiler Type
    const boilerType = new BoilerTypes({
        description: req.body.description,
    })
    //Save the new boiler Type in the DataBase
    boilerType.save(boilerType)
        .then(data => {
            console.log(data);
            res.send(data);
            res.status(200);
        })
        .catch((err => { 
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the type."
            });
        }))

}

//Get all types
exports.findAll = (req, res) => {
    BoilerTypes.find({})
        .then(data => {
            res.send(data);
            res.status(200);
        })
        .catch(err => {
            res.status(500).send({
                message:
                   err.message || "Some error occurred while getting all boilerTypes." 
            })
        }) 
}

//Get one type by ID
exports.findById = (req, res) => {
    // validate

    if(!id){
        res.status(400).json({msg: 'Content can not be empty.'});
        return;  
    }
    BoilerTypes.findById(id)
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
                   err.message || "Some error occurred while getting all boilerTypes." 
            })
        }) 
}

//Get types by attribute
exports.findByAttr = (req, res) => {
    BoilerTypes.find({description: req.params.description})
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
                   err.message || "Some error occurred while getting all boilerTypes." 
            })
        }) 
}


//Update existing type selected by id
exports.update = (req, res) => {
    //validate
    if(emptyDescription){
        res.status(400).json({msg: 'Content can not be empty.'});
        return;
    }

    BoilerTypes.findByIdAndUpdate(id, req.body , { useFindAndModify: false })
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

    BoilerTypes.findByIdAndRemove(id, { useFindAndModify: false })
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
