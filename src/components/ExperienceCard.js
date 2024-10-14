import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ExperienceCard = ({ title, company, period, achievements }) => (
    <motion.div
        className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h3 className="text-xl font-bold text-teal-300">{title}</h3>
        <p className="text-gray-400">{company} | {period}</p>
        <ul className="mt-4 space-y-2">
            {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                    <CheckCircle size={16} className="mr-2 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

export default ExperienceCard;