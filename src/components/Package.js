import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Package() {
  return (
    <div>
      <div className="font-poppins">
        <div
          className="flex items-center justify-center h-72 bg-fixed bg-top bg-contain font-poppins"
          style={{ backgroundImage: `url("../images/header.png")` }}
        >
          <div>
            <div className="p-5 font-bold text-center drop-shadow-3xl">
              <h1 className="tracking-widest text-8xl text-white">
                OUR PACKAGES
              </h1>
              <p className="text-white text-2xl">
                <Link to="/">
                  <span className="text-white/70">Home </span>
                </Link>
                {">"} Our Package
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#fce6b9] py-24">
          <h1 className="text-[#0A4251] text-center text-5xl font-extrabold">
            Our Packages
          </h1>
          <p className="text-[#0A4251]  text-center text-xl mt-2 mb-16">
            Pick A Pack Best-Suited For Your Brand
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white">
              <div>
                <img
                  src="/images/clients/uspizza.png"
                  alt="Logo"
                  className="w-full"
                />
              </div>
              <div className="">
                <h1 className="text-3xl">
                    Tiktok Package
                </h1>
                <ul className="list-disc">
                    <li>30 post/month (adjustable)</li>
                    <li></li>
                </ul>
              </div>
            </div>
            <div className="bg-white"></div>
            <div className="bg-white"></div>
            <div className="bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
