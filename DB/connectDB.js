import mongoose from "mongoose";
const  connectDB = async()=> {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("your connection is failed ");
        throw error;
    }
}
export {connectDB};