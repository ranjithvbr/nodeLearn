module.exports = ((router, db)=>{
    router.post("/get_student_details",async(req,res)=>{
        const reqParams = req.body
        console.log(reqParams)
        const sProc = "SET @id = ?; CALL get_student_Details (@id)"
        db.query(sProc,[reqParams.id],(err,response)=>{
            if(err){
                res.send({status:0,msg:"Failed",data:err})
            }
            else{
                res.send({status:1,msg:"Success",data:response[1]})
            }
        })
    })
    return router;
})