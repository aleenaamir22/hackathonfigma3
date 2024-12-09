
import React from "react";
import { experienceItems } from "../constants/Experience";
import Image from "next/image";
const ExperienceSection = () => {
  return (
    <div className="experience-container">
      {experienceItems.map((item, index) => (
        <div key={index} className="experience-item w-1/4">
          <Image
            src={item.src} 
            alt={item.label}
            className="rounded-lg"
            width={200}
            height={200}
          />
          <div className="experience-info">
            <p className="value">{item.value}</p>
            <p className="label">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
