'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';


const images = [
  '/assets/Achieve.jpg',
  '/assets/Sausage.jpg',
  '/assets/Interests.jpg',
  '/assets/Bucks.jpg',
  '/assets/Hoan.jpg',
  '/assets/Fair.png'

];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState('opacity-100');

  useEffect(() => {
    const interval = setInterval(() => {
      setFade('opacity-0'); // Start fading out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade('opacity-100'); // Start fading in
      }, 500); // Duration of the fade-out
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full max-w-full h-full max-h-full overflow-hidden">
      <Image
        width={800}
        height={800}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ${fade}`}
      />
    </div>
  );
};

export default Carousel;
