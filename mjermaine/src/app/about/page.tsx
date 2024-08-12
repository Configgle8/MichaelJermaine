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
    <div className="relative min-h-screen flex flex-col">

      {/* Content Section */}
      <div className="flex-1 flex">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-8">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 cursor-none whitespace-nowrap">
            Who is Michael?
          </h1>
          <p className="text-center mt-2 text-gray-600">"If there is no struggle, there is no progress” ~ Frederick Douglas </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 gap-10 bg-gray-200 p-8 flex flex-col items-center justify-center">
          <div className="flex w-full rounded-lg shadow-2xl bg-gradient-to-r from-white to-gray-200 hover:bg-white ">
          <a onClick={() => handleClick('achievements')}><h1 className="p-4 cursor-pointer font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 whitespace-nowrap">Achievements & Awards</h1></a>
          </div>

          <div className="flex w-full rounded-lg shadow-2xl bg-gradient-to-r from-white to-gray-200 hover:bg-white ">
          <a onClick={() => handleClick('background')}><h1 className="p-4 cursor-pointer font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 whitespace-nowrap">My Background</h1></a>
          </div>

          <div className="flex w-full rounded-lg shadow-2xl bg-gradient-to-r from-white to-gray-200 hover:bg-white ">
          <a onClick={() => handleClick('E&P')}><h1 className="p-4 cursor-pointer font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 whitespace-nowrap">Education & Profession</h1></a>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="shadow-2xl absolute bottom-4 left-4 px-4 py-2 bg-blue-500 duration-1000 text-white rounded-full hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
};

export default About;
