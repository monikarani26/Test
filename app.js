const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const bodyParser = require('body-parser'); // to parse the incoming i/p json data..
//const cors = require('cors');
// const cookieParser = require('cookie-parser');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());

//const loginRoutes = require('./Routes/login');
//const incidentRoutes = require('./Routes/incident');
//const signUpRoutes = require('./Routes/signUp');

//app.use('/login', loginRoutes);
//app.use('/incident', incidentRoutes);
//app.use('/signUp', signUpRoutes);
//app.use(cors());

//mongoose.connect('mongodb://OnCallTracker:Admin123@18.223.114.221:27017/OncallTrackerDB?authSource=admin', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }, (err) => {
   mongoose.connect('mongodb://localhost:27017/OncallTrackerDB', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }, (err) => {

    if (err)
        console.log(err);
    else
        console.log("connected to DB");
});

//LISTENING TO THE SERVER
app.listen(8000);