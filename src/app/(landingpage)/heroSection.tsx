// HeroSection.js
import React, { useEffect } from "react";
import Image from "next/image";
import centralImage from "../../../public/Job-Recommendations.png"; // Ensure this path is correct
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    // Load external script for any widgets
    const script = document.createElement("script");
    script.src =
      "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="flex px-4  pt-32 flex-col items-center justify-center text-black  md:p-20 lg:p-32 ">
      <h1
        className="text-4xl md:text-3xl lg:text-5xl font-bold mb-3 text-center"
        data-aos="fade-up">
        Unlock Your Dream Job with
        {/* I ADDED A OVERFLOW:CLIP TO FIX THE OVERFLOWING ISSUE FOR THE PAGE SVG IMAGE. */}
        <div className="text-3xl md:text-6xl font-bold mb-3 relative  ml-2 inline-block  overflow-clip">
          ApplyAI
          <svg
            className="absolute bottom-0 overflow-hidden left-0"
            width="180"
            height="18"
            viewBox="0 0 209 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,10 c30,-10 40,20 70,0 s40,-20 70,10 s40,10 80,-10"
              stroke="#805ad5"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </h1>

      {/* ADD A PADDING 4, MAKE  EACH SECTION TO MATCH THE SCREEN FOR EACH LARGE SCREEN. */}

      <p
        className="text-sm md:text-lg text-slate-500 mb-4  text-center"
        data-aos="fade-up">
        Streamline Your Job Search Effortlessly and Land Your Ideal Role Faster
      </p>

      <div
        className="flex justify-center items-center "
        id="getWaitlistContainer"
        data-waitlist_id="16500"
        data-widget_type="WIDGET_1"
        

        
        >
       
        </div>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
      />

      <div className="mt-6" data-aos="fade-up">
        <Tilt>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <Image
              src={centralImage}
              alt="Job Recommendations"
              width={650} // Adjusted for mobile
              height={650} // Adjusted for mobile
              objectFit="contain"
              className="rounded-lg shadow-md"
            />
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default HeroSection;
