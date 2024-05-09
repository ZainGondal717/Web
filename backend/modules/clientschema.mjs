import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();
const clientSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  password: {
    type: String, // Ensure the password field is defined as a string
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: ""
  },
  address: {
    type: String,
    default: ""
  },
  userType: {
    type: String,
    default: 'client'
  }
});

export default mongoose.model('clientdata', clientSchema);
