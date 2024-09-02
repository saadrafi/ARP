import React from "react";
import { FaUserGraduate, FaHandsHelping, FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <>
      <div className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 divider divider-primary text-primary">
          Why Choose Us?
        </h2>
        <p className="text-center p-4 text-gray-700 leading-relaxed">
          At <span className="text-primary">Academic Research Point</span>, we are committed to
          providing students with the support they need to succeed. Here are a few reasons why
          students choose us:
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="card shadow-lg p-6 bg-white rounded-lg flex items-start gap-4">
              <FaUserGraduate className="text-primary text-4xl" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p className="text-gray-700">
                  Our team comprises subject matter experts with advanced degrees who are passionate
                  about helping students succeed.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="card shadow-lg p-6 bg-white rounded-lg flex items-start gap-4">
              <FaHandsHelping className="text-primary text-4xl" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Support</h3>
                <p className="text-gray-700">
                  We understand that every student’s needs are unique. That’s why we offer
                  personalized support tailored to your academic requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="card shadow-lg p-6 bg-white rounded-lg flex items-start gap-4">
              <FaCheckCircle className="text-primary text-4xl" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-700">
                  Quality is our top priority. We ensure that every piece of work we deliver meets
                  the highest academic standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
