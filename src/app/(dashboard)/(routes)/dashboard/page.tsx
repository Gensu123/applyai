  // components/Sidebar.j

//   This code is a part of a React component called Sidebar. It represents the sidebar section of a web page.

// The code includes a navigation menu with a link to a "Settings" page. The link is styled with CSS classes for appearance and hover effects. The link is wrapped inside a <Link> component from the React Router library, which allows navigation within the application.

// Below the navigation menu, there is a <UserButton> component. It is responsible for rendering a button related to user actions, such as signing in or signing out. The component accepts several props, including appearance, showName, and afterSignOutUrl, which control the appearance and behavior of the button.

// Overall, this code represents the structure and content of a sidebar component in a React application, including navigation links and a user button.


  import Image from 'next/image';
  import Link from 'next/link';
  import { UserButton } from '@clerk/nextjs';
  import {
    IoIosHome,
    IoIosPaper,
    IoIosStats,
    IoIosNotifications,
    IoIosSettings,
  } from 'react-icons/io';

  const Sidebar = () => {
    return (
      
      <aside className="flex flex-col h-screen w-64 sticky top-0 bg-gray-50 dark:bg-gray-800" aria-label="Sidebar">
        <div className="flex-1">
          <div className="flex justify-center items-center p-4">
            <Image src="/Logo.png" height={120} width={120} alt="logo" />
          </div>
          <nav className="mt-5">
          <ul className="space-y-4">
              <div>
                <Link href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  dark:text-white hover:bg-purple-500 dark:hover:bg-gray-700 ">
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
            </ul>
          </nav>
        </div>
        <div className="p-8 w-full flex  justify-center text-center bg ">
          <UserButton
          appearance={{
            variables: {fontSize:'16px',  } 
          }}
          showName={true}
          afterSignOutUrl='http://localhost:3000/'

          />

        </div>
      </aside>
    );
  };

  export default Sidebar;
