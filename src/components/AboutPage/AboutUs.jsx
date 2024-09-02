import React from "react";

import OurCommitment from "./OurCommitment";
import OurExpertise from "./OurExpertise";
import OurValues from "./OurValues";
import WhyChooseUs from "./WhyChooseUs";

const AboutUs = () => {
  return (
    <div className=" min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-[50vh] bg-primary text-white flex flex-col justify-center items-center rounded-b">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-lg mt-4 max-w-2xl text-center">
          Your trusted partner in academic success, offering expert assistance for dissertations,
          assignments, theses, and more.
        </p>
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
