const express = require('express');
var apiHandler = require("./apiHandler");
var mysql = require('mysql');
var async = require("async");
var app = express();
var http = require('http').Server(app);
var router = express.Router();
var dpconnection = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

// var con = mysql.createConnection({
//     host: "localhost",
//     port:'3306',
//     user: "root",
//     password: "",
//     database:'firstproject'
// })

dpconnection.connectDatabase((err, db) => {
    if (err) throw err;
    console.log("connected!")
    apiHandler.init(app, router, db, async)
})

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