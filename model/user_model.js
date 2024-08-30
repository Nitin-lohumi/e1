import mongoose from "mongoose";
const stuScheema  =new mongoose.Schema({
    name:String,
    rollnumber:Number,
    subject:[String]
},{Timestamp:true});
export const  Student = mongoose.model("Student",stuScheema);