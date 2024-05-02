import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Faq = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true, // Animations will only play once
        });
    }, []);

    const faqs = [
        { id: 'faq1', question: "How does ApplyAI match me with jobs?", answer: "Answer to question 1." },
        { id: 'faq2', question: "Is ApplyAI free to use?", answer: "Answer to question 2." },
        { id: 'faq3', question: "Can I customize my job preferences on ApplyAI?", answer: "Answer to question 3." },
        { id: 'faq4', question: "How often are new job listings updated on ApplyAI?", answer: "Answer to question 4." },
        { id: 'faq5', question: "Is ApplyAI suitable for both professionals and entry-level job seekers?", answer: "Answer to question 5." },
    ];

    return (
        <div className="p-8 md:p-12">
            <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">FAQ</h1>
            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <motion.div 
                      key={faq.id} 
                      layoutId={faq.id} 
                      onClick={() => setSelectedId(selectedId === faq.id ? null : faq.id)} 
                      className="mb-4 p-6 bg-gray-100 rounded-md shadow-sm cursor-pointer"
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100}`} // Stagger the animation for each FAQ item
                    >
                        <p className="text-lg font-medium">{faq.question}</p>
                        <span className="text-blue-600 text-2xl">{selectedId === faq.id ? '-' : '+'}</span> {/* Toggle icon */}
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div 
                      className="fixed inset-0 z-50 flex justify-center items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                        {/* Overlay backdrop */}
                        <motion.div 
                          className="absolute inset-0 bg-black bg-opacity-25"
                          onClick={() => setSelectedId(null)}
                          initial={{ backdropFilter: 'blur(0px)' }}
                          animate={{ backdropFilter: 'blur(4px)' }}
                          transition={{ duration: 0.3 }}
                        />
                        {/* Popup */}
                        <motion.div 
                          className="relative p-6 bg-white rounded-md shadow-lg max-w-xl m-4 z-50"
                          layoutId={selectedId}
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 50, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                        >
                            <motion.button 
                              className="absolute top-0 right-0 m-4"
                              onClick={() => setSelectedId(null)}
                            >
                              X
                            </motion.button>
                            {faqs.filter(faq => faq.id === selectedId).map((filteredFaq) => (
                                <motion.div key={filteredFaq.id}>
                                    <motion.h5 className="text-lg font-medium">{filteredFaq.question}</motion.h5>
                                    <motion.p>{filteredFaq.answer}</motion.p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Faq;
