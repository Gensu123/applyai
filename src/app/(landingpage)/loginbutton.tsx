import Link from "next/link";

const LoginButton = () => {
    return (
        <div>
            <Link href="">
                <button className="bg-[#5724E1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign In
                </button>
            </Link>
        </div>
    );
};

export default LoginButton;
