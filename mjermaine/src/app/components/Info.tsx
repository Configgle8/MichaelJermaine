'use client';
// components/Carousel.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Image {
  src: string;
  link: string;
}

interface CarouselProps {
  images: Image[];
}

const Info: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter(); // Use router from next/router

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleClick = () => {
    router.push(images[currentIndex].link); // Navigate to the link
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 overflow-hidden">
      <div className="relative w-full h-full group">
        <Image
          src={images[currentIndex].src}
          alt={`ISlide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleClick}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-black bg-opacity-50 text-white p-4 text-center rounded text-extrabold text-4xl"
        >
          . . .
        </button>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Info;
