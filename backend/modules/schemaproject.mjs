import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255
  },
  description: {
    type: String,
    required: true,
    minLength: 1
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  fundingDetails: {
    type: String
  },
  status: {
    type: String,
    default: 'pending' // Default status is 'pending'
  }
});

export default mongoose.model('Parposal', ProjectSchema);