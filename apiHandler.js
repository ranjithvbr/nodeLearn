const addCall = require('./routes/addCall');
const insertStudentDetails = require('./routes/insertStudentDetails');
const getStudentDetails = require('./routes/getStudentDetails');

let apiHandler = {
    init: function (app, router, db, async) {
        let version = "/test"
        app.use(version, addCall(router, db, async))
        app.use(version, insertStudentDetails(router, db, async))
        app.use(version,getStudentDetails(router,db, async))
    }
}

module.exports = apiHandler;