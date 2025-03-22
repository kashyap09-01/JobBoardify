import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  passOutYear: {
    type: Number,
    required: true
  },
  skills: [{
    type: String,
    required: true
  }],
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Application = mongoose.model('Application', applicationSchema);