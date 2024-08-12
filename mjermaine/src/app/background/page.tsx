'use client'; // Ensure this is a client component
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';




const Background = () => {
    const router = useRouter();
    const handleBackClick = () => {
        router.push('/about');
      };

    return (
        <div className="h-screen flex bg-gradient-to-br from-blue-700 via-blue-800 to-purple-700">
            <div className="flex flex-col items-center justify-center gap-8 w-1/2">

                <div className="hidden md:block  mx-10 shadow-2xl bg-white font-bold text-gray-700 p-4 rounded-lg items-center justify-center ">
                    <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 truncate'>Milwaukee, Wisconsin</h1>
                    <p className="text-xs md:text-base font-normal">I was born and raised on the north-side of Milwaukee, Wisconsin. Some would consider milwaukee, "The epitome of midwest culture", or the "Great home of the Packers", I just like to call it home. No better place to get Fish Fry on a friday, and watch your favorite sports team.</p>
                </div>

                <div className=" hidden md:block mx-10 shadow-2xl bg-white font-bold text-gray-700 p-4 rounded-lg items-center justify-center">
                    <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 truncate'>Interests</h1>
                    <p className="text-xs md:text-base font-normal">I am an avid sports fan! I love Basketball & UFC I grew up playing a lot of sports so I always stay active keeping good habits. I found a passion for technology in so many ways; frontend-development, cybersecurity, & networking, always looking for ways to leverage technology. I love experiencing new things and new aspects of other cultures always a humbling yet fun experience walking in others shoes.</p>
                </div>

                <div className=" hidden md:block mx-10 shadow-2xl bg-white font-bold text-gray-700 p-4 rounded-lg items-center justify-center">
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-t from-purple-500 to-pink-500 truncate">Goals</h1>
                    <p className="text-xs md:text-base font-normal">Everybody has intrinsic motivation I belive mine is similar to most. I want to be a successful person in this world and I want to work with successful people in this world. Surrounded by family and close friends in a comfortable environment. I want to excel at whatever I set out to do, i've ensured that thus far. I have no plan to stop.</p>
                </div>

                <div className="block md:hidden h-20 w-20 md:h-40 md:w-40 shadow-2xl rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-200 items-center justify-center">
                <svg className="mx-auto mt-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="50" height="50">
                <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/>
                </svg>
                </div>
                <h1 className='block md:hidden font-bold text-white'>Active Lifestyle</h1>

                <div className="block md:hidden h-20 w-20 md:h-40 md:w-40 shadow-2xl rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-200 items-center justify-center">
                <svg className='mx-auto mt-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50" height="50">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7s0 0 0 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0zm160 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0z"/>
                </svg>
                </div>
                <h1 className='block md:hidden font-bold text-white'>Passionate</h1>

                <div className="block md:hidden h-20 w-20 md:h-40 md:w-40 shadow-2xl rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-200 items-center justify-center">
                <svg className="mx-auto mt-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="50" height="50">
                <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z"/>
                </svg>
                </div>
                <h1 className='block md:hidden font-bold text-white cursor-pointer font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 whitespace-nowrap'>Goal-Oriented</h1>
            </div>

            {/* Rightside */}
            <div className="items-center justify-center h-screen w-1/2 flex flex-col md:flex-row bg-white gap-8">
                <div className='flex flex-col items-center justify-center'>
                <div className='h-20 w-20 md:h-40 md:w-40 shadow-2xl rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-200 items-center justify-center'>
                <svg className="mx-auto mt-4 md:mt-8 md:h-24 md:w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50" height="50">
                <path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                </svg>
                </div>
                <h1 className='font-bold text-gray-700 p-4 cursor-none font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 whitespace-nowrap'>Creative Arts</h1>
                </div>

                <div className='flex flex-col items-center justify-center'>
                <div className='h-20 w-20 md:h-40 md:w-40 shadow-2xl rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-200 items-center justify-center'>
                <svg className="mx-auto mt-4 md:mt-8 md:h-24 md:w-24"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50" height="50">
                <path d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152l0 264-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427L0 224c0-17.7 14.3-32 32-32l30.3 0c63.6 0 125.6 19.6 177.7 56zm32 264l0-264c52.1-36.4 114.1-56 177.7-56l30.3 0c17.7 0 32 14.3 32 32l0 203c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"/>
                </svg>
                </div>
                <h1 className='font-bold text-gray-700 p-4 cursor-none font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 whitespace-nowrap'>Reading</h1>
                </div>

                <div className='flex flex-col items-center justify-center'>
                <div className='h-20 w-20 md:h-40 md:w-40 shadow-2xl rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-200 items-center justify-center'>
                <svg className="mx-auto mt-4 md:mt-8 md:h-24 md:w-24"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="50" height="50">
                <path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/>
                </svg>
                </div>
                <h1 className='font-bold text-gray-700 p-4 text-center cursor-none font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 whitespace-nowrap '>Unapologetic Foodie :)</h1>
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
  