const  stuModel = require("../Models/StudentModel")
const StudentSave = async (req,res)=>{
    const {rollno,name,school,pass} = req.body;
    try{

        const student = await stuModel.create({
            roll:rollno,
            na:name,
            sc:school,
            pa:pass
        })
        res.status(200).send("Data added successfully")

    } catch (error){
        res.status(404).send("MongoDB server No Started")
    }
   
 
}
module.exports={
    StudentSave
}