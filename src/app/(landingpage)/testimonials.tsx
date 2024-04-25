// Testimonials.js

const Testimonials = () => {
    return (
        <div className="py-12 bg-white">
            <h1 className="text-3xl font-bold text-center mb-8">Testimonials</h1>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">

                {/* Testimonial Card */}
                {[
                    { name: "Danny moonsoon", title: "CEO&founder", testimonial: "I found my dream job within days of using ApplyAI. The personalized job recommendations were spot-on, and the application process was seamless." },
                    { name: "Abby hollis", title: "Lead at uniting vic", testimonial: "Thanks to ApplyAI, I landed a job that perfectly matches my skills and aspirations. Highly recommend it to anyone looking for their next career move." },
                    { name: "Omar farooq", title: "Vp of product design", testimonial: "Thanks to ApplyAI, I landed a job that perfectly matches my skills and aspirations. Highly recommend it to anyone looking for their next career move." },
                ].map((item, index) => (
                    <div key={index} className="max-w-xs bg-gray-100 rounded-xl p-6 shadow-md">
                        <div className="flex flex-col items-center">
                            {/* Placeholder for Avatar Image */}
                            <div className="w-24 h-24 mb-3 rounded-full shadow-lg bg-gray-300" />
                            <h5 className="text-lg font-bold">{item.name}</h5>
                            <p className="text-sm mb-4">{item.title}</p>
                            <p className="text-sm text-center text-gray-600">{item.testimonial}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
