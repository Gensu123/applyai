import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <div className="pt-24 justify-center items-center">
      {" "}
      {/* Adjusted padding for mobile */}
      <div className="  md:px-[112px] mx-4 lg:mx-0">
        <h1
          className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12"
          data-aos="fade-up">
          Pricing
        </h1>
        <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
          {" "}
          {/* Adjusted grid gap and columns */}
          {/* Explore Plan */}
          <div
            data-aos-offset="325"
            data-aos="fade-up"
            className="flex flex-col items-center p-6 justify-center bg-slate-200  mb-3 rounded-xl shadow-lg  hover:scale-105 transition duration-300">
            <h2 className="text-2xl sm:text-xl font-semibold mt-2 mb-4">
              Explore
            </h2>
            <p className="text-lg sm:text-2xl font-bold mb-4">$0</p>
            <ul className="text-sm sm:text-sm text-left mb-4 sm:mb-6 list-disc pl-4 ">
              <li>Access basic job recommendations</li>
              <li>5 personalized job postings per month</li>
              <li>Basic support</li>
            </ul>
            <button className="bg-purple-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-purple-600  transition duration-500">
              Get Started
            </button>
          </div>
          {/* Enhance Plan */}
          {
            <div
              data-aos-offset="325"
              data-aos-delay="100"
              data-aos="fade-up"
              className="flex mb-3  flex-col items-center p-6 justify-center  bg-slate-200 rounded-xl shadow-lg min-h-[300px] sm:min-h-[380px] hover:scale-105 transition duration-300">
              <h2 className="text-2xl sm:text-xl font-semibold mt-2 mb-4">
                Enhance
              </h2>
              <p className="text-lg sm:text-2xl font-bold mb-4">$10</p>
              <ul className="text-sm sm:text-sm text-left mb-4 sm:mb-6 list-disc pl-4">
                <li>Advanced job recommendations</li>
                <li>20 personalized job postings per month</li>
                <li>Email and chat support</li>
              </ul>
              <button className="bg-purple-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-purple-600 transition duration-500">
                Buy Now
              </button>
            </div>
          }
          {/* Optimize Plan */}
          <div
            data-aos-offset="325"
            data-aos-delay="200"
            data-aos="fade-up"
            className="flex bg-slate-200 mb-3  flex-col items-center p-6 justify-center  rounded-xl shadow-lg  min-h-[300px] sm:min-h-[380px] hover:scale-105 transition duration-300">
            <h2 className="text-2xl sm:text-xl font-semibold mt-2 mb-4">
              Optimize
            </h2>
            <p className="text-lg sm:text-2xl font-bold mb-4">$25</p>
            <ul className="text-sm sm:text-sm text-left mb-4 sm:mb-6 list-disc pl-4  text-black">
              <li>5,000 job recommendations a month</li>
              <li>Access to exclusive job listings</li>
              <li>Priority support with direct account manager</li>
            </ul>
            <button className="bg-purple-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-purple-200 transition duration-500">
              Buy Now
            </button>
          </div>
          {/* Enterprise Plan */}
          <div
            data-aos-offset="325"
            data-aos-delay="300"
            data-aos="fade-up"
            className="flex text-white  flex-col bg-purple-500 items-center justify-center p-6  rounded-xl shadow-lg min-h-[300px] sm:min-h-[380px] hover:scale-105 transition duration-300">
            <h2 className="text-2xl sm:text-xl font-semibold mt-2 mb-4">
              Enterprise
            </h2>
            <p className="text-lg sm:text-2xl font-bold mb-4">Custom Pricing</p>
            <ul className="text-sm sm:text-sm text-left mb-4 sm:mb-6 list-disc pl-4">
              <li>Customized AI-driven job matching solutions</li>
              <li>Unlimited job postings tailored to your company's needs</li>
              <li>Dedicated account manager and 24/7 support</li>
            </ul>
            <button className="bg-purple-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-purple-600 transition duration-500">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
