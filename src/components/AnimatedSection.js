import React, { forwardRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = forwardRef(({ children, className, ...props }, ref) => {
    const internalRef = React.useRef(null);
    const isInView = useInView(internalRef, { once: true, amount: 0.2 });

    return (
        <motion.section
            ref={(node) => {
                internalRef.current = node;
                if (typeof ref === 'function') ref(node);
                else if (ref) ref.current = node;
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`pt-20 ${className}`} // Added pt-20 for top padding
            {...props}
        >
            {children}
        </motion.section>
    );
});

export default AnimatedSection;