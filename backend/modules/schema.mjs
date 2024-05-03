
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();



const adddata= new mongoose.Schema({Email:String,Username:String,password:String});
export default mongoose.model('project',adddata)