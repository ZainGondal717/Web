import dotenv from 'dotenv';

import mongoose from "mongoose";
dotenv.config();
// Define the admin schema
const adminSchema = new mongoose.Schema({
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
        default: 'admin' 
    }
});


export default mongoose.model('Admin', adminSchema);
