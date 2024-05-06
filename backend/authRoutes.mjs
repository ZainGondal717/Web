

// import express from 'express';
// import passport from "./auth.mjs"; // Ensure correct file extension
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import adddata from "./modules/schema.mjs"; // Import your user model

// const router = express.Router();

// router.post('/login', passport.authenticate('local'), (req, res) => {
//   const token = jwt.sign({ userId: req.user._id }, process.env.JWT_SECRET);
//   res.json({ token });
// });

// router.post('/signup', async (req, res) => {
//   const { Email, Username, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new adddata({ Email, Username, password: hashedPassword });
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// export default router;
