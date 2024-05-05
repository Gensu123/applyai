import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdCancel } from "react-icons/md";

const Faq = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, // Animations will only play once
    });
  }, []);

  const faqs = [
    {
      id: "faq1",
      question: "How does ApplyAI match me with jobs?",
      answer:
        "We use advanced AI to match your skills and preferences with job listings.",
    },
    {
      id: "faq2",
      question: "Is ApplyAI free to use?",
      answer:
        "Yes, there's a free Basic plan, with premium features available for a subscription.",
    },
    {
      id: "faq3",
      question: "Can I customize my job preferences on ApplyAI?",
      answer:
        "Absolutely! You can set preferences for job type, location, salary, and more.",
    },
    {
      id: "faq4",
      question: "How often are new job listings updated on ApplyAI?",
      answer:
        "Job listings are updated daily to ensure you see the most current opportunities.",
    },
    {
      id: "faq5",
      question:
        "Is ApplyAI suitable for both professionals and entry-level job seekers?",
      answer: "Yes, ApplyAI is designed for job seekers at all career levels.",
    },
  ];

  return (
    <div className="pt-32 p-4 sm:p-12 lg:p-24">
      <h1
        className="text-2xl sm:text-3xl font-bold text-center mb-6"
        data-aos="fade-up">
        FAQ
      </h1>
      <div className="max-w-3xl mx-auto text-center">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            layoutId={faq.id}
            onClick={() => setSelectedId(selectedId === faq.id ? null : faq.id)}
            className="mb-4 p-4 sm:p-6 bg-gray-100 rounded-md shadow-sm cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            aria-expanded={selectedId === faq.id}
            role="button">
            <p className="text-md sm:text-lg font-medium">{faq.question}</p>
            <span className="text-blue-600 text-xl">
              {selectedId === faq.id ? "-" : "+"}
            </span>
            {selectedId === faq.id && (
              <motion.p className="text-sm sm:text-md mt-2  ">
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-25"
              onClick={() => setSelectedId(null)}
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(4px)" }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              className="relative p-4 sm:p-6 bg-white rounded-md shadow-lg max-w-lg m-4 text-center"
              layoutId={selectedId}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.25 }}>
              {/* I  REMOVED THE X LETTER AND USED AN ICON FROM LUCIDE REACT FOR ASTHETIC PURPOSES. I REMOVE M ARGIN TOO BECASE FOR LONGER HEADINGS, IT WAS GROWING INTO THE BUTTON AND DISRUPTING UX. */}
              <motion.button
                className="absolute top-0 right-0  w-10 h-10"
                onClick={() => setSelectedId(null)}>
                <MdCancel size={30} />
              </motion.button>
              {faqs
                .filter((faq) => faq.id === selectedId)
                .map((filteredFaq) => (
                  <motion.div key={filteredFaq.id}>
                    <motion.h5 className="text-lg font-medium border-b p-2 border-gray-300">
                      {filteredFaq.question}
                    </motion.h5>
                    <motion.p className="p-2">{filteredFaq.answer}</motion.p>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faq;
