'use client'; // Ensure this is a client component
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faDesktop, faNetworkWired, faHeadset, faUsersCog, faCode, faPhoneAlt, faCloud } from "@fortawesome/free-solid-svg-icons";


const Card2 = () => {
    const slides = [
        {
          title: "Hardware Repair & Installation",
          description: "Intermediate",
          icon: faTools,
          progress: 70, // Progress in percentage
        },
        {
          title: "Device Imaging & Setup",
          description: "Advanced",
          icon: faDesktop,
          progress: 97,
        },
        {
          title: "IT Support",
          description: "Advanced",
          icon: faHeadset,
          progress: 100,
        },
        {
          title: "AD & User Management",
          description: "Proficient",
          icon: faUsersCog,
          progress: 75,
        },
        {
            title: "Networking Protocols",
            description: "Beginner",
            icon: faNetworkWired,
            progress: 67,
        },
        {
          title: "Automation Scripting",
          description: "Intermediate",
          icon: faCode,
          progress: 78,
        },
        {
          title: "Phone System Administration",
          description: "Beginner",
          icon: faPhoneAlt,
          progress: 60,
        },
        {
          title: "Cloud-Server Administration",
          description: "Intermediate",
          icon: faCloud,
          progress: 75,
        },
      ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative p-8 max-w-sm bg-white/30 backdrop-blur-lg rounded-lg border border-white/50 shadow-lg">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={slides[currentSlide].icon} className="text-4xl mb-4" />
          <h2 className="text-xl font-bold mb-2">{slides[currentSlide].title}</h2>
          <p className="text-gray-100 mb-6 text-center font-light">{slides[currentSlide].description}</p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${slides[currentSlide].progress}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between space-x-4">
          <button
            className="bg-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/30 transition"
            onClick={handlePrevSlide}
          >
            Previous
          </button>
          <button
            className="bg-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/30 transition"
            onClick={handleNextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
