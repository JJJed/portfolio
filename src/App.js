import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import DynamicBackground from './components/DynamicBackground';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import { skillsData, projectsData, experiencesData } from './data/portfolioData';

const App = () => {
    const { scrollYProgress } = useViewportScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    return (
        <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
            <DynamicBackground />
            <Navbar />

            <motion.div style={{ opacity, scale }}>
                <HeroSection />
            </motion.div>

            <SkillsSection skillsData={skillsData} />
            <ProjectsSection projectsData={projectsData} />
            <ExperienceSection experiencesData={experiencesData} />
            <ContactSection />

            <footer className="bg-gray-900 py-6">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Joshua Davis. All rights reserved.</p>
                    <p className="mt-2">Crafted with React, Tailwind CSS, and Framer Motion</p>
                </div>
            </footer>
        </div>
    );
};

export default App;