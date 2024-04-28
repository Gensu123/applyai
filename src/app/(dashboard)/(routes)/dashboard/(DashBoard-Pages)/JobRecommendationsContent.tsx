'use client';

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CiSearch } from "react-icons/ci";

const JobRecommendationsContent = () => {
  return (
    <div className=" p-8">
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Job Recommendations</h2>
        <div className="relative w-full max-w-xs">
          
          <input type="text" placeholder="Search Jobs, Companies" className="border border-gray-300 rounded-md w-full py-2 pl-3 pr-10 focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
          <CiSearch size={24}/>
          </button>
        </div>
        
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <h1 className="text-lg font-semibold text-gray-800">Filter by:</h1>
        <Select>
          <SelectTrigger className="py-2 pl-3 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-[283px] sm:w-auto flex-1">
            <SelectValue placeholder="Experience Level"></SelectValue>
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="py-2 pl-3 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-[283px] sm:w-auto flex-1">
          <SelectValue placeholder="Job Type"></SelectValue>
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="py-2 pl-3 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-[283px] sm:w-auto flex-1">
          <SelectValue placeholder="Industry"></SelectValue>
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
        </Select>

        

       

        <Button className="bg-[#5724E1] text-white rounded-md focus:outline-none focus:bg-purple-700 py-2 px-4 flex-shrink-0 w-[167px] h-[46px]">
          Apply
        </Button>
      </div>
  

    </div>
  );
}

export default JobRecommendationsContent;
