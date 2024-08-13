'use client'; // Ensure this is a client component

import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';

const About: NextPage = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  const handleClick = (destination: string) => {
    if (destination === 'achievements') {
      console.log('Navigating to Achievements page');
      router.push('/achievements');
    } else if (destination === 'background') {
      console.log('Navigating to Background');
      router.push('/background');
    } else if (destination === 'E&P') {
      console.log('Navigating to Education');
      router.push('/E&P');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-50">
      {/* Content Section */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 cursor-none whitespace-nowrap">
            Who is Michael?
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            "If there is no struggle, there is no progress” ~ Frederick Douglass
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col gap-6 md:gap-10 bg-gray-200 p-8 justify-center items-center">
          <div className="flex w-full rounded-lg shadow-2xl bg-gradient-to-r from-white to-gray-200 hover:bg-white transition-all">
            <a
              onClick={() => handleClick('achievements')}
              className="p-4 cursor-pointer w-full text-center font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 whitespace-nowrap"
            >
              Achievements & Awards
            </a>
          </div>

          <div className="flex w-full rounded-lg shadow-2xl bg-gradient-to-r from-white to-gray-200 hover:bg-white transition-all">
            <a
              onClick={() => handleClick('background')}
              className="p-4 cursor-pointer w-full text-center font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 whitespace-nowrap"
            >
              My Background
            </a>
          </div>

          <div className="flex w-full rounded-lg shadow-2xl bg-gradient-to-r from-white to-gray-200 hover:bg-white transition-all">
            <a
              onClick={() => handleClick('E&P')}
              className="p-4 cursor-pointer w-full text-center font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 whitespace-nowrap"
            >
              Education & Profession
            </a>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="shadow-2xl fixed md:absolute bottom-4 left-4 px-4 py-2 bg-blue-500 duration-1000 text-white rounded-full hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
};

export default About;
