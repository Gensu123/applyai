// components/Sidebar.j

//   This code is a part of a React component called Sidebar. It represents the sidebar section of a web page.

// The code includes a navigation menu with a button to a "Settings" page. The button is styled with CSS classes for appearance and hover effects. The button is wrapped inside a <button> component from the React Router library, which allows navigation within the application.

// Below the navigation menu, there is a <UserButton> component. It is responsible for rendering a button related to user actions, such as signing in or signing out. The component accepts several props, including appearance, showName, and afterSignOutUrl, which control the appearance and behavior of the button.

// Overall, this code represents the structure and content of a sidebar component in a React application, including navigation buttons and a user button.

"use client";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import {
  IoIosHome,
  IoIosPaper,
  IoIosStats,
  IoIosNotifications,
  IoIosSettings,
} from "react-icons/io";
import { Button } from "@/components/ui/button";
import { FC } from "react";

// Define the content identifiers as string literals
type Content =
  | "dashboard"
  | "job-recommendations"
  | "application-tracking"
  | "notifications"
  | "resources-tips";

// Define the type for the props your component expects
interface SidebarProps {
  setActiveContent: (content: Content) => void; // assuming setActiveContent doesn't return anything
}
const Sidebar: React.FC<SidebarProps> = ({ setActiveContent }) => {
  const handleContentChange = (content: Content) => {
    setActiveContent(content);
  };

  return (
    <div className="relative h-screen">
      {" "}
      {/* Make sure this div is relative and full-screen height */}
      <div className="z-0 absolute inset-0 bg-[radial-gradient(circle_225px_at_5%_15%,rgba(129,79,171,.25),transparent)]"></div>
      <div className="z-0 absolute inset-0 bg-[radial-gradient(circle_225px_at_5%_25%,rgba(194,244,230,.5),transparent)]"></div>
      <div className="z-0 absolute inset-0 bg-[radial-gradient(circle_225px_at_5%_50%,rgba(244,233,193,.5),transparent)]"></div>
      <div className="z-0 absolute inset-0 bg-[radial-gradient(circle_225px_at_5%_80%,rgba(194,244,230,.5),transparent)]"></div>
      <aside
        className="border-2 border-r-slate	 flex flex-col h-screen w-64 sticky top-0 bg-transparent dark:bg-slate-800  "
        aria-label="Sidebar">
        <div className="flex-1 ">
          <div className="flex justify-center items-center p-8">
            <Image src="/Logo.png" height={120} width={120} alt="logo" />
          </div>
          <nav className="m-4 mt-4">
            <ul className="space-y-4  divide-y-2 divide-y-reverse">
              <div className="group flex items-center p-2 text-base font-normal text-slate-900 rounded-lg dark:text-white relative overflow-hidden cursor-pointer">
                <button
                  onClick={() => handleContentChange("dashboard")}
                  className="z-10 flex items-center w-full h-full">
                  <IoIosHome
                    size={30}
                    className="text-slate-400 group-hover:text-white mr-3"
                  />
                  <span className="relative transition duration-300 ease-in-out group-hover:text-white">
                    Dashboard
                  </span>
                </button>
                <span className="absolute w-full h-full transition-all duration-300 ease-linear bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md opacity-0 group-hover:opacity-200"></span>
              </div>

              <div className="group flex items-center p-2 text-base font-normal text-slate-900 rounded-lg dark:text-white relative overflow-hidden cursor-pointer">
                <button
                  onClick={() => handleContentChange("job-recommendations")}
                  className="z-10 flex items-center w-full h-full">
                  <IoIosPaper
                    size={30}
                    className="text-slate-400 group-hover:text-white mr-3"
                  />
                  <span className="relative transition duration-300 ease-in-out group-hover:text-white">
                    Job Recommendations
                  </span>
                </button>
                <span className="absolute w-full h-full transition-all duration-300 ease-linear bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md opacity-0 group-hover:opacity-200"></span>
              </div>

              <div className="group flex items-center p-2 text-base font-normal text-slate-900 rounded-lg dark:text-white relative overflow-hidden cursor-pointer">
                <button
                  onClick={() => handleContentChange("application-tracking")}
                  className="z-10 flex items-center w-full h-full">
                  <IoIosStats
                    size={30}
                    className="text-slate-400 group-hover:text-white mr-3"
                  />
                  <span className="relative transition duration-300 ease-in-out group-hover:text-white">
                    Application Tracking
                  </span>
                </button>
                <span className="absolute w-full h-full transition-all duration-300 ease-linear bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md opacity-0 group-hover:opacity-200"></span>
              </div>

              <div className="group flex items-center p-2 text-base font-normal text-slate-900 rounded-lg dark:text-white relative overflow-hidden cursor-pointer">
                <button
                  onClick={() => handleContentChange("notifications")}
                  className="z-10 flex items-center w-full h-full">
                  <IoIosNotifications
                    size={30}
                    className="text-slate-400 group-hover:text-white mr-3"
                  />
                  <span className="relative transition duration-300 ease-in-out group-hover:text-white">
                    Notifications
                  </span>
                </button>
                <span className="absolute w-full h-full transition-all duration-300 ease-linear bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md opacity-0 group-hover:opacity-200"></span>
              </div>

              <div className="group flex items-center p-2 text-base font-normal text-slate-900 rounded-lg dark:text-white relative overflow-hidden cursor-pointer">
                <button
                  onClick={() => handleContentChange("resources-tips")}
                  className="z-10 flex items-center w-full h-full">
                  <IoIosPaper
                    size={30}
                    className="text-slate-400 group-hover:text-white mr-3"
                  />
                  <span className="relative transition duration-300 ease-in-out group-hover:text-white">
                    Resources and Tips
                  </span>
                </button>
                <span className="absolute w-full h-full transition-all duration-300 ease-linear bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md opacity-0 group-hover:opacity-200"></span>
              </div>
            </ul>
          </nav>
        </div>

        <div className="p-8 w-full flex  justify-center text-center bg ">
          <UserButton
            appearance={{
              variables: { fontSize: "18px" },
            }}
            showName={true}
            afterSignOutUrl="http://localhost:3000/"
          />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
