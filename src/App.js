import React, { useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import DynamicBackground from './components/DynamicBackground';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import TerminalSection from './sections/TerminalSection';
import ContactSection from './sections/ContactSection';
import { skillsData, projectsData, experiencesData } from './data/portfolioData';

const App = () => {
    const { scrollYProgress } = useViewportScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const terminalRef = useRef(null);
    const contactRef = useRef(null);

    const sectionRefs = {
        home: homeRef,
        about: aboutRef,
        skills: skillsRef,
        projects: projectsRef,
        experience: experienceRef,
        terminal: terminalRef,
        contact: contactRef
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
            <DynamicBackground />
            <Navbar sectionRefs={sectionRefs} />

            <motion.div style={{ opacity, scale }}>
                <HeroSection />
            </motion.div>

            <AboutSection ref={aboutRef} />
            <SkillsSection ref={skillsRef} skillsData={skillsData} />
            <ProjectsSection ref={projectsRef} projectsData={projectsData} />
            <ExperienceSection ref={experienceRef} experiencesData={experiencesData} />
            <TerminalSection ref={terminalRef} experiencesData={experiencesData} skillsData={skillsData} projectsData={projectsData} />
            <ContactSection ref={contactRef} />

            <footer className="bg-gray-900 py-6">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Joda Development LLC. All rights reserved.</p>
                    <p className="mt-2">Crafted with React, Tailwind CSS, and Framer Motion</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
