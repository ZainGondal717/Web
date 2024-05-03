import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

const projectSchema = new mongoose.Schema({
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
  }
});


export default mongoose.model('projectsubmit', projectSchema);
