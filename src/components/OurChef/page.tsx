"use client"
import React from "react";
import Hero from "./Hero";
import ChefGrid from "./ChefGrid";
import Image from "next/image";

const OurChefs = () => {
  return (
    <div>
      <section className="bg-black md:px-[135px] py-[50px]">
        {/* Title Section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes whitespace-nowrap">
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold text-center">
            <span className="text-[#FF9F0D]">Me</span>et Our Chefs
          </h1>
        </div>

        {/* Chefs Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image
            src={require("../../../public/chef1.png")}
            alt="Chef 1"
            className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer transition-transform hover:scale-105"
          />
          <Image
            src={require("../../../public/chef2.png")}
            alt="Chef 2"
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer transition-transform hover:scale-105"
          />
          <Image
            src={require("../../../public/chef3.png")}
            alt="Chef 3"
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer transition-transform hover:scale-105"
          />
          <Image
            src={require("../../../public/chef4.png")}
            alt="Chef 4"
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer transition-transform hover:scale-105"
          />
        </div>
      </section>
    </div>
  );
};

export default OurChefs;
