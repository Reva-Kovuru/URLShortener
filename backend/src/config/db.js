import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectUrlDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URLDB_URI);
        console.log("MONGODB connected successfully!");
    } catch(error){
        console.log("<<<<<------ MongoDB Connection Failed ------>>>>>", error);
        process.exit(1);
    }
}