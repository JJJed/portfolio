import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import logo from 'https://github.com/JJJed/portfolio/raw/refs/heads/master/src/assets/logo192.png';

const Navbar = ({ sectionRefs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        const updateNavHeight = () => {
            const navbar = document.querySelector('nav');
            if (navbar) {
                setNavHeight(navbar.offsetHeight);
            }
        };

        updateNavHeight();
        window.addEventListener('resize', updateNavHeight);
        return () => window.removeEventListener('resize', updateNavHeight);
    }, []);

    const handleNavClick = useCallback((targetId) => {
        const targetRef = sectionRefs[targetId];
        if (targetId == 'home') {
            const y = 0;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsOpen(false);
        }
        else if (targetRef && targetRef.current) {
            const yOffset = navHeight + 20; // navbar height plus 20px extra space
            const element = targetRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsOpen(false);
        }
    }, [sectionRefs, navHeight]);

    const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Terminal', 'Contact'];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <button onClick={() => handleNavClick('home')} className="flex items-center">
                        <img src={logo} alt="JD Logo" className="h-10 w-10" />
                    </button>
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item.toLowerCase())}
                                className="text-gray-300 hover:text-teal-300 transition-colors text-sm uppercase tracking-wider"
                            >
                                {item}
                            </button>
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
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item.toLowerCase())}
                                className="block w-full text-left py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-teal-300 transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;