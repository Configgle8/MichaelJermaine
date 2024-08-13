'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./components/Welcome'), {
  ssr: false // Disable SSR for this component
});

export default function Home() {
  const router = useRouter();

  const handleClick = (destination: string) => {
    if (destination === 'about') {
      // Handle custom logic for about link
      console.log('Navigating to About page');
      router.push('/about');
    } else {
      // Handle other destinations or logic
      console.log('Navigating to Home');
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="py-4 font-display font-semibold px-4 ">
        <div className="container mx-auto flex justify-between items-center rounded-full bg-gradient-to-tl from-gray-600 via-blue-700 to-gray-700 py-2 px-4">
          <div className="flex gap-4 md:gap-12 items-center">
            <a onClick={() => handleClick('home')} className="text-gray-400 hover:text-white duration-1000 cursor-pointer">
              Home
            </a>
            <span className='text-3xl'>&#x1F44B;</span>
            <a onClick={() => handleClick('about')} className="text-gray-400 hover:text-white duration-1000 cursor-pointer">
              About
            </a>
          </div>
        </div>
      </nav>

      <div id='landingContent' className='flex flex-col items-center justify-center flex-1'>
        <div className='shadow-2xl rounded-full h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72'>
          <img
            src='/assets/CroppedHeadshot.png'
            alt='pfp'
            className='rounded-full object-cover w-full h-full transition-opacity duration-700 shadow-2xl'
          />
        </div>
        <h1 className="mt-6 overflow-hidden z-10 text-4xl hover:scale-110 font-bold text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text bg-white p-4 sm:p-5 md:p-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent duration-1000 cursor-default text-edge-outline animate-title bg-clip-text bg-white">
          Michael Anderson
        </h1>
        <h1 className="font-extralight text-base sm:text-lg md:text-xl lg:text-2xl">
          <DynamicComponent />
        </h1>
      </div>

      <div id="aboutContent" className="container mx-auto py-6 px-4 hidden">
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <p className="mt-2 text-gray-600">This is the about information.</p>
      </div>
    </div>
  );
}
