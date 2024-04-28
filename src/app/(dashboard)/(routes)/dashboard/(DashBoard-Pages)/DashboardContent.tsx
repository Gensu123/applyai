// pages/dashboard.js or a similar file
'use client'

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { IoIosCloudUpload } from 'react-icons/io'; // Make sure you have installed the react-icons package
import { BsBriefcaseFill } from "react-icons/bs";
import { IoSchoolSharp } from "react-icons/io5";
import { BsBookFill } from "react-icons/bs";
import { MdOutlinePalette } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const DashboardContent = () => {
  return (
    <div className="p-8">
    <div className="flex items-center justify-between   rounded-lg">
      <div className="flex items-center space-x-4 flex-grow ">
        {/* Profile image */}
        <Image src="/Test.png" alt="Olivia Simmons" width={187} height={187} className="rounded-full shadow-black shadow-xl " />
        {/* Greeting message */}
        <div className="min-w-0 p-10 ">
          <h2 className="text-5xl font-bold text-gray-700  pb-4">Hey, I am Front-end Developer,</h2>
          <h3 className="text-4xl text-gray-500  pb-4">Based in Brazil 🇧🇷</h3>
          <p className="text-gray-700 text-2xl  " >Olivia Simmons</p>
        </div>
      </div>
      {/* Upload button */}
      <div className="flex-shrink-0 ml-4 pr-[118px]  ">
        <Button className=" w-[223px] h-[72px] flex items-center  bg-purple-500 hover:bg-purple-600 text-white text-md font-extrabold rounded-xl">
          Upload Resume <IoIosCloudUpload size={20} className="ml-2" />
        </Button>
      </div>
    </div>

    <div className="flex justify-center items-center  ">
      
  <div className="grid grid-cols-2 gap-8">
    {/* Work Experience */}
    <div className='border-2 border-grey-100 rounded-3xl'>
    <div className="bg-purple-200 p-6 rounded-3xl shadow-xl w-[631px] h-[259px] border-white border-4">
      <h3 className="text-3xl font-semibold mb-2">Work Experience:</h3>
      
      <div className="flex items-center  space-x-4 h-44 ">
      <BsBriefcaseFill size={40} className="text-purple-600"/>
        <div>
          <p className="text-2xl font-semibold">Executive Manager</p>
          <p className="text-xl">3 Years - Gorme Pharmaceuticals</p>
        </div>
      </div>
    </div>
    </div>
    {/* Education */}
    <div className='border-2 border-grey-100 rounded-3xl'>
    <div className="bg-[#C1F4E6] p-6 rounded-3xl shadow-xl w-[631px] h-[259px] border-white border-4">
      <h3 className="text-3xl font-semibold mb-2">Education:</h3>
      <div className="flex items-center  space-x-4 h-44 ">
        <IoSchoolSharp  size={40} className="text-purple-600"/>
      <div>
      <p className="text-2xl font-semibold">Bachelor</p>
      <p className='text-xl'>TUMS University of Engineering</p>
      </div>
    </div>
    </div>
</div>
    {/* Skills */}
    <div className='border-2 border-grey-100 rounded-3xl'>

    <div className="bg-[#FAE0F2] p-6 rounded-3xl shadow-xl w-[631px] h-[259px] border-white border-4">
      <h3 className="text-3xl font-semibold mb-2">Skills:</h3>
      <div className="flex items-center  space-x-4 h-44 ">
      <MdOutlinePalette   size={40} color='#FF7AD6 ' />
        <div>
      <p className="text-2xl font-semibold">UI Designer</p>
      <p className='text-xl'>6 Month Internship</p>
      </div>
    </div>
    </div>
    </div>
    {/* Hobbies */}
    <div className='border-2 border-grey-100 rounded-3xl'>

    <div className="bg-[#CBDAFA] p-6 rounded-3xl shadow-xl w-[631px] h-[259px] border-white border-4">
      <h3 className="text-3xl font-semibold mb-2">Hobbies:</h3>
      

      <div className="flex items-center  space-x-4 h-44 ">
        <BsBookFill  size={40} color='#447EFA' />

        <div>
      <p className="text-2xl font-semibold">Reading Book</p>
      <p className='text-xl'>700 Pages a Day</p>
      </div>
    </div>
    </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default DashboardContent;
