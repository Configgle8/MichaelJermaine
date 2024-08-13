'use client';

import { useRouter } from 'next/navigation';
import Carousel from '../components/Carousel';

const Background = () => {
  const router = useRouter();
  
  const handleBackClick = () => {
    router.push('/about');
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-700 via-blue-800 to-purple-700">
      {/* Left Side */}
      <div className="flex flex-col items-center justify-center gap-8 md:w-1/2 w-full p-4 md:p-0">
        <div className="mx-10 shadow-2xl bg-white font-bold text-gray-700 p-4 rounded-lg">
          <h1 className="bg-clip-text lg:text-3xl text-transparent bg-gradient-to-r from-purple-500 to-pink-500 truncate">
            Milwaukee, Wisconsin
          </h1>
          <p className="text-xs md:text-base font-normal">
            Born and raised on Milwaukee's north side, I call this city home. Known for its classic Midwest charm and passionate Packers fans, Milwaukee is the best place for a Friday fish fry and cheering on your favorite sports team.
          </p>
        </div>

        <div className="mx-10 shadow-2xl bg-white font-bold text-gray-700 p-4 rounded-lg">
          <h1 className="bg-clip-text lg:text-3xl text-transparent bg-gradient-to-r from-purple-500 to-pink-500 truncate">
            Interests
          </h1>
          <p className="text-xs md:text-base font-normal">
            I’m passionate about sports, especially basketball and UFC, and staying active has always been a part of my life. I also enjoy discovering and experiencing different cultures, finding it both enriching and enlightening.
          </p>
        </div>

        <div className="mx-10 shadow-2xl bg-white font-bold text-gray-700 p-4 rounded-lg">
          <h1 className="bg-clip-text lg:text-3xl text-transparent bg-gradient-to-t from-purple-500 to-pink-500 truncate">
            Goals
          </h1>
          <p className="text-xs md:text-base font-normal">
            My primary goal is to build a successful career in the tech industry, focusing on areas that align with my passions. I am committed to continuously expanding my skill set and staying updated with the latest advancements in technology. I want to collaborate with innovative teams, contribute to impactful projects, and seize opportunities that allow me to grow both professionally and personally. 
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center md:w-1/2 w-full bg-white p-4 md:p-0">
        <div className="w-full md:w-3/4 h-full md:h-3/4 shadow-2xl rounded-xl bg-gradient-to-b from-white via-gray-100 to-gray-200">
          <Carousel />
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="shadow-2xl absolute bottom-4 left-4 px-4 py-2 bg-blue-500 duration-1000 text-white rounded-full hover:bg-blue-700"
      >
        Back
      </button>
    </div>
  );
};

export default Background;
