import React from "react";
import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We're here to help employers find the best talent and connect with
            potential candidates.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <Mail className="h-8 w-8 text-blue-500" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    Email Us
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    For general inquiries and support:
                  </p>
                  <a
                    href="mailto:support@jobportal.com"
                    className="mt-1 block text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    support@jobportal.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <Phone className="h-8 w-8 text-blue-500" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    Call Us
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    Monday to Friday, 9am to 6pm:
                  </p>
                  <p className="mt-1 text-sm font-medium text-blue-600">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <MapPin className="h-8 w-8 text-blue-500" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    Visit Us
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    123 Business Street
                    <br />
                    Suite 100
                    <br />
                    San Francisco, CA 94111
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                About Our Portal
              </h3>
              <div className="prose prose-blue text-gray-500">
                <p>
                  Our job portal connects talented professionals with leading
                  employers across various industries. We strive to make the
                  hiring process seamless and efficient for both employers and
                  candidates.
                </p>
                <p className="mt-4">For employers, we offer:</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Easy job posting and management</li>
                  <li>Access to a wide pool of qualified candidates</li>
                  <li>Efficient application tracking system</li>
                  <li>Dedicated support team</li>
                </ul>
                <p className="mt-4">For candidates, we provide:</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Access to exclusive job opportunities</li>
                  <li>Simple application process</li>
                  <li>Regular job alerts</li>
                  <li>Career resources and guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
