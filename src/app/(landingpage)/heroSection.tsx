// HeroSection.js
import React, { useEffect } from 'react';
import Image from 'next/image';
import centralImage from '../../../public/Hero.png'; // Ensure this path is correct
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    // Load external script for any widgets
    const script = document.createElement('script');
    script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
        duration: 1200
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-black pt-20 md:p-12 lg:p-44 ">
      <h1 className="text-3xl md:text-5xl font-bold mb-4" data-aos='fade-up'>
        Unlock Your Dream Job with 
        <div className="text-4xl md:text-6xl font-bold mb-4 relative inline-block">
          ApplyAI
          <svg className="absolute bottom-0 left-0" width="200" height="20" viewBox="0 0 209 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,10 c30,-10 40,20 70,0 s40,-20 70,10 s40,10 80,-10" stroke="#805ad5" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </h1>
      
      <p className="text-base md:text-lg text-gray-500 mb-6" data-aos='fade-up'>
        Streamline Your Job Search Effortlessly and Land Your Ideal Role Faster
      </p>
      
      <div className='flex justify-center items-center' id="getWaitlistContainer" data-waitlist_id="16500" data-widget_type="WIDGET_2"></div>
      <link rel="stylesheet" type="text/css"  href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"/>
      
      <div className="mt-10" data-aos='fade-up'>
        <Tilt>
          <div className="rounded-xl shadow-xl overflow-hidden">
            <Image
              src={centralImage}
              alt="Job Recommendations"
              width={550} // These sizes might still be too large for very small devices
              height={550}
              objectFit="contain"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default HeroSection;
