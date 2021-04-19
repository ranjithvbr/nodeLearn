var mysql = require("mysql");
var db;
var dbfunction = function () { }

dbfunction.prototype.connectDatabase = function (callback) {
    if (!db) {
        db = mysql.createConnection({
            host: "localhost",
            port: '3306',
            user: "root",
            password: "",
            database: 'firstproject',
            multipleStatements: true,
            dateStrings: "Date"
        });

        db.connect(function (err) {
            if (!err) {
                // console.log("Database is connected!");
                callback(null, db);

            } else {
                callback("Error connecting database!", null);
                // console.log("Error connecting database!");

            }
        });
    }
    // return db; 
}

module.exports = new dbfunction();