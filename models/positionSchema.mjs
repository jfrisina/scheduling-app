import mongoose from 'mongoose';

const positionSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Positions', positionSchema);
