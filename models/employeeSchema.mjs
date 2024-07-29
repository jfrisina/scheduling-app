import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  restriction: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  notification: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Employees', employeeSchema);
