import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/banner.json";
import Typewriter from "react-ts-typewriter";

const Banner = () => {
  return (
    <div className="my-3 flex flex-col-reverse lg:flex-row items-center">
      <div className="w-1/2 flex flex-col gap-8">
        <h1 className="lg:text-6xl text-4xl font-bold text-center">
          Academic <span className="text-primary">Research</span> Point
        </h1>
        <p className="text-center text-lg font-medium text-gray-600">
          <Typewriter text="Need the best help for" cursor={false} typeSpeed={100} delaySpeed={1000} />
        </p>
        <p className="text-center text-xl text-primary font-semibold font-serif">
          <Typewriter
            text={[
              "Assignment",
              "Presentation",
              "Essay",
              "Dissertation",
              "Thesis",
              "Proofreading",
              "Editing",
              "Paraphrasing",
            ]}
            loop={true}
            speed={150}
          />
        </p>
      </div>
      <div className="w-1/2 h-full">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Banner;
