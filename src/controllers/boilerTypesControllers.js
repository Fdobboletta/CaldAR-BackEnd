const BoilerTypes = require('../models/BoilerTypes');
 
exports.create = (req, res) => {
    if(!req.body.description){
        res.status(400).json({msg: 'Content can not be empty.'});
        return;
    }
    const boilerType = new BoilerTypes({
        description: req.body.description,
    })
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

exports.findById = (req, res) => {

    if(!req.params.id){
        res.status(400).json({msg: 'Content can not be empty.'});
        return;  
    }
    BoilerTypes.findById(req.params.id)
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


exports.update = (req, res) => {
    if(!req.body.description){
        res.status(400).json({msg: 'Content can not be empty.'});
        return;
    }

    BoilerTypes.findByIdAndUpdate(req.params.id, req.body , { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Cannot update Boiler Type with id=${req.params.id}. Maybe Type was not found!`
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

exports.delete = (req, res) => {

    if(req.params.id){
        res.status(400).json({msg: 'Content can not be empty.'});
        return;
    }

    BoilerTypes.findByIdAndRemove(req.params.id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Cannot update Boiler Type with id=${req.params.id}. Maybe Type was not found!`
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
