
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    userType: {
      type: String,
      default: 'user' 
    }
});

export default mongoose.model('userdata', userSchema);
