const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');
const PORT = 4000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

mongoose.connect('mongodb+srv://CaldAr-m1:caldar@caldar-m1.rpj9l.mongodb.net/CaldAr?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, ).then(()=> {
    console.log('DB Connected')
    app.listen({port:PORT}, ()=> {
        console.log('Server running on port 4000');
    });
});
