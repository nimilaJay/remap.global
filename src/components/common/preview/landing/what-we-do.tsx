import React from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-gray-900 text-white mt-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">
                WHAT WE DO
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Simplifying IT
                <br />
                for a complex world.
              </h2>
            </div>

            {/* right column kept (no dots), inherits px-8 from the container */}
            <div className="relative" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Cost-effectiveness */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      stroke="#1f2937"
                      strokeWidth="2"
                    />
                    <text
                      x="32"
                      y="38"
                      textAnchor="middle"
                      className="text-lg font-bold fill-current"
                    >
                      $
                    </text>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cost-effectiveness</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer affordable IT solutions that help you reduce costs and
                improve your bottom line.
              </p>
            </div>

            {/* Innovative Technology */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path d="M32 8L44 20H36V32H28V20H20L32 8Z" fill="#1f2937" />
                    <circle cx="32" cy="44" r="4" fill="#1f2937" />
                    <path
                      d="M20 52H44M16 56H48"
                      stroke="#1f2937"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovative Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay up-to-date with the latest technology trends and offer
                innovative solutions that help you stay ahead of the
                competition.
              </p>
            </div>

            {/* Industry Expertise */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <rect
                      x="12"
                      y="16"
                      width="40"
                      height="32"
                      rx="2"
                      stroke="#1f2937"
                      strokeWidth="2"
                    />
                    <path
                      d="M20 24H44M20 32H44M20 40H36"
                      stroke="#1f2937"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Industry Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                We specialize in serving specific industries, such as
                healthcare, finance, or manufacturing, and offer tailored
                solutions that meet your unique needs.
              </p>
            </div>

            {/* Scalability */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <rect x="8" y="40" width="16" height="16" fill="#2563eb" />
                    <rect
                      x="28"
                      y="32"
                      width="16"
                      height="24"
                      stroke="#1f2937"
                      strokeWidth="2"
                    />
                    <rect
                      x="48"
                      y="24"
                      width="8"
                      height="32"
                      stroke="#1f2937"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Scalability</h3>
              <p className="text-gray-600 leading-relaxed">
                Our solutions are scalable and can grow with your business,
                ensuring that you get the most value out of your investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
