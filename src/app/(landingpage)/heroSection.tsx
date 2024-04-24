// HeroSection.js
import Image from 'next/image';
import centralImage from '../../../public/Hero.png'; // Update with the path to your image file

const HeroSection = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-black    py-10">
        <div className="flex justify-center items-center text-purple-800 mb-4">
        Your Perfect Career Match Awaits
        </div>
      <h1 className="text-6xl font-bold mb-4">
        Unlock Your Dream Job with 
        <div className="text-6xl font-bold mb-4 relative inline-block  font-semibold">
                ApplyAI
                {/* Inline SVG for the scribble line */}
                <div>
                <svg className="absolute bottom-0   left-0 " width="200" height="20" viewBox="0 0 209 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,10 c30,-10 40,20 70,0 s40,-20 70,10 s40,10 80,-10" stroke="#805ad5" strokeWidth="2" fill="none" />
                </svg>
                </div>
            </div>
      </h1>
      
      
      <p className="text-gray-500 mb-6">
        Streamline Your Job Search Effortlessly and Land Your Ideal Role Faster
      </p>
      <button className="bg-[#5724E1] text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-300 transition duration-300">
        Get It Now
      </button> 
      <div className="mt-10 ">
        {/* Set the width and height properties as needed */}
        <Image 
          
          src={centralImage} 
          alt="Job Recommendations" 
          width={900}  // Desired width
          height={718} // Desired height
          objectFit="contain" // This will ensure that the image is scaled correctly
          className="rounded-xl shadow-xl"
        />
      </div>
      {/* More content goes here */}
    </div>
  );
};

export default HeroSection;