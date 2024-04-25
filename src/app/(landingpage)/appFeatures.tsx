import Image from 'next/image';
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";

const AppFeatures = () => {
    return (
        <div className=" p-44">
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-8">App Features</h1>
                <div className="flex flex-wrap justify-center gap-4 md:flex-row">
                    {/* Personalized Job Matching */}
                    <div className=" pt-8 flex-1 max-w-xs flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg min-h-[300px]">
                    <div className='bg-[#D0CAF9] bg-opacity-50 w-20 h-20 flex justify-center items-center rounded-xl'>
                    <IoBriefcaseOutline size={50} color='green' />
                    </div>

                        <h2 className="  text-lg font-semibold mt-2">Personalized Job Matching</h2>
                        <p className="text-sm text-center mt-1">
                            Our intelligent algorithm matches you with job opportunities that align with
                            your skills, experience, and career goals.
                        </p>
                    </div>
                    {/* Effortless Application Process */}
                    <div className="  pt-8 flex-1 max-w-xs flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg min-h-[300px]">
                    <div className='bg-[#D0CAF9] bg-opacity-50 w-20 h-20 flex justify-center items-center rounded-xl'>
                    <FaFileInvoice size={50} color='#5724E1' />
                    </div>
                        <h2 className="text-lg font-semibold mt-2">Effortless Application Process</h2>
                        <p className="text-sm text-center mt-1">
                            Apply to multiple jobs with just a few clicks, saving you time and effort.
                        </p>
                    </div>
                    {/* User-Friendly Interface */}
                    <div className=" pt-8 flex-1 max-w-xs flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg min-h-[300px]">
                    <div className='bg-[#FFD465] bg-opacity-50 w-20 h-20 flex justify-center items-center rounded-xl'>
                        
                        <MdOutlineComputer size={50} color='#FFD465'/>
                    </div>
                        <h2 className="text-lg font-semibold mt-2">User-Friendly Interface</h2>
                        <p className="text-sm text-center mt-1">
                            Our intuitive interface makes navigating the job search process a breeze, even for beginners.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppFeatures;
