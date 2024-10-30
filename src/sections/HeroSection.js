import React from 'react';
import { motion } from 'framer-motion';
import { smoothScroll } from '../utils/smoothScroll';

const HeroSection = React.forwardRef(() => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
            <div className="container mx-auto px-4 text-center">
                <motion.h1
                    className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Joshua Davis
                </motion.h1>
                <motion.p
                    className="text-2xl mb-8 text-gray-300"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Full-Stack Developer & Cybersecurity Specialist
                </motion.p>
                <motion.div
                    className="flex flex-wrap justify-center space-x-4 space-y-4 sm:space-y-0"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button onClick={() => smoothScroll('contact')} className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                        Get in Touch
                    </button>
                    <button onClick={() => smoothScroll('projects')} className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                        View Projects
                    </button>
                    <a
                        href="https://fantastical.app/joda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors"
                    >
                        Schedule a Meeting
                    </a>
                </motion.div>
            </div>
        </section>
    );
});

export default HeroSection;