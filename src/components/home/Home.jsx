import React, { useState } from "react";
import Banner from "./Banner";
import WhatWeProvide from "./WhatWeProvide";
import Topics from "./Topics";
import PdfViewer from "../utils/PdfViewer";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import SampleCarousel from "./sample/SampleCarousel";
import setTitle from "../utils/SetTitle";

const Home = () => {
  const [url, setUrl] = useState("");
  const openPdfModal = (url) => {
    setUrl(url);
    document.getElementById("my_modal_5").showModal();
  };

  setTitle("Home");

  return (
    <div>
      <Banner />
      <SampleCarousel openPdfModal={openPdfModal} />
      <WhatWeProvide />
      <Topics />
      <HowItWorks />
      <FAQ></FAQ>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <p className="py-4 hidden lg:inline">Press ESC key or click the button below to close</p>
          <p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="
            btn btn-link btn-sm
            ">
              Click here to open in new tab
            </a>
          </p>
          <div className="modal-body">
            <PdfViewer fileUrl={url} />
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Home;
