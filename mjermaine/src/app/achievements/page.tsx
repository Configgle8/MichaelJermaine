'use client'; // Ensure this is a client component

import GlassMorphismCard from "../components/GlassMorphisimCard";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import { useRouter } from 'next/navigation';

const AchievementsPage = () => {

  const router = useRouter();
  const handleBackClick = () => {
    router.push('/about');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-700 via-blue-800 to-purple-700 relative">
      <div className="h-1/2 w-full bg-white flex flex-col items-center justify-center">
        <h1 className="py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-gray-700 hover:scale-110 hover:text-blue-800 duration-1000 cursor-none whitespace-nowrap">
          Certificates
        </h1>

        <div className="mb-4 text-sm sm:text-base md:text-lg lg:text-lg flex flex-wrap justify-center p-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <a href="/Certs/C1.pdf" target="_blank" rel="noopener noreferrer"
            className="text-center p-2 sm:p-3 md:p-4 text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 font-semibold shadow-2xl rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-200 hover:scale-110 hover:text-blue-800 duration-1000"
          >
            Foundations of Cybersecurity
          </a>
          <a href="/Certs/C4.pdf" target="_blank" rel="noopener noreferrer"
            className="text-center p-2 sm:p-3 md:p-4 text-sm sm:text-base md:text-md lg:text-lg text-gray-700 font-semibold shadow-2xl rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-200 hover:scale-110 hover:text-blue-800 duration-1000"
          >
            Connect & Protect Networks & Security
          </a>
          <a href="/Certs/C2.pdf" target="_blank" rel="noopener noreferrer"
            className="text-center p-2 sm:p-3 md:p-4 text-sm sm:text-base md:text-md lg:text-lg text-gray-700 font-semibold shadow-2xl rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-200 hover:scale-110 hover:text-blue-800 duration-1000"
          >
            Play it Safe Manage Security Risks
          </a>
          <a href="Certs/C3.pdf" target="_blank" rel="noopener noreferrer"
            className="text-center p-2 sm:p-3 md:p-4 text-sm sm:text-base md:text-md lg:text-lg text-gray-700 font-semibold shadow-2xl rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-200 hover:scale-110 hover:text-blue-800 duration-1000"
          >
            Tools of the Trade Linux SQL
          </a>
        </div>
      </div>

      {/* Bottom side */}
      <div className="flex flex-col p-4 md:p-10 items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold bg-clip-text text-white hover:scale-110 duration-1000 cursor-none whitespace-nowrap">
          Skills
        </h1>
      </div>

      <div className="p-4 flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-10 mx-auto mb-10">
        <GlassMorphismCard />
        <Card2 />
        <Card3 />
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="shadow-2xl fixed bottom-4 left-4 md:absolute md:bottom-4 md:left-4 px-4 py-2 bg-blue-500 duration-1000 text-white rounded-full hover:bg-blue-700"
        style={{ width: 'auto' }}
      >
        Back
      </button>
    </div>
  );
};

export default AchievementsPage;
