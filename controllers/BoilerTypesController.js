const express = require('express');
const app = express();
const boilerTypes = require ("../data/BoilerTypes.json")
const PORT = process.env.PORT || 5000;

// getAllBoilerTypes
app.get("/", (req, res)=>{
    res.json(boilerTypes)
});

// getBoilerTypeById
app.get("/getBoilerTypeById/:id", (req, res) => {
    const found = boilerTypes.some(boilerTypes => boilerTypes.id === parseInt(req.params.id));

    if (found) {
        res.json(boilerTypes.filter(boilerTypes => boilerTypes.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No boiler type with the id of ${req.params.id}`})
    }
});

// getBoilerTypeBySkillsId
app.get("/getBoilerTypesBySkillsId/:skillsId", (req, res) => {
    const skillsIdNumber = parseInt(req.params.skillsId);
    const found = boilerTypes.some(boilerTypes => boilerTypes.skillsId.includes(skillsIdNumber));

    if (found) {
        res.json(boilerTypes.filter(boilerTypes => boilerTypes.skillsId.includes(skillsIdNumber)))
    } else {
        res.status(400).json({ msg: `No boiler type with the skill id of ${req.params.skillsId}`})
    }
});

// getBoilerTypesByDescription
app.get("/getBoilerTypesByDescription/:description", (req, res) =>{
    const found = boilerTypes.some(boilerTypes => boilerTypes.description === String(req.params.description));

    if (found) {
        res.json(boilerTypes.filter(boilerTypes => boilerTypes.description === String(req.params.description)))
    } else {
        res.status(400).json({ msg: `No boiler type with the description of ${req.params.description}`})
    }
});

// getBoilerTypesByStock
app.get("/getBoilerTypesByStock/:stock", (req, res) => {
    const found = boilerTypes.some(boilerTypes => boilerTypes.stock === parseInt(req.params.stock));

    if (found) {
        res.json(boilerTypes.filter(boilerTypes => boilerTypes.stock === parseInt(req.params.stock)));
    } else {
        res.status(400).json({ msg: `No boiler type with the stock of ${req.params.stock}`})
    }
});

// deleteBoilerById
app.delete ("/:id", (req, res) => {
    const found = boilerTypes.some(boilerTypes => boilerTypes.id === parseInt(req.params.id))
    
    if (found){
        res.json({ 
            msg: `Member with the id ${req.params.id} deleted`, 
        });
    } else {
        res.status(400).json({ msm: `No member with the id of ${req.params.id}`});
    }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));