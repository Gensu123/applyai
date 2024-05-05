import React from "react";

const Testimonials = () => {
  return (
    <div className="pt-32 p-4  md:p-28">
         <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_350px_at_10%_4200px,rgba(213,197,255,.25),transparent)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_350px_at_100%_4200px,rgba(186,255,236,.25),transparent)]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_350px_at_100%_4800px,rgba(244,233,193,.25),transparent)]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_350px_at_10%_4800px,rgba(194,244,230,.3),transparent)]"></div></div></div></div>
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        Testimonials
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Danny Moonsoon",
            title: "CEO & Founder",
            testimonial: "I found my dream job within days of using ApplyAI.",
            imageUrl: "/Image/diimeji.jpg",
          },
          {
            name: "Abby Hollis",
            title: "Lead at Uniting VIC",
            testimonial:
              "Thanks to ApplyAI, I landed a job that perfectly matches my skills.",
            imageUrl: "/Image/Mykala.jpg",
          },
          {
            name: "Omar Farooq",
            title: "VP of Product Design",
            testimonial:
              "Thanks to ApplyAI, I landed a job that perfectly matches my skills.",
            imageUrl: "/Image/DomTate.jpg",
          },
        ].map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100 + 100}`}
            className="bg-slate-200 rounded-xl shadow-md p-6">
            <div className="flex flex-col items-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
              />
              <h5 className="text-lg font-bold">{item.name}</h5>
              <p className="text-sm mb-2">{item.title}</p>
              <p className="text-sm text-center text-slate-600">
                {item.testimonial}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
