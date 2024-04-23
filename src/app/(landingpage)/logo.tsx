import Image from 'next/image';

const Logo = () => {
    return (
        <div className="absolute">
        <Image src="/Logo.png" height={500} width={120} alt="logo" />
        </div>
    );
    }

    export default Logo;