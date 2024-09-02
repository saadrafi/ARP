import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img src="/public/logo.jpg" alt="logo" className="w-40 h-24" />
          <p>
            <span className="text-lg">Academic Research Point</span>
            <br />
            Provide the best academic research services
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover hover:text-primary">Assignment Writing</a>
          <a className="link link-hover hover:text-primary">Essay Writing</a>
          <a className="link link-hover hover:text-primary">Dissertation Writing</a>
          <a className="link link-hover hover:text-primary">Thesis Writing</a>
          <a className="link link-hover hover:text-primary">Proofreading</a>
          <a className="link link-hover hover:text-primary">Editing</a>
          <a className="link link-hover hover:text-primary">Paraphrasing</a>
        </nav>
        <nav>
          <h6 className="footer-title">
            <a className="link link-hover">Academic Writing</a>
          </h6>
          <a className="link link-hover hover:text-primary">Research Paper Writing</a>
          <a className="link link-hover hover:text-primary">Case Study Writing</a>
          <a className="link link-hover hover:text-primary">Coursework Writing</a>
          <a className="link link-hover hover:text-primary">Report Writing</a>
          <a className="link link-hover hover:text-primary">Literature Review Writing</a>
          <a className="link link-hover hover:text-primary">Reflective Writing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="flex space-x-3">
            {/* facebook icon */}
            <a
              href="https://www.facebook.com/academicresearchpoint"
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
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2024 - All right reserved by Academic Research Point Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
