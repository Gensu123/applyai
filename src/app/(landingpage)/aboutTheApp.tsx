
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaUserGroup } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt';
import { SiSimpleanalytics } from "react-icons/si";

  
const AboutTheApp = () => {
    const progress = 76;
  const radius = 40; // The radius of the circle
  const circumference =  2 *  Math.PI * radius; // The total circumference of the circle
  const offset = circumference - (progress / 100) * circumference; 
    return (
        
      <div className="container mx-auto p-44 flex flex-col lg:flex-row items-center justify-between  ">
        
        <Tilt>
        <div className="flex flex-s items-center">
            
          {/* Square Card behind progress circle */}
         
          <div className="relative flex justify-center items-center">

            {/* Card */}
            <div className="absolute w-80 h-80 bg-white shadow-xl rounded-3xl z-10"></div>
            {/* Progress circle */}
            <div className="relative w-80 h-80 z-20">
              
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Define the gradient */}
        <defs>
          <linearGradient id="progress-gradient" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#7DFCEA', stopOpacity: 0.75 }} />
            <stop offset="100%" style={{ stopColor: '#0BC0CF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          className="text-gray-200"
          strokeWidth="10"
          cx="50"
          cy="50"
          r={radius.toString()}
          fill="transparent"
        />

        {/* Foreground circle with gradient */}
        <circle
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r={radius.toString()}
          fill="transparent"
          strokeDasharray={circumference.toString()}
          strokeDashoffset={offset.toString()}
          transform="rotate(90 50 50)" // Rotate the circle to start from the bottom
          stroke="url(#progress-gradient)"
        />

        {/* Text in the center */}
        <text x="50" y="50" fontFamily="Verdana" fontSize="15" textAnchor="middle" alignmentBaseline="middle">
          75K
        </text>
      </svg>
      <div className='justify-center text-center'>Job Matching your skills</div>
    </div>
   <div className='flex-shrink'>
    <div className="absolute p-4 bg-purple-500 rounded-md left-4 top-3/4 transform -translate-y-2 -translate-x-full z-30 w-[80px] h-[80px] flex items-center justify-center text-center "><FaUserGroup size={40} color='white'/></div>
    <div className="absolute p-4 bg-purple-500 rounded-md top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-30 w-[80px] h-[80px]  flex items-center justify-center text-center"><SiSimpleanalytics size={40}  color = 'white'/>
</div> 
</div>  
          </div>
      
        </div>
         </Tilt>
  
        <div className="mt-6 lg:mt-0 lg:ml-10 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">Introducing ApplyAI</h1>
          <p className="mb-6">
            Our platform is designed to revolutionize the way you discover and apply for jobs
            tailored to your unique skills and preferences. Whether you're a seasoned professional
            or just starting your career, ApplyAI empowers you to find the perfect job match
            effortlessly. Say goodbye to endless job listings and hello to personalized job
            recommendations that match your expertise and aspirations.
          </p>
        <Link href="/pricing">
          <Button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            View Pricing
          </Button>
        </Link>
        </div>
      </div>

    );
  };
  
  export default AboutTheApp;
  