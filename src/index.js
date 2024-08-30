import express from 'express';
import { connectDB } from '../DB/connectDB.js';
import { Student } from '../model/user_model.js';
import { MongoClient } from 'mongodb';
import 'dotenv/config';
const mongoClient = new MongoClient(process.env.DB);
let app = express();
let port = process.env.PORT||1000;
connectDB();
app.get('/',(req,res)=>{
    Student.find({}).then((v)=>res.send(v)).catch((e)=>console.log("Error is occor"+ e));
});
app.get('/add',(req,res)=>{
    new Student({
        name:"nitin lohumi",
        rollnumber:101,
        subject:["python","C++","java","javascript"]
    }).save().then(()=>console.log("Entery is added"),(err=>console.log(err)));
    res.send("one row is added sucessfully");
})
app.listen(port,()=>{
    console.log(`....${port}`);
});