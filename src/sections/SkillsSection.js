import React, { useState } from 'react';
import SkillCard from '../components/SkillCard';

const SkillsSection = ({ skillsData }) => {
    const [expandedSkill, setExpandedSkill] = useState(null);

    const handleExpand = (index) => {
        setExpandedSkill(expandedSkill === index ? null : index);
    };

    return (
        <section id="skills" className="py-20 relative z-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-teal-300">Skills & Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsData.map((skill, index) => (
                        <SkillCard
                            key={index}
                            {...skill}
                            isExpanded={expandedSkill === index}
                            onExpand={() => handleExpand(index)}
                            className={expandedSkill !== null && expandedSkill !== index ? 'hidden' : ''}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;