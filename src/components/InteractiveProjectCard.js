import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const InteractiveProjectCard = ({ title, description, tech, metrics, image }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer h-[400px] perspective-1000"
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <AnimatePresence>
                {!isFlipped ? (
                    <motion.div
                        key="front"
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: -90 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                    >
                        <img src={image} alt={title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-teal-300">{title}</h3>
                            <p className="text-gray-300 mb-4">{description}</p>
                            <div className="flex flex-wrap gap-2">
                                {tech.map((t, index) => (
                                    <span key={index} className="text-xs bg-blue-600 text-white px-2 py-1 rounded">{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="back"
                        initial={{ rotateY: 90 }}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: 90 }}
                        transition={{ duration: 0.3 }}
                        className="h-full bg-gray-700 p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-teal-300">Project Metrics</h3>
                            {Object.entries(metrics).map(([key, value]) => (
                                <div key={key} className="flex justify-between mb-2">
                                    <span className="text-gray-300">{key}:</span>
                                    <span className="font-bold text-white">{value}</span>
                                </div>
                            ))}
                        </div>
                        <a
                            href="#"
                            className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            View Project <ExternalLink size={16} className="ml-2" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default InteractiveProjectCard;