/* SET UP ---------------------------------------------------------*/
// imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import shiftRoutes from './routes/shift.mjs';
import shiftData from './utilities/data.mjs';
import shiftSchema from './models/shiftSchema.mjs';
import cors from 'cors';

// configurations
const app = express();

// set up .env variables
dotenv.config();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

/* MIDDLEWARE ---------------------------------------------------------*/
// parse JSON content sent in the body of incoming requests
app.use(express.json()); 

// prevent Cross-Origin Resource Sharing
app.use(cors()); 

// error checking 
app.use((err, _req, res, next) => {
  res.status(500).json({ msg: 'You have encountered an error' });
});

/* DATABASE DATA ---------------------------------------------------------*/
/* comment this out once done to prevent public from manipulating database */
// populate db with initial data
app.get('/seed', async (req, res) => {
  // delete everything from db to prevent duplicates of initial data
  await shiftSchema.deleteMany({});
  // add data 
  await shiftSchema.create(shiftData);
  // show on page
  res.send('seeding db');
});


/* HOME PAGE ---------------------------------------------------------*/
app.get('/', (req, res) => {
  res.send('hello world');
});

/* ROUTES ---------------------------------------------------------*/
app.use('/shift', shiftRoutes);
// app.use('/employees', employeeRoute);


/* PORT / SERVER ---------------------------------------------------------*/
// set up port listening for express server
app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
});
