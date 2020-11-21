const express = require(`express`);
const app = express();
//const router = express.Router();
const buildings = require ("../data/Buildings.json")

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// getBuildingsAll
app.get("/", (req, res)=>{
    res.json(buildings)
});

//getBuildingById
app.get("/:id", (req,res) =>{
    const found = buildings.some (building => building.id === parseInt(req.params.id));

    if (found){
        res.json(buildings.filter(building => building.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
    }
});