import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const DynamicBackground = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const generateParticles = () => {
            return Array.from({ length: 50 }, () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 5 + 1,
                speedX: (Math.random() - 0.5) * 2,
                speedY: (Math.random() - 0.5) * 2,
            }));
        };

        setParticles(generateParticles());

        const animateParticles = () => {
            setParticles(prevParticles =>
                prevParticles.map(particle => ({
                    ...particle,
                    x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
                    y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight,
                }))
            );
            requestAnimationFrame(animateParticles);
        };

        const animationFrame = requestAnimationFrame(animateParticles);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-800 opacity-50"></div>
            {particles.map((particle, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full bg-blue-400 opacity-50"
                    style={{
                        x: particle.x,
                        y: particle.y,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        x: particle.x,
                        y: particle.y,
                    }}
                    transition={{
                        duration: 0,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                />
            ))}
        </div>
    );
};

export default DynamicBackground;