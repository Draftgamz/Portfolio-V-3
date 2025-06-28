import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  icon,
}) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/40',
    secondary: 'bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary-dark hover:to-secondary text-white shadow-lg shadow-secondary/25',
    ghost: 'bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/40 text-white',
    glass: 'glass-button hover:bg-white/15 hover:border-white/30',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      className={`
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        rounded-full 
        font-medium 
        transition-all 
        duration-300 
        flex 
        items-center 
        justify-center 
        gap-2
        disabled:opacity-50 
        disabled:cursor-not-allowed
        relative
        overflow-hidden
        group
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500"></div>
      
      {icon && (
        <motion.span
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;