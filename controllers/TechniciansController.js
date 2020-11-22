const express = require(`express`);
const { find } = require("../../Express/Members");
const app = express();
const technicians = require ("../data/Technicians.json")
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// getTechniciansAll
app.get("/", (req, res)=>{
    res.json(technicians)
});
//getTechnicianById
app.get("/getTechnicianById/:id", (req,res) =>{
    const found = technicians.filter (technician => technician.id === parseInt(req.params.id));
    
    if (found){
        res.json(found)
    } else {
        res.status(400).json({ msg: `No technician with the id of ${req.params.id}`})
    }
});
//getTechnicianByFirstName
app.get("/getTechnicianByFirstName/:firstName", (req,res) =>{
    const found = technicians.filter (technician => technician.first_name === String (req.params.first_name));

    if (found){
        res.json(found);
    } else {
        res.status(400).json({ msg: `No technician with the name of ${req.params.address}`})
    }
});
//getTechnicianByLastName
app.get("/getTechnicianByLastName/:lastName", (req,res) =>{
    
    const found = technicians.filter(technician => technician.last_name === String (req.params.last_name));
    
    if (found){
        res.json(found);
    } else {
        res.status(400).json({ msg: `No technician with the last name of ${req.params.boilersId}`})
    }
});
//getTechnicianByEmail
app.get("/gettechnicianByEmail/:email", (req,res) =>{
    const found = technicians.filter (technician => technician.email === String (req.params.email));

    if (found){
        res.json(found);
    } else {
        res.status(400).json({ msg: `No technician with the email of ${req.params.fullName}`})
    }
});

//getTechnicianBySkillsId
app.get("/getTechnicianBySkillsId/:skillsId", (req,res) =>{
    const skillsId = parseInt (req.params.skillsId);
    const found = technicians.filter(technician => technician.boilersId.includes(skillsId));
    
    if (found){
        res.json(found);
    } else {
        res.status(400).json({ msg: `No technician with the skill ID of ${req.params.skillsId}`})
    }
});
//getTechnicianByHourRate
app.get("/getTechnicianByHourRate/:hourRate", (req,res) =>{
    const found = technicians.filter (technician => technician.hour_rate === parseInt (req.params.hour_rate));

    if (found){
        res.json(found);
    } else {
        res.status(400).json({ msg: `No technician with the hour rate of ${req.params.hour_rate}`})
    }
});

//getTechnicianByDailyCapacity
app.get("/getTechnicianByDailyCapacity/:dailyCapacity", (req,res) =>{
    const found = technicians.filter (technician => technician.daily_capacity === String (req.params.daily_capacity));

    if (found){
        res.json(found);
    } else {
        res.status(400).json({ msg: `No technician with the daily capacity of ${req.params.fullName}`})
    }
});


//deletetechnicianById
app.delete ("/:id", (req, res)=>{
    const found = technicians.some(technician =>technician.id === parseInt(req.params.id))
    
    if (found){
        res.json({ 
            msg: `Member deleted`, 
            technicians:technicians.filter(technician => technician.id !== parseInt(req.params.id ))
        });
    } else {
        res.status(400).json({ msm: `No member with the id of ${req.params.id}`});
    }
})