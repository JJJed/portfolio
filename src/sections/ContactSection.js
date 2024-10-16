import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-teal-300">Get in Touch</h2>
                <div className="max-w-md mx-auto">
                    <form className="space-y-4 mb-8">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 bg-gray-700 rounded text-white"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 bg-gray-700 rounded text-white"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full p-2 bg-gray-700 rounded text-white"
                        ></textarea>
                        <motion.button
                            type="submit"
                            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                    <motion.a
                        href="https://fantastical.app/joda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-purple-500 text-white py-2 rounded text-center hover:bg-purple-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Schedule a Meeting
                    </motion.a>
                </div>
                <div className="mt-12 flex justify-center space-x-6">
                    <motion.a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Github size={24} className="text-gray-400 hover:text-white transition-colors" />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Linkedin size={24} className="text-gray-400 hover:text-white transition-colors" />
                    </motion.a>
                    <motion.a
                        href="mailto:your.email@example.com"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Mail size={24} className="text-gray-400 hover:text-white transition-colors" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;