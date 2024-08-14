'use client';

import { useRouter } from 'next/navigation';

const EPPage = () => {
  const router = useRouter();
  
  const handleBackClick = () => {
    router.push('/about');
  };

  return (
    <div className="min-h-screen w-screen flex flex-col bg-gradient-to-br from-gray-400 via-white to-gray-400 relative">
      {/* First Div (Top Section) */}
      <div className="flex-1 flex flex-col md:flex-row w-full">
        {/* Image Section */}
        <div className="p-4 sm:p-0 flex-1 flex items-center justify-center">
          <div className="shadow-2xl w-full max-w-xs md:max-w-md rounded-xl bg-gradient-to-br from-gray-400 via-white to-gray-400 overflow-hidden">
            <img src="/assets/pexel.jpg" alt="UWM" className="w-full h-auto" />
          </div>
        </div>

        {/* Text Section */}
        <div className=" flex-1 flex flex-col items-center justify-center">
          <h1 className="font-bold text-2xl md:text-3xl text-gray-700 mb-4">Education & Profession</h1>
          <div className="text-center p-4 sm:p-0">
            <h2 className="font-semibold text-gray-700 text-lg">Education</h2>
            <p className="text-gray-700 mb-4">I am a senior at The University of Wisconsin-Milwaukee. Pursuing my Bachelors of Business Administration in IT Management & HR Management, I've maintained a high grade point average making the Dean's list several times. Striving to utilize my degree to its fullest potential, I aim to drive innovation and organizational success.</p>
            
            <h2 className="font-semibold text-gray-700 text-lg">Profession</h2>
            <p className="text-gray-700">My relevant experience lies in my most recently held tech positions. In my roles as an Intern and a Support Consultant, I learned how to strategically lead and collaborate with a team. These experiences honed my ability to problem-solve and manage projects, while providing valuable insights into this field of work.</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="p-4 sm:p-0 flex-1 flex items-center justify-center">
          <div className="shadow-2xl w-full max-w-xs md:max-w-md rounded-xl bg-gradient-to-br from-gray-300 via-zinc-200 to-zinc-200 overflow-hidden">
            <img src="/assets/computer.jpg" alt="UWM" className="w-full h-auto" />
          </div>
        </div>
      </div> 

      {/* Second Div (Bottom Section) */}
      <div className="hidden md:block h-16 md:h- w-full flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-800 to-purple-700 absolute bottom-0 p-4">
        <h5 className="font-extralight text-xs md:text-sm text-center text-white">"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." ~Malcolm X</h5>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="shadow-2xl absolute bottom-4 left-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
      >
        Back
      </button>
    </div>
  );
};

export default EPPage;
