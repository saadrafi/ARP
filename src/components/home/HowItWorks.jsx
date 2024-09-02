import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { GiDiscussion } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

const steps = [
  {
    icon: <BiSolidMessageAltDetail className="text-4xl" />,
    title: "Contact Us",
    description: "Reach out via Email, Facebook, or WhatsApp.",
  },
  {
    icon: <GiDiscussion className="text-4xl" />,
    title: "Discuss Your Needs",
    description: "Tell us what you need help with.",
  },
  {
    icon: <MdPayments className="text-4xl" />,
    title: "Make Payment",
    description: "Pay securely for your chosen services.",
  },
  {
    icon: <AiOutlineSolution className="text-4xl transform rotate-45" />,
    title: "Receive Your Solution",
    description: "Get your solution on time and as requested.",
  },
];

const HowItWorks = () => {
  return (
    <div className="my-16">
      <div>
        <h1 className="text-4xl text-center font-bold divider divider-primary">How It Works</h1>
        <p className="text-center text-gray-700 p-4">Our process is simple and straightforward.</p>
      </div>
      <Fade cascade delay={200} duration={800} >
        <div className="flex flex-col lg:flex-row items-center gap-4 my-6 w-[90%] lg:w-full mx-auto">
          <div className="card flex-1">
            <div className="card-body items-center text-center">
              <BiSolidMessageAltDetail className="text-6xl bg-primary text-white rounded-xl" />
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold tracking-wider">Contact Us</h2>
                <p className=" text-slate-700 ">Reach out via Email, Facebook, or WhatsApp.</p>
              </div>
            </div>
          </div>
          <IoMdArrowRoundDown className="text-4xl text-center mt-6 lg:mt-0 lg:-rotate-90" />
          <div className="card flex-1">
            <div className="card-body items-center text-center">
              <GiDiscussion className="text-6xl bg-primary text-white rounded-xl" />
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold tracking-wider">Discuss Your Needs</h2>
                <p className=" text-slate-700 ">Tell us what you need help with.</p>
              </div>
            </div>
          </div>
          <IoMdArrowRoundDown className="text-4xl text-center mt-6 lg:mt-0 lg:-rotate-90" />
          <div className="card flex-1">
            <div className="card-body items-center text-center">
              <MdPayments className="text-6xl bg-primary text-white rounded-xl" />
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold tracking-wider">Make Payment for Services</h2>
                <p className=" text-slate-700 ">Pay securely for your chosen services.</p>
              </div>
            </div>
          </div>
          <IoMdArrowRoundDown className="text-4xl text-center mt-6 lg:mt-0 lg:-rotate-90" />
          <div className="card flex-1">
            <div className="card-body items-center text-center">
              <AiOutlineSolution className="text-6xl bg-primary text-white rounded-xl" />
              <div className="card-body items-center text-center flex-1">
                <h2 className="card-title font-bold tracking-wider">Receive Your Solution</h2>
                <p className=" text-slate-700 ">Get your solution on time and as requested.</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HowItWorks;
