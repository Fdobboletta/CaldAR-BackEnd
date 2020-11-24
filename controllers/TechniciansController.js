const express = require(`express`);
const app = express();
const technicians = require ("../data/Technicians.json")
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// getTechniciansAll
app.get("/", (req, res)=>{
    res.status(200).json(technicians)
});

//getTechnicianById
app.get("/getTechnicianById/:id", (req,res) =>{
    const found = technicians.filter (technician => 
        technician.id === parseInt(req.params.id)
    );
    
    if (found.length > 0){
        res.status(200).json(found)
    } else {
        res.status(400).json({ msg: `No technician with the id of ${req.params.id}`})
    }
});
//getByAttribute
//getTechnicianByFirstName
app.get("/getTechnicianByFirstName/:first_name", (req,res) =>{
    const found = technicians.filter (technician =>
        technician.first_name === String(req.params.first_name)
    );

    if (found.length > 0){
        res.status(200).json(found);
    } else {
        res.status(400).json({ msg: `No technician with the name of ${req.params.first_name}`})
    }
});
//getTechnicianByLastName
app.get("/getTechnicianByLastName/:last_name", (req,res) =>{
    const found = technicians.filter(technician => 
        technician.last_name === String(req.params.last_name)
    );
    
    if (found.length > 0){
        res.status(200).json(found);
    } else {
        res.status(400).json({ msg: `No technician with the last name of ${req.params.last_name}`})
    }
});
//getTechnicianByEmail
app.get("/gettechnicianByEmail/:email", (req,res) =>{
    const found = technicians.filter (technician => 
        technician.email === String (req.params.email)
    );

    if (found.length > 0){
        res.status(200).json(found);
    } else {
        res.status(400).json({ msg: `No technician with the email of ${req.params.email}`})
    }
});

//getTechnicianBySkillsId
app.get("/getTechnicianBySkillsId/:skillsId", (req,res) =>{
    const skillsId = parseInt (req.params.skillsId);
    const found = technicians.filter(technician => 
        technician.skillsId.includes(skillsId)
    );
    
    if (found.length > 0){
        res.status(200).json(found);
    } else {
        res.status(400).json({ msg: `No technician with the skill ID of ${req.params.skillsId}`})
    }
});
//getTechnicianByHourRate
app.get("/getTechnicianByHourRate/:hour_rate", (req,res) =>{
    const found = technicians.filter (technician => 
        parseInt(technician.hour_rate) === parseInt (req.params.hour_rate)
    );

    if (found.length > 0){
        res.status(200).json(found);
    } else {
        res.status(400).json({ msg: `No technician with the hour rate of ${req.params.hour_rate}`})
    }
});

//getTechnicianByDailyCapacity
app.get("/getTechnicianByDailyCapacity/:dailyCapacity", (req,res) =>{
    const found = technicians.filter (technician => 
        technician.daily_capacity === parseInt (req.params.daily_capacity)
    );

    if (found.length > 0){
        res.status(200).json(found);
    } else {
        res.status(400).json({ msg: `No technician with the daily capacity of ${req.params.daily_capacity}`})
    }
});


//deleteTechnicianById
app.delete ("/:id", (req, res)=>{
    const found = technicians.some(technician =>
        technician.id === parseInt(req.params.id)
    )
    
    if (found){
        res.status(200).json({ 
            msg: `Member deleted`, 
            technicians:technicians.filter(technician => technician.id !== parseInt(req.params.id ))
        });
    } else {
        res.status(400).json({ msm: `No member with the id of ${req.params.id}`});
    }
})

app.listen(PORT, () => console.log('Server started on port ${PORT}'));