'use client'; // Ensure this is a client component

import { useRouter } from 'next/navigation';
import Info from '../components/Info';

export default function About() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <div className="relative min-h-screen flex">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-8">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-blue-500 bg-clip-text text-transparent hover:scale-110 hover:text-blue-800 duration-1000 cursor-none whitespace-nowrap">
          Who is Michael?
        </h1>
        <p className="mt-2 text-gray-600">This is the about information.</p>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-gray-200 p-8">
        {/* Add content for the right side here */}
        <Info />




      </div>

      {/* Back Button */}
      <button 
        onClick={handleBackClick}
        className="absolute bottom-4 left-4 px-4 py-2 bg-blue-500 duration-1000 text-white rounded-full hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
}
