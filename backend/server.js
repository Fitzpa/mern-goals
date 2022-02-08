const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;



const app = express();

app.use('/api/goals', require('./routes/goals'));

app.listen(port, () => console.log(`Started server on port ${port}`));