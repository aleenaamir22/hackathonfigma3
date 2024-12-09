"use client"
import React from "react";
import Image from "next/image";
import { experienceItems } from "../constants/Experience";

const ExperienceSection = () => {
  return (
    <div className="experience-container">
      {experienceItems.map((item, index) => (
        <div key={index} className="experience-item w-1/4">
          <img
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
