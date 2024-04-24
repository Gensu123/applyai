"use client"
import { useState } from 'react';
import Link from 'next/link';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import HeroSection from './heroSection';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          
            <nav className="flex justify-between items-center h-16 border-b border-gray-200">
                         <Image src="/Logo.png" height={120} width={120} alt="logo" />

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
                        {isMenuOpen ? <IoIosClose size="28" /> : <IoIosMenu size="28" />}
                    </button>
                </div>

                <div className="hidden md:flex justify-center flex-1 mr-8 ">
                    <Link href="/" className="text-gray-700 hover:text-black mx-8">Home</Link>
                    <Link href="/about" className="text-gray-700 hover:text-black mx-8">About</Link>
                    <Link href="/services" className="text-gray-700 hover:text-black mx-8">Services</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-black mx-8">Contact</Link>
                </div>

                <div className="hidden md:block shrink-0">
                    <Link href="/sign-in">
                        <Button className="bg-[#5422DD] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</Button>
                    </Link>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl md:hidden">
                    <Link href="/" className="block px-4 py-2 text-lg hover:underline">Home</Link>
                    <Link href="/about" className="block px-4 py-2 text-lg hover:underline">About</Link>
                    <Link href="/services" className="block px-4 py-2 text-lg hover:underline">Services</Link>
                    <Link href="/contact" className="block px-4 py-2 text-lg hover:underline">Contact</Link>
                </div>
            )}
             <HeroSection />
        </div>

        
        
    );
};

export default Navbar;
