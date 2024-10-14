import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

const ExperienceSection = ({ experiencesData }) => {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-teal-300">Professional Journey</h2>
                {experiencesData.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;