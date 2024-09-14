import React from "react";

import OurCommitment from "./OurCommitment";
import OurExpertise from "./OurExpertise";
import OurValues from "./OurValues";
import WhyChooseUs from "./WhyChooseUs";
import setTitle from "../utils/SetTitle";

const AboutUs = () => {
  setTitle("About Us");
  return (
    <div className=" min-h-screen">
      {/* Hero Section */}
      <div
        className="hero min-h-[50vh] bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center items-center rounded-b relative"
        style={{ backgroundImage: `url('/aboutus.jpg')`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold drop-shadow-lg">About Us</h1>
          <p className="text-lg mt-4 p-4 max-w-2xl text-center drop-shadow-lg">
            Your trusted partner in academic success, offering expert assistance for dissertations,
            assignments, theses, and more.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="text-primary">Academic Research Point</span>, our mission is to
          empower students by providing high-quality academic support. Whether it's a dissertation,
          thesis, or any assignment, we are committed to guiding you towards academic excellence. We
          believe that every student deserves access to the resources and expertise needed to
          achieve their academic goals.
        </p>
      </div>

      {/* Our Values */}
      <OurValues />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Our Commitment */}
      <OurCommitment />
      {/* Our Expertise */}
      <OurExpertise />

      {/* Meet the Team */}
    </div>
  );
};

export default AboutUs;
