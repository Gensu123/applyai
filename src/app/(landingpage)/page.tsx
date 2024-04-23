import Logo from "./logo";
import Navigation from "./navigation";
import Loginbutton from "./loginbutton";

const Navbar = () => {
  return (
        <div className="flex items-center justify-between px-10 border-b h-40 w-full">
            <Logo />
            <Navigation />
            <Loginbutton />
        </div>
        
    );
}

export default Navbar;
