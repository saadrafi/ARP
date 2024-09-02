import React from "react";

const SingleTopic = ({ children }) => {
  return (
    <div className="cursor-pointer flex gap-6">
      <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
      <span className="">{children}</span>
    </div>
  );
};

export default SingleTopic;
