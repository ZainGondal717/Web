import adddata from "./modules/schema.mjs";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectSchema from "./modules/schemaproject.mjs"
import feedbackSchema from "./modules/feedbackschama.mjs"
import { mongoose } from "mongoose";

dotenv.config();
const port = 3002;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
const connectionString = process.env.DB_URL;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


app.post("/Login", async (req, res) => {
  const { Email, password } = req.body;
  try {
    const result = await adddata.findOne({ Email: Email, password: password });
    if (result) {
      res.status(200).json(result);
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

app.post("/SignUp", async (req, res) => {
  const { password, Email, Username } = req.body;
  const user = new adddata({
    Email: Email,
    Username: Username,
    password: password,
  });
  const result = await adddata.findOne({ Email: Email });
  if (result) {
    res.status(409).json("already Exist");
  } else {
    try {
      const dataSave = await user.save();
      res.status(200).json(dataSave);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
});
app.post('/projects', async (req, res) => {
    try {
      const { projectName, description, startDate, endDate, fundingDetails } = req.body;
  
      const project = new projectSchema({
        projectName,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        fundingDetails,
      });
  
   
      const newProject = await project.save();
  
      res.status(201).json(newProject); 
    } catch (err) {
      console.error('Error creating project:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  app.get('/projects', async (req, res) => {
    try {
        
        const projects = await projectSchema.find(); 
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post('/feedback', async (req, res) => {
    try {
      const { projectId, feedback } = req.body;
   
      const newFeedback = new feedbackSchema({ projectId, feedback });
     
      await newFeedback.save();
      res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.listen(port, console.log(`Server started at http://localhost:${port}`));
