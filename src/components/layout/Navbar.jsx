import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sample"
          className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
          onClick={() => setIsOpen(false)}
        >
          Sample
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? "btn btn-link" : "btn btn-ghost")}
          onClick={() => setIsOpen(false)}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <button className="btn btn-primary">
            Contact Us
        </button>
      </li>
    </>
  );
  return (
    <div className="shadow-md">
      <div className="navbar bg-base-100 w-[95%] mx-auto">
        <div className="flex">
          <div className="dropdown">
            <label
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {isOpen && (
              <ul
                tabIndex={0}
                className="z-10 menu menu-md dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56"
              >
                {navItems}
              </ul>
            )}
          </div>
          <div>
            <Link to="/" className="">
              <p className="text-lg md:text-3xl font-bold text-primary"> Academic Research Point</p>
              <p className="text-gray-600 font-medium text-sm">Your Helping Buddy</p>
            </Link>
          </div>
        </div>
        <div className="flex ml-auto">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal menu-lg px-1 text-2xl">{navItems}</ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
