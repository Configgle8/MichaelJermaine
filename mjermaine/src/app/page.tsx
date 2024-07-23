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
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="p-4 font-display font-semibold justify-between flex">
          <div className="p-4 container mx-auto flex justify-between items-center rounded-full bg-gradient-to-tl from-gray-800 via-blue-700 to-gray-800">
            <div className="flex justify-between gap-12 items-center">
              <a onClick={() => handleClick('home')} className="ml-4 text-gray-400 hover:text-white duration-1000 cursor-pointer">
                Home
              </a>
              <span className='text-3xl'>&#x1F44B;</span>
              <a onClick={() => handleClick('about')} className="mr-4 text-gray-400 hover:text-white duration-1000 cursor-pointer">
                About
              </a>
            </div>
          </div>
        </nav>
        <div id='landingContent' className='flex items-center justify-center flex-col'>
          <h1 className="p-20 overflow-hidden flex items-center z-10 text-4xl hover:scale-110 font-bold text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-white p-5">
            Michael Anderson
          </h1>
          <h1 className="overflow-hidden font-extralight">
            <DynamicComponent />
          </h1>
        </div>
        <div id="aboutContent" className="container mx-auto py-6 px-4 hidden">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mt-2 text-gray-600">This is the about information.</p>
        </div>
      </div>
    </div>
  );
}
