const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const appointsData = require('../data/appointment.json');

//Get all appointments:
app.get('/controllers/appointment', (req, res) =>
    res.json(appointsData)
);

//Get appointmens by ID:
app.get('/controllers/appointment/getAppointmentById/:id', (req, res) => {
    const found = appointsData.some(appoint =>
        appoint.id === parseInt(req.params.id)
    );
    
    if (found) {
        res.json(appointsData.filter(appoint =>
            appoint.id === parseInt(req.params.id)
        ));
        res.status(200).json;
        
    } else {
        res.status(400).json({
            msg: 'There is not appointment with the ID requested. Please insert a valid appointment ID.'
        });
    }
});

//Get appointments by  building ID:
app.get('/controllers/appointment/getAppointmentByBuildingId/:buildingId', (req, res) => {
    const found = appointsData.some(appoint =>
        appoint.buildingId === parseInt(req.params.buildingId)
    );
    
    if (found) {
        res.json(appointsData.filter(appoint =>
            appoint.buildingId === parseInt(req.params.buildingId)
        ));
        res.status(200).json;

    } else {
        res.status(400).json({msg: 'There is not building with the ID requested. Please insert a valid building ID.'});
    }
});

//Get appointments by  boiler ID:
app.get('/controllers/appointment/getAppointmentByBoilerId/:boilerId', (req, res) => {
    const found = appointsData.some(appoint =>
        appoint.boilerId === parseInt(req.params.boilerId)
    );
    
    if (found) {
        res.json(appointsData.filter(appoint =>
            appoint.boilerId === parseInt(req.params.boilerId)
        ));
        res.status(200).json;

    } else {
        res.status(400).json({msg: 'There is not boiler with the ID requested. Please insert a valid boiler ID.'});
    }
});

//Get appointments by  start timestamp:
app.get('/controllers/appointment/getAppointmentByStartTimestamp/:start_timestamp', (req, res) => {
    const found = appointsData.some(appoint =>
        appoint.start_timestamp === (req.params.start_timestamp)
    );
    
    if (found) {
        res.json(appointsData.filter(appoint =>
            appoint.start_timestamp === (req.params.start_timestamp)
        ));
        res.status(200).json;

    } else {
        res.status(400).json({msg: 'No appointment started at that time. Please insert a valid start time.'});
    }
});

//Get appointments by  end timestamp:
app.get('/controllers/appointment/getAppointmentByEndTimestamp/:end_timestamp', (req, res) => {
    const found = appointsData.some(appoint =>
        appoint.end_timestamp === (req.params.end_timestamp)
    );
    
    if (found) {
        res.json(appointsData.filter(appoint =>
            appoint.end_timestamp === (req.params.end_timestamp)
        ));
        res.status(200).json;

    } else {
        res.status(400).json({msg: 'No appointment ended at that time. Please insert a valid end time..'});
    }
});

//Delete appointments by ID:
app.delete('/controllers/appointment/deleteAppointmentById/:id', (req, res) => {
    const found = appointsData.some(appoint =>
        appoint.id === parseInt(req.params.id)
    );
    res.status(200).json;
    
    if (found) {
        res.json({
            msg: 'Appointment canceled',
            ppointsData: appointsData.filter(appoint =>
                appoint.id !== parseInt(req.params.id)
            )
        });
        res.status(200).json;
    } else {
        res.status(400).json({
            msg: 'There is not appointment with the ID requested. Please insert a valid appointment ID.'
        });
    }
});


app.listen(PORT, () => console.log('Server started on port ${PORT}'));