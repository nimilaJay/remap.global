import React from "react";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
        {/* Clutch Review */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="mb-2">
            <p className="text-sm text-gray-600 uppercase tracking-wide">
              REVIEWED ON
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl font-bold text-gray-900">Clutch</span>
              <div className="flex text-red-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">31 REVIEWS</p>
          </div>
        </div>

        {/* Years */}
        <div className="text-center lg:text-left">
          <div className="mb-2">
            <span className="text-5xl font-bold text-gray-900">20</span>
            <span className="text-xl text-gray-600 ml-1">Years</span>
          </div>
          <p className="text-gray-600">Proven Track Record</p>
        </div>

        {/* Customer Satisfaction */}
        <div className="text-center lg:text-left">
          <div className="mb-2">
            <span className="text-5xl font-bold text-gray-900">98</span>
            <span className="text-xl text-gray-600 ml-1">%</span>
          </div>
          <p className="text-gray-600">Customer Satisfaction</p>
        </div>

        {/* Projects */}
        <div className="text-center lg:text-left">
          <div className="mb-2">
            <span className="text-5xl font-bold text-gray-900">1,500</span>
            <span className="text-xl text-gray-600 ml-1">Projects</span>
          </div>
          <p className="text-gray-600">We Have Completed</p>
        </div>

        {/* Response Time */}
        <div className="text-center lg:text-left">
          <div className="mb-2">
            <span className="text-5xl font-bold text-gray-900">3</span>
            <span className="text-xl text-gray-600 ml-1">Mins</span>
          </div>
          <p className="text-gray-600">Average Answer Time</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
