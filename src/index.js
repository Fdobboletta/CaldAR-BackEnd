const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');
const PORT = 4000;
const app = express();


app.use(router);

mongoose.connect('mongodb+srv://CaldAr-m1:caldar@caldar-m1.rpj9l.mongodb.net/CaldAr-m1?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, ).then(()=> {
    console.log('DB Connected')
    app.listen({port:PORT}, ()=> {
        console.log('Server running on port 4000');
    });
});
