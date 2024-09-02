import React from "react";
import { TbWriting } from "react-icons/tb";
import { MdAssignment } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { PiBooks } from "react-icons/pi";

const OurExpertise = () => {
  return (
    <>
      <div className="p-8 bg-white max-w-5xl mx-auto my-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center divider divider-primary text-primary">
          Our Expertise
        </h2>
        <p className=" text-gray-700 leading-relaxed mb-4 p-4 text-center">
          With a team of experienced academic professionals, we specialize in providing tailored
          support for a wide range of academic tasks:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 w-[90%] lg:w-full mx-auto">
          <div className="card shadow-md hover:shadow-2xl transition-shadow ease-linear delay-50">
            <div className="card-body">
              <MdAssignment className="text-6xl text-primary" />
              <div>
                <h2 className="card-title font-bold tracking-wider h-16 ">Assignment Writing</h2>
                <p className=" text-slate-700 leading-relaxed">
                  Receive meticulously researched and formatted assignments, including case studies
                  and reports.
                </p>
              </div>
            </div>
          </div>

          <div className="card shadow-md hover:shadow-2xl transition-shadow ease-linear delay-50">
            <div className="card-body">
              <TbWriting className="text-6xl text-primary" />
              <div>
                <h2 className="card-title font-bold tracking-wider h-16">Essay Writing</h2>
                <p className=" text-slate-700 leading-relaxed">
                  Get well-researched and structured essays tailored to your requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="card shadow-md hover:shadow-2xl transition-shadow ease-linear delay-50">
            <div className="card-body">
              <FaBook className="text-6xl text-primary" />
              <div>
                <h2 className="card-title font-bold tracking-wider h-16">Dissertation Writing</h2>
                <p className=" text-slate-700 leading-relaxed">
                  Our dissertation writing service is designed to help you achieve your academic
                  goals.
                </p>
              </div>
            </div>
          </div>

          <div className="card shadow-md hover:shadow-2xl transition-shadow ease-linear delay-50">
            <div className="card-body">
              <PiBooks className="text-6xl text-primary" />
              <div>
                <h2 className="card-title font-bold tracking-wider h-16">Thesis Writing</h2>
                <p className=" text-slate-700 leading-relaxed">
                  Professional help for master's students with their research projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
