const express = require("express");
const router = require("./routes");
const mongoose = require("mongoose");
const process = require("process");
const PORT = process.env.PORT || 4000;
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(router);

// DB Conection
mongoose
  .connect(
    "mongodb+srv://CaldAr-m1:caldar@caldar-m1.rpj9l.mongodb.net/CaldAr?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB Connected");
    app.listen({ port: PORT }, () => {
      console.log("Server running on port 4000");
    });
  });
