import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Code, Shield, Terminal, Cloud, ChevronDown, X } from 'lucide-react';

const SkillCard = ({ skill, icon: Icon, projects, yearsOfExperience, proficiency, keySkills, toolsAndTechnologies, isExpanded, onClick }) => {
    return (
        <motion.div
            className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer ${isExpanded ? 'md:col-span-2' : ''}`}
            layout
            transition={{ duration: 0.5, type: "spring" }}
            onClick={onClick}
        >
            <div className="p-6 font-mono">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Icon size={24} className="text-teal-300 mr-4" />
                        <div>
                            <div className="text-gray-400">
                                {`/** @package ${skill} */`}
                            </div>
                            <h3 className="text-xl font-bold text-teal-300">
                                {`interface ${skill.replace(/\s+/g, '')}Skill extends Expertise {`}
                            </h3>
                        </div>
                    </div>
                    {isExpanded ? (
                        <X size={24} className="text-gray-400" />
                    ) : (
                        <ChevronDown size={24} className="text-gray-400" />
                    )}
                </div>
                <div className="ml-4 text-gray-300">
                    <p>{`proficiency: "${proficiency}",`}</p>
                    <p>{`yearsOfExperience: ${yearsOfExperience},`}</p>
                </div>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="ml-4 mt-4">
                                <p className="text-gray-400">// Projects implemented</p>
                                <p>projects: [</p>
                                <div className="ml-4">
                                    {projects.map((project, index) => (
                                        <p key={index} className="text-teal-300">
                                            {`"${project}"${index !== projects.length - 1 ? ',' : ''}`}
                                        </p>
                                    ))}
                                </div>
                                <p>],</p>

                                <div className="mt-4">
                                    <p className="text-gray-400">// Core competencies</p>
                                    <p>keySkills: [</p>
                                    <div className="ml-4">
                                        {keySkills.map((skill, index) => (
                                            <p key={index} className="text-teal-300">
                                                {`"${skill}"${index !== keySkills.length - 1 ? ',' : ''}`}
                                            </p>
                                        ))}
                                    </div>
                                    <p>],</p>
                                </div>

                                <div className="mt-4">
                                    <p className="text-gray-400">// Technologies used</p>
                                    <p>toolset: new Set([</p>
                                    <div className="ml-4">
                                        {toolsAndTechnologies.map((tool, index) => (
                                            <p key={index} className="text-teal-300">
                                                {`"${tool}"${index !== toolsAndTechnologies.length - 1 ? ',' : ''}`}
                                            </p>
                                        ))}
                                    </div>
                                    <p>])</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <p>{`}`}</p>
            </div>
        </motion.div>
    );
};

const SkillsSection = React.forwardRef(({ skillsData }, ref) => {
    const [expandedSkill, setExpandedSkill] = useState(null);

    const handleSkillClick = (index) => {
        setExpandedSkill(expandedSkill === index ? null : index);
    };

    return (
        <AnimatedSection ref={ref} id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <div className="font-mono">
                    <div className="text-gray-400 text-center mb-2">
                        {`/**`}<br />
                        {` * Skills & Expertise Module`}<br />
                        {` * @author Joshua Davis`}<br />
                        {` * @version 2024`}<br />
                        {` */`}
                    </div>
                    <h2 className="text-4xl font-bold mb-12 text-center text-teal-300">{`<Skills.module />`}</h2>
                    <div className="text-gray-400 mb-8">
                        {`interface Expertise {`}<br />
                        <div className="ml-4">
                            {`proficiency: "Expert" | "Advanced" | "Intermediate";`}<br />
                            {`yearsOfExperience: number;`}<br />
                            {`projects: string[];`}<br />
                            {`keySkills: string[];`}<br />
                            {`toolset: Set<string>;`}
                        </div>
                        {`}`}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsData.map((skill, index) => (
                        <SkillCard
                            key={index}
                            {...skill}
                            isExpanded={expandedSkill === index}
                            onClick={() => handleSkillClick(index)}
                        />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
});

export default SkillsSection;