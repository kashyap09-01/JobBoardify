import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Briefcase, Users, Phone, LogOut } from "lucide-react";
import { logout } from "../lib/auth";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              to="/dashboard"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              to="/post-job"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Post a Job
            </Link>
            <Link
              to="/applications"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              <Users className="w-5 h-5 mr-2" />
              View Candidates
            </Link>
            <Link
              to="/contact"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
