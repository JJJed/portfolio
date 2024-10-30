import { motion } from 'framer-motion';
import { GitCommitHorizontal } from 'lucide-react';


const CommitMessage = ({ title, company, period, achievements }) => (
    <motion.div
        className="bg-gray-900 rounded-lg p-6 mb-6 font-mono cursor-pointer"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{
            scale: 1.02,
            backgroundColor: "rgba(79, 209, 197, 0.1)" // subtle teal background on hover
        }}
        viewport={{ once: true }}
        transition={{
            duration: 0.5,
            hover: {
                duration: 0.2
            }
        }}
    >
        <div className="flex items-start group">
            <GitCommitHorizontal className="text-teal-300 mr-3 mt-1 flex-shrink-0 group-hover:text-teal-400 transition-colors" size={20} />
            <div className="flex-grow">
                <div className="flex items-center text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
                    <span className="mr-2">commit</span>
                    <span>{Array(40).fill('0').join('')}</span>
                </div>
                <div className="text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                    Author: Joshua Davis {`<jdavis@jedd.dev>`}
                </div>
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                    Date: {period}
                </div>
                <motion.div
                    className="border-l-2 border-gray-700 pl-4 ml-2"
                    whileHover={{ borderColor: 'rgba(79, 209, 197, 0.5)' }}
                >
                    <p className="text-teal-300 font-bold mb-2 group-hover:text-teal-400 transition-colors">{title} @ {company}</p>
                    {achievements.map((achievement, index) => (
                        <motion.p
                            key={index}
                            className="text-gray-300 mb-2 flex items-start group-hover:text-gray-100 transition-colors"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="mr-2">•</span>
                            {achievement}
                        </motion.p>
                    ))}
                </motion.div>
            </div>
        </div>
    </motion.div>
);

export default CommitMessage;