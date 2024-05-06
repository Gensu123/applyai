import { IoBriefcaseOutline } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";

const AppFeatures = () => {
  return (
    <div className="pt-32 p-4 md:p-12 lg:p-44 ">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8"> {/* Increased max-width */}
        <div className="text-center">
          <h1
            className="text-2xl sm:text-3xl font-bold mb-10 mt-10"
            data-aos="fade-up">
            App Features
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {/* Personalized Job Matching */}
          <div
            className="flex flex-col items-center bg-slate-200 rounded-lg shadow-lg p-6 text-center"
            data-aos="fade-up">
            <div className="bg-[#D0CAF9] bg-opacity-50 w-16 h-16 flex justify-center items-center rounded-xl">
              <IoBriefcaseOutline size={32} color="green" />
            </div>
            
            <h2
              className="text-md sm:text-lg font-semibold mt-2"
              data-aos="fade-up">
              Personalized Job Matching
            </h2>
            <p
              className="text-xs sm:text-sm text-center mt-1"
              data-aos="fade-up">
              Our intelligent algorithm matches you with job opportunities that
              align with your skills, experience, and career goals.
            </p>
          </div>

          {/* Effortless Application Process */}
          <div
            className="flex flex-col items-center bg-slate-200 rounded-lg shadow-lg p-6 text-center"
            data-aos="fade-up">
            <div className="bg-[#D0CAF9] bg-opacity-50 w-16 h-16 flex justify-center items-center rounded-xl">
              <FaFileInvoice size={32} color="#5724E1" />
            </div>
            <h2
              className="text-md sm:text-lg font-semibold mt-2"
              data-aos="fade-up">
              Effortless Application Process
            </h2>
            <p
              className="text-xs sm:text-sm text-center mt-1"
              data-aos="fade-up">
              Apply to multiple jobs with just a few clicks, saving you time and
              effort.
            </p>
          </div>

          {/* User-Friendly Interface */}
          <div
            className="flex flex-col items-center bg-slate-200 rounded-lg shadow-lg p-6"
            data-aos="fade-up">
            <div className="bg-[#D0CAF9] bg-opacity-50 w-16 h-16 flex justify-center items-center rounded-xl">
              <MdOutlineComputer size={32} color="#FFD465" />
            </div>
            <h2
              className="text-md sm:text-lg font-semibold mt-2 text-center"
              data-aos="fade-up">
              User-Friendly Interface
            </h2>
            <p
              className="text-xs sm:text-sm text-center mt-1"
              data-aos="fade-up">
              Our intuitive interface makes navigating the job search process a
              breeze, even for beginners.
            </p>
          </div>
          {/* Comprehensive Job Sources */}
          <div
            className="flex flex-col items-center bg-slate-200 rounded-lg shadow-lg p-6"
            data-aos="fade-up">
            <div className="bg-[#D0CAF9] bg-opacity-50 w-16 h-16 flex justify-center items-center rounded-xl">
              <FaMagnifyingGlass size={32} color="#0099FF" />
            </div>
            <h2
              className="text-md sm:text-lg font-semibold mt-2 text-center"
              data-aos="fade-up">
              Comprehensive Job Sources
            </h2>
            <p
              className="text-xs sm:text-sm text-center mt-1"
              data-aos="fade-up">
              We gather job listings from top platforms like LinkedIn, Indeed, and more, ensuring you have access to a wide range of opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
