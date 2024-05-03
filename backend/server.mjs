import adddata from "./modules/schema.mjs";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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

mongoose
  .connect(connectionString)
  .then(() => console.log("Connect to the DB.."))
  .catch((err) => console.log(err));

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

app.listen(port, console.log(`Server started at http://localhost:${port}`));
