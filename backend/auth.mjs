// // auth.mjs

// import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';
// import bcrypt from 'bcryptjs';
// import adddata from "./modules/schema.mjs"; // Import your user model

// passport.use(new LocalStrategy(async (email, password, done) => {
//   try {
//     const user = await adddata.findOne({ Email: email });
//     if (!user) {
//       return done(null, false, { message: 'Incorrect email' });
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (isMatch) {
//       return done(null, user);
//     } else {
//       return done(null, false, { message: 'Incorrect password' });
//     }
//   } catch (error) {
//     return done(error);
//   }
// }));

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await adddata.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error);
//   }
// });

// export default passport;
