import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const Pricing = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    });

    return (
        <div className="p-8 md:p-12"> {/* Adjusted padding */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-12" data-aos='fade-up'>Pricing</h1>
                <div className="grid gap-8 md:grid-cols-3"> {/* Changed to grid layout */}
                    {/* Basic Plan */}
                    <div data-aos-offset='325' data-aos='fade-up' className="flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-lg min-h-[380px] hover:scale-105 transition duration-300">
                        <h2 className="text-lg font-semibold mt-2 mb-4">Basic</h2>
                        <p className="text-2xl font-bold mb-4">$5</p> {/* Adjusted size */}
                        <p className="text-sm text-center mb-6">
                            Access essential features for free with our Basic plan. Get started on your job search journey without any cost, including personalized job matching, effortless application process, and real-time job updates.
                        </p>
                        <button className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-500">
                            Buy Now
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div data-aos-offset='325' data-aos-delay='250' data-aos='fade-up' className="flex flex-col items-center p-6 bg-purple-500 rounded-xl shadow-lg min-h-[380px] hover:scale-105 transition duration-300">
                        <h2 className="text-lg font-semibold mt-2 mb-4">Premium</h2>
                        <p className="text-2xl font-bold mb-4">$10</p> {/* Adjusted size */}
                        <p className="text-sm text-center mb-6">
                            Upgrade to our Premium plan for advanced features and exclusive benefits. Enjoy everything in the Basic plan plus additional perks tailored to your needs.
                        </p>
                        <button className="bg-white text-purple-500 font-semibold px-6 py-2 rounded-lg hover:bg-purple-100 transition duration-500">
                            Buy Now
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div data-aos-offset='325' data-aos-delay='350' data-aos='fade-up' className="flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-lg min-h-[380px] hover:scale-105 transition duration-300">
                        <h2 className="text-lg font-semibold mt-2 mb-4">Enterprise</h2>
                        <p className="text-2xl font-bold mb-4">$15</p> {/* Adjusted size */}
                        <p className="text-sm text-center mb-6">
                            For large organizations and businesses, our Enterprise plan offers custom solutions and dedicated support. Contact us to discuss your requirements and get a personalized quote.
                        </p>
                        <button className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-500">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
