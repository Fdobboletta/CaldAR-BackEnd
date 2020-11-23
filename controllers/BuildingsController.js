const express = require(`express`);
const app = express();
const buildings = require ("../data/Buildings.json")
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// getAllBuildings
app.get("/getAllBuildings", (req, res)=>{
    res.json(buildings)
});

//getBuildingById
app.get("/getBuildingById/:id", (req,res) =>{
    const found = buildings.filter (building => building.id === parseInt(req.params.id));
    
    if (found.length > 0){
        res.json(found)
    } else {
        res.status(400).json({ msg: `No building with the id of ${req.params.id}`})
    }
});

//getBuildingByAttribute
//getBuildingByAddress
app.get("/getBuildingByAddress/:address", (req,res) =>{
    const found = buildings.filter (building => building.address === String (req.params.address));

    if (found.length > 0){
        res.json(found);
    } else {
        res.status(400).json({ msg: `No building with the address of ${req.params.address}`})
    }
});
//getBuildingByBoilersId
app.get("/getBuildingByBoilersId/:boilersId", (req,res) =>{
    const boilersIdNumber = parseInt (req.params.boilersId);
    const found = buildings.filter(building => building.boilersId.includes(boilersIdNumber));
    
    if (found.length > 0){
        res.json(found);
    } else {
        res.status(400).json({ msg: `No building with the boiler ID of ${req.params.boilersId}`})
    }
});
//getBuildingByFullName
app.get("/getBuildingsByFullName/:fullName", (req,res) =>{
    const found = buildings.filter (building => building.fullName === String (req.params.fullName));

    if (found.length > 0){
        res.json(found);
    } else {
        res.status(400).json({ msg: `No building with the name of ${req.params.fullName}`})
    }
});
//getBuildingByPhone
app.get("/getBuildingsByPhone/:phone", (req,res) =>{
    const found = buildings.filter (building => building.phone === String (req.params.phone));

    if (found.length > 0){
        res.json(found)
    } else {
        res.status(400).json({ msg: `No building with the phone of ${req.params.phone}`})
    }
});

//deleteBuildingById
app.delete ("/:id", (req, res)=>{
    const found = buildings.some(building =>building.id === parseInt(req.params.id))
    
    if (found){
        res.json({ 
            msg: `Member deleted`, 
            buildings:buildings.filter(building => building.id !== parseInt(req.params.id ))
        });
    } else {
        res.status(400).json({ msm: `No member with the id of ${req.params.id}`});
    }
})