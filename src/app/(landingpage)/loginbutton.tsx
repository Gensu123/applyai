"use client"
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const LoginButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        const navLinks = document.querySelector(".nav-links");
        navLinks?.classList.toggle('top-[18%]')
        setIsMenuOpen(!isMenuOpen);
        };

    return (
        <>
            <div className="">
                {/* Use legacyBehavior to keep using <a> inside Link */}
                <Link href="/sign-in" legacyBehavior>
                    <a>
                        
                    </a>
                </Link>
                <div onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden ml-[650px] ">
                    {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
                </div>
            </div>
            <div className={`nav-links ${isMenuOpen ? "close" : ""}`}>
                {/* Navigation links can be added here */}
            </div>
        </>
    );
};

export default LoginButton;
