"use client"
import { dessertItems } from '@/constants/Dessert'; // Import the actual data array
import { Coffee } from 'lucide-react';
import Heading from '@/components/Heading';
import Image from 'next/image';

export default function Dessert() {
  return (
    <section className="w-full mx-auto mt-20 sm:mt-32 px-4">
      <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-28">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src={require("../../public/desert.png")}
            alt="Dessert dish"
            width={448}
            height={626}
            className="w-300 h-auto rounded-lg shadow-lg"
            priority
          />
        </div>

        <div className="md:w-1/2 md:pl-8">
          <div className="flex items-center mb-6">
            <Coffee className="text-[#FF9F0D]" size={24} />
            <Heading text="Dessert" />
          </div>

          <div className="space-y-8">
            {/* Use the array of dessert items */}
            {dessertItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${
                      item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">
                    {item.price}$
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm sm:text-base text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
