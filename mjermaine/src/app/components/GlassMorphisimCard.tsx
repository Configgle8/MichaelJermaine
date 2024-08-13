'use client'; // Ensure this is a client component
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJava, faLinux } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";
import {faJsSquare, faCss3Alt, faHtml5 } from "@fortawesome/free-brands-svg-icons";


const GlassMorphismCard = () => {
  const slides = [
    {
      title: "Python",
      description: "Advanced",
      icon: faPython,
      progress: 90, // Progress in percentage
    },
    {
      title: "Java",
      description: "Proficient",
      icon: faJava,
      progress: 80,
    },
    {
      title: "SQL",
      description: "Intermediate",
      icon: faDatabase,
      progress: 50,
    },
    {
        title: "Type/JavaScript",
        description: "Advanced",
        icon: faJsSquare,
        progress: 85,
    },
    {
      title: "CMD Line",
      description: "Proficient",
      icon: faTerminal,
      progress: 75,
    },
    {
      title: "Linux",
      description: "Intermediate",
      icon: faLinux,
      progress: 50,
    },
    {
        title: "CSS3",
        description: "Advanced",
        icon: faCss3Alt,
        progress: 95,
    },
    {
        title: "HTML",
        description: "Advanced",
        icon: faHtml5,
        progress: 90,
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

export default GlassMorphismCard;
