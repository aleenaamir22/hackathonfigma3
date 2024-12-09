"use client"
import React from "react";
import Image from "next/image";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-black">

        <div className="flex flex-col md:flex-row justify-between items-center bg-black px-[135px] py-[50px]">
          <div className="text-white md:w-[50%] w-[100%]">
              <h2 className="text-[20px] md:text-[32px] font-semibold"><span className="text-[#FF9F0D]">St</span>ill Need Our Support?</h2>
              <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">Don&#39;t wait make a smart & logical quote here. Its pretty easy.</p>
          </div>

          <div className="flex md:mt-0 mt-[20px]">
            <input type="text" placeholder="Enter Your Email"
              className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2"
            />
            <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]">Subscribe Now</button>
          </div>

          
        </div>

          <hr className="my-4 border-[#FF9F0D] mx-[135px]" />

      <div className="mx-auto w-full max-w-screen-xl ">
        <div className="grid grid-cols-2  md:gap-[50px] px-0 md:px-[135px] py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white text-gray-500">
              About Us.
            </h2>
            <ul className="text-gray-500  font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                  orporate clients and leisure travelers has been relying on
                  Groundlink for dependab safe, and professional chauffeured car
                  service in major cities across World.
                </p>
              </li>
              <li className="flex gap-[16.5px]">
                <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>

                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">
                    Opening Houres
                  </h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Mon - Sat(8.00am - 9.00pm)
                  </h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Sunday-Closed
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white text-gray-500">
            Useful Links
            </h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Partner
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Team 
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Menu
                </a>
              </li> 

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Contact
                </a>
              </li> 
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white text-gray-500">
            Help?
            </h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Term & conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Reporting
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Documentation 
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Support Policy
                </a>
              </li> 

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Privacy
                </a>
              </li> 
            </ul>
          </div>
          <div className="mt-10 md:mt-0flex flex-col items-center space-y-2 ">
          <h2 className="mb-6 text-xl font-semibold uppercase text-gray-500">Recent Post</h2>
          <ul className="space-y-6">
            {[1, 2, 3].map((_, index) => (
              <li key={index} className="flex gap-4">
                <div>
                    <Image 
                    className="w-[100px] h-[100px] object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-200"
                    src={require("../../public/recentPost.png")}
                    alt="recent post"
                    width={500}
                    height={500}
                        />
                  <p className="text-xs text-gray-400">20 Feb 2022</p>
                  <p className="text-sm text-gray-200">Keep Your Business</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>
        
        
        <div className="w-[100%] px-4 py-6 bg-gray-100 dark:bg-[#FF9F0D] md:flex md:items-center md:justify-between">
          <span className="text-sm text-[#333] sm:text-center">
        Copyright @2024 by Aleena AMIR. All RightsReserved.
          </span>

          <div className="flex justify-center gap-[14px]">
  <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
    <FaFacebookF className="text-[#4F4F4F] text-[20px]" />
  </div>
  <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
    <FaTwitter className="text-[#4F4F4F] text-[20px]" />
  </div>
  <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
    <FaInstagram className="text-[#4F4F4F] text-[20px]" />
  </div>
  <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
    <FaYoutube className="text-[#4F4F4F] text-[20px]" />
  </div>
  <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
    <FaPinterest className="text-[#4F4F4F] text-[20px]" />
  </div>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;