const express = require('express');
const mongoose = require('mongoose');
const PORT = 4000;
const app = express();

mongoose.connect('mongodb+srv://CaldAr-m1:caldar@caldar-m1.rpj9l.mongodb.net/CaldAr-m1?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, ).then(()=> {
    console.log('DB Connected')
    app.listen({port:PORT}, ()=> {
        console.log('Server running on port 4000');
    });
});
