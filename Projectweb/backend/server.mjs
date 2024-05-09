
import cors from "cors";
import express, { query } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userschema from "./modules/userschema.mjs";
import clientschema from "./modules/clientschema.mjs";
import ProjectSchema from "./modules/schemaproject.mjs";
import feedbackSchema from "./modules/feedbackschema.mjs";
import adminschema from "./modules/adminschema.mjs";


dotenv.config();

const port = 3002;
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
const router = express.Router();
const connectionString = process.env.DB_URL;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));






// User signup
app.post("/api/signup/user", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with hashed password
    const newUser = new userschema({
      username,
      password: hashedPassword,
      email
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ username: newUser.username, email: newUser.email }, process.env.JWT_SECRET);

    // Send the token back to the client
    res.status(201).json({ message: "User signed up successfully", token });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/api/signup/client", async (req, res) => {
  try {
    const { companyName, password, email } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new client with hashed password
    const newClient = new clientschema({
      companyName,
      password: hashedPassword,
      email
    });

    // Save the client to the database
    await newClient.save();

    // Generate a JWT token
    const token = jwt.sign({ companyName: newClient.companyName, email: newClient.email }, process.env.JWT_SECRET);

    // Send the token back to the client
    res.status(201).json({ message: "Client signed up successfully", token });
  } catch (error) {
    console.error("Error signing up client:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin signup
app.post("/api/signup/admin", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin with hashed password
    const newAdmin = new adminschema({
      username,
      password: hashedPassword,
      email
    });

    // Save the admin to the database
    await newAdmin.save();

    // Generate a JWT token
    const token = jwt.sign({ username: newAdmin.username, email: newAdmin.email }, process.env.JWT_SECRET);

    // Send the token back to the client
    res.status(201).json({ message: "Admin signed up successfully", token });
  } catch (error) {
    console.error("Error signing up admin:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password, userType } = req.body;
  try {
    let user;

    if (userType === "user") {
      user = await userschema.findOne({ email });
    } else if (userType === "client") {
      user = await clientschema.findOne({ email });
    } else if (userType === "admin") {
      user = await adminschema.findOne({ email });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // If user and password are correct, respond with user details
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




app.post('/projects', async (req, res) => {
  try {
    const { projectName, description, startDate, endDate, fundingDetails } = req.body;

    // Create a new project
    const project = new ProjectSchema({
      projectName,
      description,
      startDate,
      endDate,
      fundingDetails
    });

    await project.save(); // Save the project to the database

    res.status(201).json({ message: 'Project created successfully!' });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/rejected', async (req, res) => {
  try {
    // Query projects with status 'pending'
    const projects = await ProjectSchema.find({ status: 'Rejected' });

    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching pending projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/pending', async (req, res) => {
  try {
    // Query projects with status 'pending'
    const projects = await ProjectSchema.find({ status: 'pending' });

    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching pending projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Endpoint to fetch projects with status 'Accept'
app.get('/Accept', async (req, res) => {
  try {
      // Query projects with status 'Accept'
      const projects = await ProjectSchema.find({ status: 'Accept' });

      res.status(200).json(projects);
  } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});


// Fetch all projects endpoint
app.get('/projects', async (req, res) => {
  try {
    const projects = await ProjectSchema.find();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update project status endpoint
app.patch('/projects/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    // Find the project by ID and update its status
    const updatedProject = await ProjectSchema.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    console.error('Error updating project status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Submit feedback endpoint
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

// Fetch all feedbacks endpoint
app.get('/feedbacks', async (req, res) => {
  try {
    const feedbacks = await feedbackSchema.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/projects/:id', async (req, res) => {
  const id = req.params.id;
  const updatedProject = req.body;

  try {
      const project = await ProjectSchema.findByIdAndUpdate(id, updatedProject, { new: true });
      if (!project) {
          return res.status(404).json({ message: 'Project not found' });
      }
      res.json({ message: 'Project updated successfully', project });
  } catch (error) {
      console.error('Error updating project:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});


// Start the server
app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
