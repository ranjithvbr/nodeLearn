const addCall = require('./routes/addCall');


let apiHandler = {
    init: function (app, router, db, async) {
        let version = "/test"
        app.use(version, addCall(router, db, async))
    }
}

module.exports = apiHandler;