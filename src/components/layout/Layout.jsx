import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="md:w-[95%] mx-auto flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
