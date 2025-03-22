import express from 'express';
import { Application } from '../models/Application';
import { Job } from '../models/Job';
import { auth } from '../middleware/auth';

const router = express.Router();

// Submit application
router.post('/', async (req, res) => {
  try {
    const { jobId, name, qualification, passOutYear, skills, email, phone } = req.body;
    
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const application = new Application({
      job: jobId,
      name,
      qualification,
      passOutYear,
      skills,
      email,
      phone
    });
    await application.save();
    
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get applications for employer's jobs
router.get('/my-applications', auth, async (req, res) => {
  try {
    const jobs = await Job.find({ employer: req.user.id });
    const jobIds = jobs.map(job => job._id);
    
    const applications = await Application.find({ job: { $in: jobIds } })
      .populate('job', 'companyName role');
      
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;