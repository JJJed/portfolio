import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveProjectCard from '../components/InteractiveProjectCard';

const ProjectNavButton = ({ direction, onClick }) => (
    <motion.button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? 'left-0 lg:-left-12' : 'right-0 lg:-right-12'}
                    text-gray-400 hover:text-teal-300 transition-colors text-3xl lg:text-5xl font-mono z-20`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        aria-label={`Navigate ${direction}`}
    >
        {direction === 'left' ? '{ ' : ' }'}
    </motion.button>
);

const ProjectsSection = React.forwardRef(({ projectsData }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % projectsData.length);
    }, [projectsData.length]);

    const handlePrevious = useCallback(() => {
        setCurrentIndex(prev => (prev === 0 ? projectsData.length - 1 : prev - 1));
    }, [projectsData.length]);

    const getProjectIndex = useCallback((offset) => {
        return (currentIndex + offset + projectsData.length) % projectsData.length;
    }, [currentIndex, projectsData.length]);

    return (
        <AnimatedSection ref={ref} id="projects" className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-teal-300 font-mono">{`<FeaturedProjects />`}</h2>
                <div className="relative px-8 lg:px-20">
                    <ProjectNavButton direction="left" onClick={handlePrevious} />
                    <div className="overflow-hidden relative h-[500px]">
                        {/* Left and Right Fade-Out Gradients */}
                        <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

                        {/* Card Display */}
                        <div className="absolute inset-0 flex justify-center">
                            {(isMobile ? [0] : [-1, 0, 1]).map((offset) => {
                                const index = getProjectIndex(offset);
                                return (
                                    <motion.div
                                        key={index}
                                        className={`absolute ${offset === 0 ? 'z-10' : 'z-0'}`}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{
                                            scale: offset === 0 ? 1 : 0.8,
                                            opacity: offset === 0 ? 1 : 0.4,  // Reduce opacity for edge cards
                                            x: isMobile ? '0%' : `${offset * 100}%`,
                                        }}
                                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                        style={{
                                            transform: 'translateX(-50%)',
                                            filter: offset === 0 ? 'none' : 'blur(3px)',
                                            pointerEvents: offset === 0 ? 'auto' : 'none',
                                            width: isMobile ? '100%' : 'auto',
                                        }}
                                    >
                                        <div
                                            className="w-full max-w-[350px] lg:max-w-[600px] h-auto"
                                            style={{ aspectRatio: '16/9' }}
                                        >
                                            <InteractiveProjectCard project={projectsData[index]} />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                    <ProjectNavButton direction="right" onClick={handleNext} />

                    {/* Project Counter */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-400 font-mono">
                        {`[ ${currentIndex + 1} / ${projectsData.length} ]`}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
});

export default ProjectsSection;
