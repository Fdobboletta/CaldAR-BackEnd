const boilerTypes = require('../controllers/boilerTypesControllers.js');
const express = require('express');
const router = express.Router();
//Create new type
router.post('/', boilerTypes.create);
//Get all types
router.get('/', boilerTypes.findAll);

//Get one type by ID
router.get('/:id', boilerTypes.findById);

//Get one type by Attr
router.get('/description/:description', boilerTypes.findByAttr);

//Update one type
router.put('/:id', boilerTypes.update);

//Delete type
router.delete('/:id', boilerTypes.delete);

module.exports = router;