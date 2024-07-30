/* IMPORTS ---------------------------------------------------------*/

// packages
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// routes
import shiftRoutes from './routes/shift.mjs';
import employeeRoutes from './routes/employee.mjs';
import positionRoutes from './routes/position.mjs'
import userRoutes from './routes/api/users.mjs';
import authRoutes from './routes/api/auth.mjs';

// data
import shiftData from './utilities/data.mjs';
import employeeData from './utilities/employeeData.mjs';
import positionData from './utilities/positionData.mjs';

// schemas
import shiftSchema from './models/shiftSchema.mjs';
import employeeSchema from './models/employeeSchema.mjs';
import positionSchema from './models/positionSchema.mjs'

// database file
import connectDB from './config/db.mjs';

/* SET UP ---------------------------------------------------------*/

// connect database
const app = express();

// initialize middleware
connectDB();

// .env variables
dotenv.config();
const PORT = process.env.PORT || 3000;



/* MIDDLEWARE -------------------------------------------------------------------*/
// parse JSON content sent in the body of incoming requests
app.use(express.json()); 

// prevent Cross-Origin Resource Sharing
app.use(cors()); 

/* DATABASE DATA -------------------------------------------------*/
// comment out this section once done to prevent public from manipulating database

// populate database with initial data
app.get('/seed', async (req, res) => {

  // delete everything from db to prevent duplicates of initial data
  await shiftSchema.deleteMany({});
  await employeeSchema.deleteMany({});
  await positionSchema.deleteMany({});

  // add data 
  await shiftSchema.create(shiftData);
  await employeeSchema.create(employeeData);
  await positionSchema.create(positionData);

  // show on page
  res.send('seeding db');
});

/* ERROR HANDLING --------------------------------------------------------*/
app.use((err, _req, res, next) => {
  res.status(500).json({ msg: 'You have encountered an error' });
});

/* HOME PAGE ---------------------------------------------------------*/
app.get('/', (req, res) => {
  res.send('API Running');
});

/* ROUTES ---------------------------------------------------------*/
app.use('/shift', shiftRoutes);
app.use('/employees', employeeRoutes);
app.use('/positions', positionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


/* PORT / SERVER ---------------------------------------------------------*/
// set up port listening for express server
app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`);
});
