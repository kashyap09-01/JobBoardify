import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Briefcase } from "lucide-react";

interface Job {
  _id: string;
  companyName: string;
  role: string;
  description: string;
  skills: string[];
  ctc: string;
}

interface ApplicationFormData {
  name: string;
  qualification: string;
  passOutYear: string;
  skills: string;
  email: string;
  phone: string;
}

export default function CandidatesPortal() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: "",
    qualification: "",
    passOutYear: "",
    skills: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobId: selectedJob._id,
          ...formData,
          skills: formData.skills.split(",").map((skill) => skill.trim()),
          passOutYear: parseInt(formData.passOutYear),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      toast.success("Application submitted successfully");
      setShowModal(false);
      setFormData({
        name: "",
        qualification: "",
        passOutYear: "",
        skills: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      toast.error("Failed to submit application");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Available Jobs
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-8 w-8 text-blue-500" />
                  <h3 className="ml-2 text-lg font-medium text-gray-900">
                    {job.role}
                  </h3>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Company: {job.companyName}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">CTC: {job.ctc}</p>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-gray-900">
                      Required Skills:
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {job.description}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => handleApply(job)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                    Apply for {selectedJob?.role} at {selectedJob?.companyName}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="qualification"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Qualification
                      </label>
                      <input
                        type="text"
                        id="qualification"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        value={formData.qualification}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            qualification: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="passOutYear"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Pass Out Year
                      </label>
                      <input
                        type="number"
                        id="passOutYear"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        value={formData.passOutYear}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            passOutYear: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="skills"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Skills (comma-separated)
                      </label>
                      <input
                        type="text"
                        id="skills"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        value={formData.skills}
                        onChange={(e) =>
                          setFormData({ ...formData, skills: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
