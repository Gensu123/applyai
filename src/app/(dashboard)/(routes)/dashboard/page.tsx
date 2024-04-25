import { UserButton } from "@clerk/nextjs";
import DashboardPage from "./dashboard";
import Image from 'next/image';
import Link from 'next/link';
import { IoIosHome, IoIosPaper, IoIosStats, IoIosNotifications, IoIosSettings, IoIosLogOut } from 'react-icons/io';

const Dashboard = () => {
    return ( 
        <aside className="h-screen w-64 sticky top-0 " aria-label="Sidebar">
            
        <div className="  bg-gray-50 rounded dark:bg-gray-800 h-full">
        <div className="flex justify-center items-center p-4">
            <Image src="/Logo.png" height={120} width={120} alt="logo" />
            </div>
          <ul className="space-y-4">
            <div>
              <Link href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700">
                  <IoIosHome size={30} className="text-gray-400 group-hover:text-white mr-3"/>
                  Dashboard
              </Link>
            </div>
            <div>
              <Link href="/job-recommendations"
                 className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700">
                  <IoIosPaper size={30} className="text-gray-400 group-hover:text-white mr-3"/>
                  Job Recommendations
                
              </Link>
            </div>
            <div>
              <Link href="/application-tracking"
                 className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700">
                  <IoIosStats size={30} className="text-gray-400 group-hover:text-white mr-3"/>
                  Application Tracking
                
              </Link>
            </div>
            <div>
              <Link href="/notifications"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700">
                  <IoIosNotifications size={30} className="text-gray-400 group-hover:text-white mr-3"/>
                  Notifications
                
              </Link>
            </div>
            <div>
              <Link href="/resources-tips"
                 className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700">
                  <IoIosPaper size={30} className="text-gray-400 group-hover:text-white mr-3"/>
                  Resources and Tips
                
              </Link>
            </div>
            <div>
              <Link href="/settings"
                 className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700">
                  <IoIosSettings size={30} className="text-gray-400 group-hover:text-white mr-3"/>
                  Settings
                
              </Link>
            </div>
            <div className="flex justify-center items-center p-4">
                <UserButton />
                </div>
          </ul>
        </div>
      </aside>
        
    )
}

export default Dashboard;