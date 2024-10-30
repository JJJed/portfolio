import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Terminal from '../components/Terminal';

const TerminalSection = React.forwardRef(({ experiencesData, skillsData, projectsData }, ref) => {
    return (
        <AnimatedSection ref={ref} id="terminal" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="font-mono mb-8">
                        <div className="text-gray-400 text-center mb-2">
                            {`/**`}<br />
                            {` * Interactive Terminal Interface`}<br />
                            {` * Explore my portfolio through commands`}<br />
                            {` * Type 'help' or press Tab for available commands`}<br />
                            {` */`}
                        </div>
                        <h2 className="text-4xl font-bold mb-8 text-center text-teal-300">{`<Terminal.explore />`}</h2>
                    </div>

                    <Terminal
                        experiencesData={experiencesData}
                        skillsData={skillsData}
                        projectsData={projectsData}
                    />

                    <div className="font-mono text-gray-400 mt-4 text-center text-sm">
                        <p>// Pro tip: Use Tab for command completion</p>
                        <p>// Try 'matrix' or 'games' for some fun!</p>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
});

export default TerminalSection;