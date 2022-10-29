import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="mx-auto py-4 bg-black border-b border-b-white">
        <div className="container-wrapper flex items-center justify-between">
          <div>
            <h1 className="px-6 text-2xl font-bold text-white">Logo</h1>
          </div>
          <div className="px-6 text-lg font-semibold text-white">
            <ul className="flex justify-between ">
              <li className="mx-6 uppercase hover:underline">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-6 uppercase hover:underline">
                <Link to="/about">About</Link>
              </li>
              <li className="mx-6 uppercase hover:underline">
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="px-2 font-semi-bold text-white">
            <buttton className="px-4 py-2 text-base font-bold text-black bg-white rounded-md uppercase ">
              <Link to="contact">Let's talk</Link>
            </buttton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
