import React from "react";
import { SiGoogledocs } from "react-icons/si";
import { AiFillFilePpt } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { SwiperSlide } from "swiper/react";

const SingleSampleCard = ({ sample, openPdfModal }) => {
  const { link, type, title, subject } = sample;
  return (
    
      <div className="bg-white p-4 rounded-lg shadow-lg my-5 h-96 flex flex-col">
        <Fade cascade duration={800}>
          {type === "pdf" ? (
            <div>
              <FaFilePdf className="text-8xl text-red-500 my-2" />
              <div className="badge badge-outline">PDF</div>
            </div>
          ) : type === "pptx" ? (
            <div>
              <AiFillFilePpt className="text-8xl text-orange-500 my-2" />
              <div className="badge badge-outline">PPT</div>
            </div>
          ) : (
            <div>
              <SiGoogledocs className="text-8xl text-blue-500 my-2" />
              <div className="badge badge-outline">DOCS</div>
            </div>
          )}

          <h1 className="text-xl font-bold block my-4">{title}</h1>
          <p className="text-gray-600 text-sm badge badge-ghost">{subject}</p>
        </Fade>
        <div className="flex items-center justify-between mt-auto">
          {/* Social contact */}
          <div className="flex space-x-3">
            {/* mail icon */}
            <a
              href="mailto:academicresearchpoint@gmail.com"
              className="link link-hover hover:text-red-500 text-4xl"
            >
              <MdEmail />
            </a>
            {/* facebook icon */}
            <a
              href="
            https: //www.facebook.com/academicresearchpoint"
              target="_blank"
              rel="noreferrer"
              className="link link-hover hover:text-primary text-4xl"
            >
              <FaFacebook />
            </a>
            {/* whatsapp icon */}
            <a
              href="https://wa.me/+8801771712884"
              target="_blank"
              rel="noreferrer"
              className="link link-hover hover:text-green-700 text-4xl"
            >
              <FaWhatsapp />
            </a>
          </div>

          <button
            className="
            btn btn-primary
            mt-2
            hover:bg-green-600
            hover:text-white
            transition
            duration-200
            ease-in-out
        "
            onClick={() => {
              openPdfModal(link);
            }}
          >
            View Document
          </button>
        </div>
      </div>
   
  );
};

export default SingleSampleCard;
