import React from "react";
import {
  FaCheckCircle,
  FaUserShield,
  FaHourglassHalf,
  FaSyncAlt,
  FaShieldAlt,
} from "react-icons/fa";

const OurCommitment = () => {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 divider divider-primary text-primary">
          Our Commitment
        </h2>
        <p className="text-gray-700 text-center p-4 leading-relaxed">
          We are committed to providing high-quality academic services that meet your unique needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaCheckCircle className="text-primary text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Authenticity Guaranteed</h3>
            <p className="text-center text-gray-700">
              We ensure all work is original and free from plagiarism.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaUserShield className="text-primary text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Human Expertise</h3>
            <p className="text-center text-gray-700">
              Your work is handled by real experts, with no AI involvement.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaHourglassHalf className="text-primary text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Timely Execution</h3>
            <p className="text-center text-gray-700">
              We prioritize deadlines, ensuring timely delivery of your work.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaSyncAlt className="text-primary text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Flexible Revisions</h3>
            <p className="text-center text-gray-700">
              We offer multiple revisions to perfect your work.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <FaShieldAlt className="text-primary text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2  text-center">Secure Transactions</h3>
            <p className="text-center text-gray-700">
              Your payments are processed securely, giving you peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
