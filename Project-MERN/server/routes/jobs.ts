import express from 'express';
import { Job } from '../models/Job';
import { auth } from '../middleware/auth';

const router = express.Router();

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().populate('employer', 'name');
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a job
router.post('/', auth, async (req, res) => {
  try {
    const { companyName, role, description, skills, ctc } = req.body;
    const job = new Job({
      employer: req.user.id,
      companyName,
      role,
      description,
      skills,
      ctc
    });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get employer's jobs
router.get('/my-jobs', auth, async (req, res) => {
  try {
    const jobs = await Job.find({ employer: req.user.id });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;