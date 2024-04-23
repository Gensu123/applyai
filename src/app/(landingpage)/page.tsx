import Logo from "./logo";
import Navigation from "./navigation";
import Loginbutton from "./loginbutton";

const Navbar = () => {
  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
            <a href="/" className="text-black">Logo</a>
        </div>
        <div className="flex-grow">
            <ul className="hidden md:flex justify-center list-none space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/services" className="hover:underline">Services</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
        </div>
        <div className="hidden md:block">
            <a href="/signin" className="text-black hover:underline">Sign in</a>
        </div>
    </div>
</div>



                
    );
}

export default Navbar;
