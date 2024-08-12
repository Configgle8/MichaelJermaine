'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Import Link from next/link
import type { NextPage } from 'next';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Page1: NextPage = () => {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleAboutClick = () => {
    router.push('/about');
  };

  return (
    <div className="min-h-screen flex items-stretch bg-gradient-to-b from-white to-gray-200">
      <div className="flex-1 flex flex-col gap-20 p-4 bg-white shadow-md items-center justify-center text-gray-600">
        {/* Panel 1 Content */}
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores optio reiciendis reprehenderit ex nemo et eos, mollitia maxime corrupti aut nostrum quisquam iusto! Blanditiis numquam deserunt illo porro veritatis?</p>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores optio reiciendis reprehenderit ex nemo et eos, mollitia maxime corrupti aut nostrum quisquam iusto! Blanditiis numquam deserunt illo porro veritatis?</p>
      </div>
      <div className="flex-1 flex p-4 bg-gray-200 shadow-md items-center justify-center text-gray-600">
        {/* Panel 2 Content */}
        <div className='triangle text-9xl'>
          <div className="absolute inset-0 flex justify-center items-center mt-20">
            <h1 className='hover:scale-110 duration-1000 cursor-none'>🏆</h1>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-4 bg-white shadow-md items-center justify-center text-gray-600">
        {/* Panel 3 Content */}
        <button
          onClick={openPopup}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 z-10">
          <FontAwesomeIcon icon={faFolderOpen} />
          Showcase 
        </button>
        {/* Popup Modal */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-4 w-80 relative">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                &#10005; {/* Unicode for 'X' symbol */}
              </button>
              {/* Popup Content */}
              <h2 className="text-lg font-bold text-gray-700 mb-2">My Work</h2>
              <ul className="list-disc list-inside">
                <li className="text-gray-700">
                  <Link legacyBehavior href="/../work/C&P.jpg">
                    <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      Connect & Protect Networks & Security
                    </a>
                  </Link>
                  <span className="text-sm text-gray-500"> (286.00 KB)</span>
                </li>
                <li className="text-gray-700">
                  <Link legacyBehavior href="/files/Image1.png">
                    <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      Image1.png
                    </a>
                  </Link>
                  <span className="text-sm text-gray-500"> (250.00 KB)</span>
                </li>
                <li className="text-gray-700">
                  <Link legacyBehavior href="/files/Presentation.pptx">
                    <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      Presentation.pptx
                    </a>
                  </Link>
                  <span className="text-sm text-gray-500"> (500.00 KB)</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* New button to navigate to the About page */}
      <button
        onClick={handleAboutClick}
        className="shadow-2xl absolute bottom-4 left-4 px-4 py-2 bg-blue-500 duration-1000 text-white rounded-full hover:bg-blue-700"
      >
        Go to About
      </button>
    </div>
  );
};

export default Page1;
