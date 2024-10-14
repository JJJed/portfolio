import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { smoothScroll } from '../utils/smoothScroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (targetId) => {
        smoothScroll(targetId);
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <a onClick={() => handleNavClick('home')} className="text-2xl font-bold text-teal-300">JD</a>
                    <div className="hidden md:flex space-x-6">
                        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                            <a
                                key={item}
                                // href={`#${item.toLowerCase()}`}
                                onClick={() => handleNavClick(item.toLowerCase())}
                                className="text-gray-300 hover:text-teal-300 transition-colors text-sm uppercase tracking-wider"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                        {isOpen ? <X size={24} /> : <ChevronDown size={24} />}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-gray-800"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => handleNavClick(item.toLowerCase())}
                                className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-teal-300 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;