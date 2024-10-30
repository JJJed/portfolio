import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Terminal, GitCommitHorizontal, ChevronRight } from 'lucide-react';

const CommitMessage = ({ title, company, period, achievements }) => (
    <motion.div
        className="bg-gray-900 rounded-lg p-6 mb-6 font-mono"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex items-start">
            <GitCommitHorizontal className="text-teal-300 mr-3 mt-1 flex-shrink-0" size={20} />
            <div className="flex-grow">
                <div className="flex items-center text-yellow-400 mb-2">
                    <span className="mr-2">commit</span>
                    <span>{Array(40).fill('0').join('')}</span>
                </div>
                <div className="text-blue-400 mb-2">
                    Author: Joshua Davis {`<jdavis@jedd.dev>`}
                </div>
                <div className="text-blue-400 mb-4">
                    Date: {period}
                </div>
                <div className="border-l-2 border-gray-700 pl-4 ml-2">
                    <p className="text-teal-300 font-bold mb-2">{title} @ {company}</p>
                    {achievements.map((achievement, index) => (
                        <p key={index} className="text-gray-300 mb-2">
                            • {achievement}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const TerminalPrompt = () => (
    <motion.div
        className="flex items-center text-gray-400 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
    >
        <Terminal size={16} className="mr-2" />
        <span className="text-green-400">joshua</span>
        <span className="mx-1">@</span>
        <span className="text-purple-400">professional-journey</span>
        <span className="mx-1">%</span>
        <span className="text-teal-300 ml-1">git log --pretty=full</span>
    </motion.div>
);

const ExperienceSection = React.forwardRef(({ experiencesData }, ref) => {
    return (
        <AnimatedSection ref={ref} id="experience" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="font-mono mb-8">
                        <div className="text-gray-400 text-center mb-2">
                            {`/**`}<br />
                            {` * Professional Journey`}<br />
                            {` * A history of my development experience and achievements`}<br />
                            {` * It's not your turn to try the terminal (yet)`}<br />
                            {` */`}
                        </div>
                        <h2 className="text-4xl font-bold mb-8 text-center text-teal-300">{`<ProfessionalJourney />`}</h2>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                        <TerminalPrompt />

                        <div className="terminal-output mt-6">
                            {experiencesData.map((experience, index) => (
                                <CommitMessage
                                    key={index}
                                    {...experience}
                                />
                            ))}
                        </div>

                        <motion.div
                            className="flex items-center text-gray-400 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                        >
                            <Terminal size={16} className="mr-2" />
                            <span className="text-green-400">joshua</span>
                            <span className="mx-1">@</span>
                            <span className="text-purple-400">professional-journey</span>
                            <span className="mx-1">%</span>
                            <motion.div
                                className="w-3 h-6 bg-gray-400 ml-1"
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                            />
                        </motion.div>
                    </div>

                    <div className="font-mono text-gray-400 mt-4 text-center text-sm">
                        <p>// It's still not your turn</p>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
});

export default ExperienceSection;