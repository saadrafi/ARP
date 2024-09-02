import React from "react";

const OurValues = () => {
  return (
    <>
      <div className="p-12 bg-gradient-to-r from-blue-50 to-blue-100 max-w-6xl mx-auto my-12 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-primary divider divider-primary">
          Our Core Values
        </h2>
        <p className="text-gray-700 text-center p-4 leading-relaxed">
          At <span className="text-primary">Academic Research Point</span>, we are guided by a set
          of core values that define who we are and how we operate. Our commitment to these values
          ensures that we provide the highest quality academic services to our clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="card shadow-lg p-8 bg-white rounded-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <svg
                className="h-10 w-10 text-blue-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 9a3 3 0 11-6 0 3 3 0 016 0zm6 3v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7a2 2 0 012-2h16a2 2 0 012 2z"
                />
              </svg>
              <h3 className="text-2xl font-semibold ml-4">Integrity</h3>
            </div>
            <p className="text-gray-600">
              We uphold the highest standards of academic integrity in every project we undertake.
            </p>
          </div>
          <div className="card shadow-lg p-8 bg-white rounded-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <svg
                className="h-10 w-10 text-blue-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2M12 5v4m0 4v4m4-4h4m-4-4H8"
                />
              </svg>
              <h3 className="text-2xl font-semibold ml-4">Innovation</h3>
            </div>
            <p className="text-gray-600">
              We embrace innovation to provide cutting-edge solutions that enhance the academic
              experience.
            </p>
          </div>
          <div className="card shadow-lg p-8 bg-white rounded-lg transition-transform transform hover:scale-105 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <svg
                className="h-10 w-10 text-blue-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16 3.28a2 2 0 01.84 1.72v5.1a2 2 0 01-2 2H7a2 2 0 01-2-2v-5.1a2 2 0 01.84-1.72L12 14z"
                />
              </svg>
              <h3 className="text-2xl font-semibold ml-4">Commitment</h3>
            </div>
            <p className="text-gray-600">
              Our commitment to student success drives everything we do, from consultation to final
              delivery.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValues;
