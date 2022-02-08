const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goals'));

// Overwrites default express error handling
app.use(errorHandler);

app.listen(port, () => console.log(`Started server on port ${port}`));