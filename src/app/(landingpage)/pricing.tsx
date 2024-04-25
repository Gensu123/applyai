// Pricing.js

const Pricing = () => {
    return (
        <div className="p-44">
            <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-20">Pricing</h1>
                <div className="flex flex-shrink justify-center gap-6 md:gap-8  "> {/* Reduced gap */}

                    {/* Basic Plan */}
                    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-lg min-h-[380px] w-full md:w-60 hover:scale-110 hover:mr-4  transition duration-500 "> {/* Adjusted size */}
                        <h2 className="text-lg font-semibold mt-2 mb-4">Basic</h2>
                        <p className="text-4xl font-bold mb-4">5$</p> {/* Adjusted size */}
                        <p className="text-sm text-center mb-6  ">
                            Access essential features for free with our Basic plan. Get started on your job search journey without any cost, including personalized job matching, effortless application process, and real-time job updates
                        </p>
                        <button className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-500 ">
                            Buy Now
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="flex flex-col items-center p-8 bg-purple-500 rounded-xl shadow-xl min-h-[420px] w-full md:w-72 transform scale-110 hover:scale-125  transition duration-500"> {/* Increased size and added shadow */}
                        <h2 className="text-lg font-semibold mt-2 mb-4">Premium</h2>
                        <p className="text-5xl font-bold mb-4">10$</p>
                        <p className="text-sm text-center mb-6">
                            Access essential features for free with our Basic plan. Get started on your job search journey without any cost, including personalized job matching, effortless application process, and real-time job updates
                        </p>
                        <button className="before:ease relative  px-6 py-2 rounded-lg  overflow-hidden border  bg-white text-purple-500 shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-purple-500 before:opacity-10 before:duration-1000 hover:shadow-purple-500 hover:before:-translate-x-40">
                            Buy Now
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-lg min-h-[380px] w-full md:w-60 hover:scale-110 hover:ml-4   transition duration-500"> {/* Adjusted size */}
                        <h2 className="text-lg font-semibold mt-2 mb-4">Enterprise</h2>
                        <p className="text-4xl font-bold mb-4">15$</p> {/* Adjusted size */}
                        <p className="text-sm text-center mb-6">
                            Access essential features for free with our Basic plan. Get started on your job search journey without any cost, including personalized job matching, effortless application process, and real-time job updates
                        </p>
                        <button className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-500 ">
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;
