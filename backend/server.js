const express = require('express');
require('dotenv').config({path: "./config/.env"});
//require("./config/db");

const PORT = process.env.PORT | 5000;

const app = express();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});