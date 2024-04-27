import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
    return (
        <header className="border-y-2 border-b-grey-50	flex justify-between items-center px-8   h-20 w-full ">
            <h1 className="text-xl font-semibold text-gray-500">Welcome,
            <div className="break-normal text-black indent-4 ">
            Olivia Simmons
            </div>
            </h1> 
            
            <div className="flex items-center space-x-4">
                {/* Replace these with your actual icons */}
               <div className=" rounded-full w-12 h-12 shadow-xl flex item-center justify-center">
                 <button aria-label="Notifications" >
                <IoIosNotificationsOutline size={30} />
                </button>
                </div>
                {/* <div className=" rounded-full w-12 h-12 shadow-xl flex item-center justify-center">
                <button aria-label="Settings">
                   Settings
                </button>
                </div> */}
            </div>
        </header>
    );
};

export default Header;
