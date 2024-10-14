import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tech, metrics, image }) => {
    return (
        <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-teal-300">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, index) => (
                        <span key={index} className="text-xs bg-blue-600 text-white px-2 py-1 rounded">{t}</span>
                    ))}
                </div>
                <motion.button
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Learn More
                </motion.button>
            </div>
        </motion.div>
    );
};

const ProjectsSection = ({ projectsData }) => {
    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-teal-300">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;