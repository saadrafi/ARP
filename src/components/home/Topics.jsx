import React from "react";
import SingleTopic from "./SingleTopic";
import { Slide } from "react-awesome-reveal";

const Topics = () => {
  return (
    <div className="my-16">
      <div>
        <h1 className="text-4xl text-center font-bold divider divider-primary">Topics We Cover</h1>
        <p className="text-center text-gray-700 p-4">
          We cover more than 30 subjects. Some of the subjects we cover are:
        </p>
      </div>

      <Slide cascade delay={200} duration={800} direction="right">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-6 w-[90%] lg:w-full mx-auto">
          <SingleTopic>Accounting</SingleTopic>

          <SingleTopic>Finance</SingleTopic>

          <SingleTopic>Business Studies</SingleTopic>

          <SingleTopic>Management</SingleTopic>

          <SingleTopic>Marketing</SingleTopic>

          <SingleTopic>Information Technology</SingleTopic>

          <SingleTopic>Computer Science</SingleTopic>

          <SingleTopic>Statistics</SingleTopic>

          <SingleTopic>Mathematics</SingleTopic>

          <SingleTopic>Chemistry</SingleTopic>

          <SingleTopic>Biology</SingleTopic>

          <SingleTopic>Physics</SingleTopic>

          <SingleTopic>History</SingleTopic>
          <SingleTopic>Literature</SingleTopic>
          <SingleTopic>Philosophy</SingleTopic>
          <SingleTopic>Engineering</SingleTopic>
          <SingleTopic>Psychology</SingleTopic>
          <SingleTopic>Sociology</SingleTopic>
          <SingleTopic>Political Science</SingleTopic>
          <SingleTopic>Law</SingleTopic>
          <SingleTopic>Nursing</SingleTopic>
          <SingleTopic>Medicine</SingleTopic>
          <SingleTopic>Healthcare</SingleTopic>
          <SingleTopic>Nutrition</SingleTopic>
          <SingleTopic>Education</SingleTopic>
          <SingleTopic>Architecture</SingleTopic>
          <SingleTopic>Agriculture</SingleTopic>
          <SingleTopic>Environmental Science</SingleTopic>
          <SingleTopic>Astronomy</SingleTopic>
          <SingleTopic>Geology</SingleTopic>
        </div>
      </Slide>
    </div>
  );
};

export default Topics;
