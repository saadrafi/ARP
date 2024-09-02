import React, { useEffect, useState } from "react";
import SingleSampleCard from "./SingleSampleCard";
import { SiGoogledocs } from "react-icons/si";
import { AiFillFilePpt } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const SampleCarousel = ({ openPdfModal }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const randomData = data.sort(() => 0.5 - Math.random()).slice(0, 6);
        setData(randomData);
        console.log("Fetched data:", randomData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="my-16">
      <div>
        <h1 className="text-4xl text-center font-bold divider divider-primary">Sample Works</h1>
        <p className="text-center text-gray-700 p-4">
          Here are some sample works done by our experts.
        </p>
      </div>
      <div className="my-4 flex justify-center md:justify-end">
        <Link to="/sample" className="btn btn-outline btn-primary">
          View All Samples
        </Link>
      </div>

      <div className="my-2 md:hidden">
        {data.length === 0 ? (
          <div className="flex justify-center items-center h-96">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {data.map((sample, index) => (
              <SingleSampleCard key={index} sample={sample} openPdfModal={openPdfModal} />
            ))}
          </div>
        )}
      </div>

      <div className="my-2 hidden md:block">
        {data.length === 0 ? (
          <div className="flex justify-center items-center h-96">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
          </div>
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((sample, index) => (
              <SwiperSlide key={index}>
                <SingleSampleCard sample={sample} openPdfModal={openPdfModal} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default SampleCarousel;
