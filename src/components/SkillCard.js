import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';

const SkillCard = ({ skill, icon: Icon, projects, yearsOfExperience, proficiency, keySkills, toolsAndTechnologies, featuredProject, isExpanded, onClick, className }) => {
    return (
        <motion.div
            className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer relative z-20 ${isExpanded ? 'col-span-full' : ''} ${className}`}
            layout
            transition={{ duration: 0.5, type: "spring" }}
            onClick={onClick}
        >
            <div className="p-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Icon size={24} className="text-teal-300 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold">{skill}</h3>
                            <p className="text-gray-400 text-sm">Proficiency: {proficiency}</p>
                        </div>
                    </div>
                    {isExpanded ? (
                        <X size={24} className="text-gray-400" />
                    ) : (
                        <ChevronDown size={24} className="text-gray-400" />
                    )}
                </div>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mt-4">
                                <p className="text-gray-300 mb-2">Years of Experience: {yearsOfExperience}</p>
                                <p className="text-gray-300 mb-2">Related Projects:</p>
                                <ul className="list-disc list-inside text-gray-400">
                                    {projects.map((project, index) => (
                                        <li key={index}>{project}</li>
                                    ))}
                                </ul>
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2">Key Skills</h4>
                                        <ul className="list-disc list-inside text-gray-400">
                                            {keySkills.map((skill, index) => (
                                                <li key={index}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
                                        <ul className="list-disc list-inside text-gray-400">
                                            {toolsAndTechnologies.map((tool, index) => (
                                                <li key={index}>{tool}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg font-semibold mb-2">Featured Project</h4>
                                    <div className="bg-gray-700 p-4 rounded-lg">
                                        <img src={featuredProject.image} alt={featuredProject.name} className="w-full h-48 object-cover rounded-lg mb-2" />
                                        <h5 className="text-md font-semibold">{featuredProject.name}</h5>
                                        <p className="text-sm text-gray-400">{featuredProject.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default SkillCard;
