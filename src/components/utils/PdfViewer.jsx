import React from "react";

const PdfViewer = ({ fileUrl }) => {
  return (
    <div>
      <iframe src={fileUrl} width="100%" height="600px" 
      ></iframe>
    </div>
  );
};

export default PdfViewer;
