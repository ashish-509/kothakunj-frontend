import React, { useState } from "react";
import Hero_image from "../public/Images/Hero_image.png";
import { useTheme } from "../lib/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const content = {
    title: "Kotha Kunj",
    subtitle: "Your ultimate room finder...",
    paragraph: `Finding the perfect rental space just got easier with KothaKunj. Whether you're a student, an office worker, or someone moving to the city for a new opportunity, our app simplifies your search for rooms and office spaces. Tailored to meet the needs of those coming from afar, KothaKunj helps you find your home away from home in the bustling areas of Nepal. Explore a variety of listings and make your transition to city life smooth and hassle-free.`,
    buttonText: "Read More",
  };

  return (
    <div
      className={`relative w-full h-screen ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-purple-100 text-gray-700"
      } flex flex-col justify-center items-center text-center pt-20 pb-20`}
    >
      <section className="flex flex-col md:flex-row items-center justify-center h-full w-full pr-10">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={Hero_image.src}
            alt="Hero"
            className="h-50 w-50 md:h-[50%] md:w-[50%] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-6">
          <h1 className="text-5xl font-bold mb-5">{content.title}</h1>
          <h2 className="text-3xl mb-8 pb-8">{content.subtitle}</h2>
          <p
            className={`mb-6 text-xl pr-40 text-justify ${
              isExpanded ? "" : "line-clamp-3"
            }`}
            style={{ color: theme === "dark" ? "white" : "inherit" }}
          >
            {content.paragraph}
          </p>
          <button
            onClick={toggleExpand}
            className={`px-6 py-5 pb-4 rounded-lg transition duration-300 ${
              theme === "dark"
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {isExpanded ? "Read Less" : content.buttonText}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hero;

