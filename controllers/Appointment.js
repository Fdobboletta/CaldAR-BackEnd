const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const appointsData = require('../data/appointment.json');
// const id = require('appointsData.id');

//Get ATTR

//Get all appointments

app.get('/controllers/appointment', (req, res) => res.json(appointsData));

//Get appointmens by ID
app.get('/controllers/appointment/id/:id', (req, res) => {
    const found = appointsData.some(appoint => appoint.id === parseInt(req.params.id));
    
    if(found){
        res.json(appointsData.filter(appoint => appoint.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: 'There is not appointment with the ID requested. Please insert a valid appointment ID.'});
    }
});

//Get appointments by  building ID
app.get('/controllers/appointment/buildingId/:buildingId', (req, res) => {
    const found = appointsData.some(appoint => appoint.buildingId === parseInt(req.params.buildingId));
    
    if(found){
        res.json(appointsData.filter(appoint => appoint.buildingId === parseInt(req.params.buildingId)));
    } else {
        res.status(400).json({msg: 'There is not building with the ID requested. Please insert a valid building ID.'});
    }
});

//Get appointments by  boiler ID
app.get('/controllers/appointment/boilerId/:boilerId', (req, res) => {
    const found = appointsData.some(appoint => appoint.boilerId === parseInt(req.params.boilerId));
    
    if(found){
        res.json(appointsData.filter(appoint => appoint.boilerId === parseInt(req.params.boilerId)));
    } else {
        res.status(400).json({msg: 'There is not boiler with the ID requested. Please insert a valid boiler ID.'});
    }
});

//Get appointments by  start timestamp
app.get('/controllers/appointment/startTimestamp/:start_timestamp', (req, res) => {
    const found = appointsData.some(appoint => appoint.start_timestamp === (req.params.start_timestamp));
    
    if(found){
        res.json(appointsData.filter(appoint => appoint.start_timestamp === (req.params.start_timestamp)));
    } else {
        res.status(400).json({msg: 'No appointment started at that time. Please insert a valid start time.'});
    }
});

//Get appointments by  end timestamp
app.get('/controllers/appointment/endTimestamp/:end_timestamp', (req, res) => {
    const found = appointsData.some(appoint => appoint.end_timestamp === (req.params.end_timestamp));
    
    if(found){
        res.json(appointsData.filter(appoint => appoint.end_timestamp === (req.params.end_timestamp)));
    } else {
        res.status(400).json({msg: 'No appointment ended at that time. Please insert a valid end time..'});
    }
});
//Delete appointments by ID

app.delete('/controllers/appointment/id/:id', (req, res) => {
    const found = appointsData.some(appoint => appoint.id === parseInt(req.params.id));
    const i = appointsData.indexOf(req.params.id);
    if(found){
        res.json({msg: 'Appointment canceled',appointsData: appointsData.filter(appoint => appoint.id !== parseInt(req.params.id))});
        appointsData.splice(i-1, i);
        console.log(appointsData);
    } else {
        res.status(400).json({msg: 'There is not appointment with the ID requested. Please insert a valid appointment ID.'});
    }
});


app.listen(PORT, () => console.log('Server started on port ${PORT}'));