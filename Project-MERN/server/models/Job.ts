import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  employer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skills: [{
    type: String,
    required: true
  }],
  ctc: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Job = mongoose.model('Job', jobSchema);