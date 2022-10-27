import React from "react";
import Logo from "../Assets/whitelogo.png";

function Navbar() {
  return (
    <>
      <div className=" mx-auto py-4 bg-black ">
        <div className="container-wrapper flex items-center justify-between">
          <div>
            <h1 className="px-6 text-2xl font-bold text-white">Logo</h1>
          </div>
          <div className="px-6 text-base font-semibold text-white">
            <ul className="flex justify-between ">
              <li className="mx-6 uppercase hover:underline">Home </li>
              <li className="mx-6 uppercase hover:underline">About</li>
              <li className="mx-6 uppercase hover:underline">Services</li>
            </ul>
          </div>
          <div className="px-2 font-semi-bold text-white">
            <buttton className="px-4 py-2 text-base font-bold text-black bg-white rounded-md uppercase ">
              Let's talk
            </buttton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
