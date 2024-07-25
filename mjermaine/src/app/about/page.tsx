'use client'; // Ensure this is a client component

import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';
import Carousel from '../components/Info'; // Make sure this path is correct

const images = [
  { src: '/assets/Achieve.jpg', link: '/pages/page1'},
  {src: '/assets/Journey.jpg', link: '/pages/page2'},
  {src: '/assets/Interests.jpg', link: '/pages/page3'}
];

const About: NextPage = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/page');
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
          <p className="text-center mt-2 text-gray-600">"If there is no struggle, there is no progress” ~ Frederick Douglas 

</p>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-gray-200 p-8 flex flex-col items-center">
          <div className="mt-32 w-auto h-1/2 bg-blue-700 flex justify-center rounded-xl shadow-2xl opacity-80 hover:opacity-100 duration-1000 overflow-hidden h-72">
          <Carousel images={images} />
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-600">
              Select one of the pictures to read about a different aspect of my background. Super excited to be in contact with you, always seeking collaboration on projects & work<span className='text-5xl'> &#128101;</span>
            </p>
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
