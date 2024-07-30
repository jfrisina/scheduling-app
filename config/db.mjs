//Imports
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//Set up
dotenv.config();
const db = process.env.MONGO_URI;

//Connection Function
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log(`Mongoose DB Connected..`);
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

export default connectDB;
