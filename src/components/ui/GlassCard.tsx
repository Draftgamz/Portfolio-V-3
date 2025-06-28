import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  className = '', 
  children,
  delay = 0
}) => {
  return (
    <motion.div 
      className={`glass-card p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;