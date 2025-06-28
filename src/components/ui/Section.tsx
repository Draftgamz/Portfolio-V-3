import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  title,
  subtitle,
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <motion.h2 
                className="heading-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="text-text-secondary text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;