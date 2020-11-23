const express = require('express');
const app = express();
const boilerTypes = require ("../data/BoilerTypes.json")
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));