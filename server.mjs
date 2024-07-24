//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import shiftRoutes from './routes/shift.mjs';
import shiftData from './utilities/data.mjs';
import shiftSchema from './models/shiftSchema.mjs';

//Configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Connect to DB
connectDB();

//Middleware
app.use(express.json());

//Routes
app.use('/shift', shiftRoutes);

/* comment this out once done to prevent public from manipulating database */
// populate db with initial data
app.get('/seed', async (req, res) => {
  // delete everything from db to prevent duplicates of initial data
  await shiftSchema.deleteMany({});
  // add data 
  await shiftSchema.create(shiftData);
  // prove you did it
  res.send('seeding db');
});


//Error Checking Middleware
app.use((err, _req, res, next) => {
  res.status(500).json({ msg: 'You have encountered an error' });
});

//Listen to our express server
app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
});
