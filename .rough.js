var express = require("express");
var app = express();
const router = express.Router();
var http = require("http").Server(app);
// const fileUpload = require('express-fileupload');
// var dbfunctions = require('./routes/DATABASE/db')
// var apiHandler = require('./apiHandler');
// var bodyParser = require("body-parser");
// var nodemailer = require("nodemailer");
// var Mustache = require("mustache");
// var fs = require("fs");
// var ses = require("nodemailer-ses-transport");
// var async = require("async");
// var dateFormat = require("dateformat");
// var bcrypt = require('bcrypt');
// const errorData = require('./ERROR/errorcode');


// api files
// app.use(fileUpload());
// router.use(bodyParser.urlencoded({
//     extended: true
// }));
// router.use(bodyParser());

// header access control

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions) 
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// dbfunctions.connectDatabase(function (err, db) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("connected");
//         // apiHandler.init(app,router,db,nodemailer,Mustache,fs,ses,async,stripe,dateFormat)
//         apiHandler.init(app, router, db, nodemailer, Mustache, fs, ses, async, dateFormat, errorData, bcrypt)
//     }
// })

// runing on port
app.set("port", 8000);
app.set("host", "0.0.0.0");
http.listen(app.get('port'), '0.0.0.0', function () {
    console.log(
        "Express server listening on port " +
        app.get("host") +
        ":" +
        app.get("port")
    );
});