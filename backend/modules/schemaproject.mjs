// Import necessary modules
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

// Define project schema
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
  },
  status: {
    type: String, // Assuming status is a string, you can adjust the type accordingly
    required: true ,// Ensure status is required
    default: "pending" 
  },
  filePath: {
    type: String,
    required: true // Ensure filePath is required
  }
});

// Create and export the Project model
export default mongoose.model('Project', projectSchema);
