module.exports = function (router, db, async) {

    router.post('/insert_details', async (req, res) => {
        // try {

            var reqParams = req.body;
            console.log(reqParams,"reqParams");

            let sProc = "Insert Into addcall(name, age, gender, education) values('"+reqParams.name+"', '"+reqParams.age+"','"+reqParams.gender+"','"+reqParams.education+"')";
            console.log("query", sProc);
            db.query(sProc, function (err, response) {
                if (err) {
                    console.log(err);
                    res.send({ status: 0, msg: 'Failed', data: err });
                } else {
                    res.send({ status: 1, msg: 'Success', data: "nivedha " });
                }
            });
        // }

        // catch (ex) {
        //     res.send({ status: 0, msg: 'Internal Server Error', data: ex });
        // }
    });

    return router;

}