import React from "react";
import { Link, useNavigate } from "react-router";

const NoProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4">
      {/* Back Button */}
      <div className="self-start w-full mb-8">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline btn-primary"
        >
          ← Go Back
        </button>
      </div>

      {/* Message Card */}
      <div className="bg-white rounded-xl shadow-xl p-10 text-center border border-base-300 max-w-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-primary mb-4">No Projects Found</h2>
        <p className="text-gray-700 mb-6 text-lg">
          Sorry, it seems there are no projects available right now. Want to see other projects?
        </p>
        <Link
          to="/projects"
          className="btn btn-primary btn-lg rounded-full px-8 font-semibold hover:bg-primary-focus transition duration-300"
        >
          Find More Projects
        </Link>
      </div>
    </div>
  );
};

export default NoProjects;
