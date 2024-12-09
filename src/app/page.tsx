"use client"
import React from 'react'
import Image from 'next/image'
import FoodCategory from '@/pages/Foodcategory';
import ExperienceSection from '@/components/Experience';
import Dessert from '@/components/Dessert';
import OurChefs from '@/components/OurChef/page';
import Menu from '@/components/menu/menu';
import StarterMenu from '@/components/StartMenu';
import PartnersAndClients from '@/components/PartnerClient';
import ChefGrid from '@/components/OurChef/ChefGrid';
import CheckOut from '@/pages/checkout/checkpage';
import Error from '@/pages/404';
import SignUpPage from '@/pages/signup/SignUp';
import { FaCheck } from 'react-icons/fa';




const Page = () => {
  return (
    <div>
       
      <section className="bg-black px-4 md:px-20 flex flex-col md:flex-row items-center justify-between py-10 w-full">
        <div className="text-white md:w-1/2">
          <h1 className="text-orange-500 text-2xl md:text-4xl font-semibold">
            It's Quick & Amusing!
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold">
            The Art of <span className="text-orange-500">Speed</span> Food Quality
          </h2>
          <p className="text-sm md:text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <button className="bg-orange-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full mt-4">
            See More
          </button>
        </div>
        <div className="mt-6 md:mt-0">
          <Image
            src={require("../../public/food.png")}
            alt="Hero Image"
            width={700}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="bg-black px-4 md:px-20 flex flex-col md:flex-row items-center justify-between py-10">
        <div className="text-white md:w-1/2">
          <h1 className="text-orange-500 text-2xl md:text-4xl font-semibold">About Us</h1>
          <h2 className="text-3xl md:text-5xl font-bold">
            We Create the Best <span className="text-orange-500">Foody</span> Products
          </h2>
          <p className="text-sm md:text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            consequat.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
            <FaCheck className="text-orange-500 mr-2"/>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
            <FaCheck className="text-orange-500 mr-2"/>
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="flex items-center">
            <FaCheck className="text-orange-500 mr-2"/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <button className="bg-orange-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full mt-6">
            See More
          </button>
        </div>
        
        <div>
        <div className='w-[600px]' >
              <Image
                alt="Eggs"
                className="w-full object-cover h-[350px] object-center block opacity-90 rounded-md"
                src={require("../../public/foodpic1.jpeg")}
                width={530}
                height={400}
              />
            </div>
            <br></br>
            <div className="flex justify-between items-center space-x-4">
  
  <div className="w-[300px]">
    <Image
      alt="Coldrink"
      className="w-full object-cover h-[300px] object-center block opacity-90 rounded-lg"
      src={require("../../public/foodpic2.jpeg")}
      width={530}
      height={400}
    />
  </div>
  <div className="w-[300px]">
    <Image
      alt="Sandwich"
      className="w-full object-cover h-[300px] object-center block opacity-90 rounded-lg"
      src={require("../../public/foodpic3.jpeg")}
      width={530}
      height={400}
    />
     </div>
     </div>
      </div>
           
      </section>
    
    <FoodCategory/>
     <OurChefs/>
     <PartnersAndClients/>
     <Menu/>
    <ChefGrid/>
    <SignUpPage/>
    <CheckOut/>
    <Error/>
    </div>
  );
}


export default Page
