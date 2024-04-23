const navigation = () => {
    return (
        <nav className="w-full">
            <ul className="flex justify-center list-none pr-24">
                <li><a href="/" className="hover:underline mx-8">Home</a></li>
                <li><a href="/about" className="hover:underline mx-8">About</a></li>
                <li><a href="/services" className="hover:underline mx-8">Services</a></li>
                <li><a href="/contact" className="hover:underline mx-8">Contact</a></li>
            </ul>
        </nav>
    );
}
        

export default navigation;