const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //enable us to get the body of the request
const path = require('path')
const app = express();
const items = require('./routes/api/items');

//Body middleware:
app.use(bodyParser.json());

//DB config:
const db = require("./config/keys").mongoURI;

//connect to mongoDB:
mongoose.connect(db)
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log(err));

// Use routes


    const port = process.env.port || 6000; //Define the port number, can either be the sys port or port 3000
    app.listen(port, () => console.log(`Listening to Port ${port}`)) //The application is listening to Port



