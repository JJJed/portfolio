import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const AboutSection = React.forwardRef((props, ref) => {
    return (
        <AnimatedSection ref={ref} id="about" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-xl p-8 font-mono"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-gray-400 mb-6">
                        {`/**`}<br />
                        {` * Quick introduction to who I am and what I do`}<br />
                        {` * @file QuickBio.ts`}<br />
                        {` */`}
                    </div>

                    <div className="mb-6">
                        <p className="text-blue-400">import</p>
                        <p className="ml-4 text-gray-300">
                            {'{ Development, Security, Innovation }'} <span className="text-blue-400">from</span>
                            <span className="text-green-400"> '@core/passion'</span>;
                        </p>
                    </div>

                    <div className="mb-6">
                        <p className="text-purple-400">interface</p>
                        <p className="text-teal-300 ml-4">Developer {`{`}</p>
                        <div className="ml-8 text-gray-300">
                            <p>role: string;</p>
                            <p>focus: string[];</p>
                            <p>approach: string;</p>
                        </div>
                        <p className="ml-4">{`}`}</p>
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-400">// Current role and focus</p>
                        <p className="text-purple-400">const</p>
                        <p className="text-yellow-300 ml-4">joshua: Developer = {`{`}</p>
                        <div className="ml-8">
                            <p className="text-gray-300">role: <span className="text-green-400">"Full-Stack Developer & Security Specialist"</span>,</p>
                            <p className="text-gray-300">focus: [</p>
                            <div className="ml-4 text-green-400">
                                <p>"Building secure, scalable applications",</p>
                                <p>"Crafting intuitive user experiences",</p>
                                <p>"Implementing robust security measures"</p>
                            </div>
                            <p className="text-gray-300">],</p>
                            <p className="text-gray-300">approach: <span className="text-green-400">"Clean code + Security-first mindset"</span></p>
                        </div>
                        <p className="ml-4">{`}`}</p>
                    </div>

                    <div className="text-gray-400 mt-8">
                        <p>// For more details, explore my skills, projects, and experience below</p>
                        <p>// Or get in touch to discuss potential collaborations</p>
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
});

export default AboutSection;