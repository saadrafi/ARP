import React from "react";
import { TbWriting } from "react-icons/tb";
import { MdAssignment } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { PiBooks } from "react-icons/pi";
import { Slide } from "react-awesome-reveal";

const WhatWeProvide = () => {
  return (
    <div className="my-16">
      <div>
        <h1 className="text-4xl text-center font-bold divider divider-primary">What We Provide</h1>
        <p className="text-center text-gray-700 p-4">
          We provide help with a wide range of academic services. Our services include but are not
          limited to the following:
        </p>
      </div>

      <Slide cascade delay={200} duration={800}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 w-[90%] lg:w-full mx-auto">
          <div className="card shadow-md hover:shadow-2xl transition-shadow ease-linear delay-50">
            <div className="card-body">
              <MdAssignment className="text-6xl" />
              <div>
                <h2 className="card-title font-bold tracking-wider h-16">Assignment Writing</h2>
                <p className=" text-justify pr-6 text-slate-700 leading-relaxed">
                  Receive meticulously researched and formatted assignments, including case studies
                  and reports. Our skilled writers help you meet deadlines while maintaining high
                  standards, ensuring academic success.
                </p>
              </div>
            </div>
          </div>

          <div className="card shadow-md hover:shadow-2xl transition-shadow ease-linear delay-50">
            <div className="card-body">
              <TbWriting className="text-6xl" />
              <div>
                <h2 className="card-title font-bold tracking-wider h-16">Essay Writing</h2>
                <p className=" text-justify pr-6 text-slate-700 leading-relaxed">
                  Get well-researched and structured essays tailored to your requirements. Our
                  expert writers ensure clarity and coherence for high-quality academic results.
                  Perfect for all types of essays across various subjects.
                </p>
              </div>
            </div>
          </div>

          <div className="card shadow-md hover:shadow-2xl transition-shadow ease-linear delay-50">
            <div className="card-body">
              <FaBook className="text-6xl" />
              <div>
                <h2 className="card-title font-bold tracking-wider h-16">Dissertation Writing</h2>
                <p className=" text-justify pr-6 text-slate-700 leading-relaxed">
                  Our dissertation writing service is designed to help you achieve your academic
                  goals. We guarantee high-quality dissertations that are well-researched and
                  written from scratch.
                </p>
              </div>
            </div>
          </div>

          <div className="card shadow-md hover:shadow-2xl transition-shadow ease-linear delay-50">
            <div className="card-body">
              <PiBooks className="text-6xl" />
              <div>
                <h2 className="card-title font-bold tracking-wider h-16">Thesis Writing</h2>
                <p className=" text-justify pr-6 text-slate-700 leading-relaxed">
                  Professional help for master's students with their research projects. We guide you
                  through developing a strong thesis, conducting research, and presenting your
                  findings clearly, ensuring academic excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default WhatWeProvide;
