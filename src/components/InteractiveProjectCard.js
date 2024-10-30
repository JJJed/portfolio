import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import splunk_dashboard from '../assets/splunk_dashboard.png';
import joda_music from '../assets/joda_music.png';
import hearo from '../assets/hearo.png';
import brli from '../assets/brli.png';
import beatstarrpc from '../assets/beatstarrpc.png';
import ccbal from '../assets/ccbal.png';
import ftcautons from '../assets/ftcautons.png';


const images = {
    "Splunk Threat Dashboard": splunk_dashboard,
    "Joda Music": joda_music,
    "Hearo": hearo,
    "Immigrant Life": brli,
    "BeatstarRPC": beatstarrpc,
    "CCBal": ccbal,
    "Robotics Autonomous Path Viewer": ftcautons
};

const InteractiveProjectCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className="bg-gray-800 rounded-lg shadow-lg cursor-pointer min-h-[400px] perspective-1000 mx-auto max-w-full"
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <AnimatePresence mode="wait">
                {!isFlipped ? (
                    <motion.div
                        key="front"
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: -90 }}
                        transition={{ duration: 0.3 }}
                        className="h-full relative"
                    >
                        <div className="relative pb-[56.25%] rounded-t-lg overflow-hidden">
                            <img
                                src={images[project.title]}
                                alt={project.title}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 lg:p-6">
                            <h3 className="text-lg lg:text-xl font-bold mb-2 text-teal-300 font-mono">{`<${project.title}/>`}</h3>
                            <p className="text-gray-300 mb-4 font-mono text-sm lg:text-base">// {project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, index) => (
                                    <span key={index}
                                          className="text-xs bg-blue-600 text-white px-2 py-1 rounded font-mono">{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="back"
                        initial={{rotateY: 90}}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: 90 }}
                        transition={{ duration: 0.3 }}
                        className="h-full bg-gray-700 p-4 lg:p-6 flex flex-col justify-between rounded-lg"
                    >
                        {project.metrics && (
                            <div>
                                <h3 className="text-lg lg:text-xl font-bold mb-4 text-teal-300 font-mono">const metrics
                                    = {`{`}</h3>
                                {Object.entries(project.metrics).map(([key, value]) => (
                                    <div key={key} className="flex justify-between mb-2 font-mono text-sm lg:text-base">
                                        <span className="text-gray-300">{key}:</span>
                                        <span className="font-bold text-white">"{value}"</span>
                                    </div>
                                ))}
                                <p className="font-mono">{`}`}</p>
                            </div>
                        )}
                        {project.link && (
                            <a
                                target="_blank"
                                href={project.link}
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-mono text-sm lg:text-base"
                                onClick={(e) => e.stopPropagation()}
                            >
                                .viewProject() <ExternalLink size={16} className="ml-2"/>
                            </a>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default InteractiveProjectCard;