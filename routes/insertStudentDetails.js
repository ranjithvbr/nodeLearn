module.exports=((router,db)=>{
    router.post("/insert_student_details",async(req,res)=>{
        const reqParams = req.body

        console.log(reqParams)

        const sPro = "SET @stu_name = ?; SET @clg_name = ?; SET @stu_department = ?; SET @stu_degstatus = ?; CALL insert_student_details (@stu_name, @clg_name, @stu_department, @stu_degstatus)"

        db.query(sPro,[reqParams.stu_name, reqParams.clg_name, reqParams.stu_department, reqParams.stu_degstatus],(err,response)=>{
            if(err){
                res.send({status:0,msg:"Failed",data:err})
            }else{
                res.send({status:1,msg:"success",data:response})
            }
        })
    })
    return router;
})