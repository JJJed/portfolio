import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ContactSection = React.forwardRef((props, ref) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form handling logic here
    };

    return (
        <AnimatedSection ref={ref} id="contact" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-teal-300 font-mono">{`<GetInTouch />`}</h2>
                <div className="max-w-2xl mx-auto">
                    <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
                        <div className="font-mono text-gray-400 mb-6">
                            <p>{`const ContactForm = () => {`}</p>
                            <p className="ml-4">{`const [formData, setFormData] = useState({`}</p>
                            <p className="ml-8 text-teal-300">name: "",</p>
                            <p className="ml-8 text-teal-300">email: "",</p>
                            <p className="ml-8 text-teal-300">message: ""</p>
                            <p className="ml-4">{`});`}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                            <div>
                                <label className="block text-gray-400 mb-2 font-mono">
                                    {`name: String`}
                                </label>
                                <input
                                    type="text"
                                    placeholder="_yourName"
                                    className="w-full p-3 bg-gray-800 rounded font-mono text-white border border-gray-700 focus:border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-300"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-2 font-mono">
                                    {`email: String`}
                                </label>
                                <input
                                    type="email"
                                    placeholder="_yourEmail"
                                    className="w-full p-3 bg-gray-800 rounded font-mono text-white border border-gray-700 focus:border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-300"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-2 font-mono">
                                    {`message: String`}
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="// Type your message here..."
                                    className="w-full p-3 bg-gray-800 rounded font-mono text-white border border-gray-700 focus:border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-300"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-teal-500 text-white py-3 rounded font-mono hover:bg-teal-600 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {`.submit()`}
                            </motion.button>
                        </form>

                        <div className="font-mono text-gray-400">
                            <p>{`// Or connect with me directly`}</p>
                            <div className="mt-4">
                                <p>{`const socialLinks = {`}</p>
                                <motion.div className="ml-4 space-y-2">
                                    <motion.a
                                        href="https://github.com/jjjed"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-300 hover:text-teal-300 transition-colors"
                                        whileHover={{ x: 10 }}
                                    >
                                        <Github size={20} className="mr-2" />
                                        github: <span className="text-teal-300 ml-2">"github.com/jjjed"</span>,
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/joshua-davis-20a720266/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-300 hover:text-teal-300 transition-colors"
                                        whileHover={{ x: 10 }}
                                    >
                                        <Linkedin size={20} className="mr-2" />
                                        linkedin: <span className="text-teal-300 ml-2">"in/joshua-davis-20a720266"</span>,
                                    </motion.a>
                                    <motion.a
                                        href="mailto:jdavis@jedd.dev"
                                        className="flex items-center text-gray-300 hover:text-teal-300 transition-colors"
                                        whileHover={{ x: 10 }}
                                    >
                                        <Mail size={20} className="mr-2" />
                                        email: <span className="text-teal-300 ml-2">"jdavis@jedd.dev"</span>
                                    </motion.a>
                                </motion.div>
                                <p>{`};`}</p>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <motion.a
                                href="https://fantastical.app/joda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-gray-800 text-white px-6 py-3 rounded font-mono hover:bg-gray-700 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {`.scheduleCall()`}
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
});

export default ContactSection;