'use client'; // Ensure this is a client component

import Link from 'next/link';
import Achieve from '../assets/Achieve.jpg'

const Info = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <div className="flex flex-col space-y-4">
        <Link href="/Achievements & Awards" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
        <img src={Achieve} alt="Achievement & Award" className="w-64 h-64 object-contain"/>

          Achievements & Awards
        </Link>
        <Link href="/Background" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
        <img src="../assets/Journey.jpg" alt="Journey" className="w-64 h-64 object-contain"/>
          
        </Link>
        <Link href="/Interests" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          My Interests
        </Link>
      </div>
    </div>
  );
};

export default Info;
