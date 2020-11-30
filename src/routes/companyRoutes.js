const express = require('express');
const router = express.Router();
const company = require('../controllers/companyControllers');


//Create new type
router.post('/', company.create);
//Get all types
router.get('/', company.findAll);

// //Get one type by ID
router.get('/:id', company.findById);

// //Get one type by Attr
// router.get('/description/:description', company.findByAttr);

// //Update one type
// router.put('/:id', company.update);

// //Delete type
// router.delete('/:id', company.delete);

module.exports = router;
