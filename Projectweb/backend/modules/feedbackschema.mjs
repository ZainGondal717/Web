import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const feedbackSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
