import mongoose from 'mongoose';

const shiftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  starttime: {
    type: Number,
    required: true,
  },
  endtime: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Shifts', shiftSchema);
