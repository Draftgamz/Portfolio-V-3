import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../../types';
import StarBorder from '../ui/StarBorder';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 px-4">
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`w-full max-w-5xl transition-all duration-500 rounded-2xl ${
            scrolled 
              ? 'py-2 bg-black/60 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-primary/10' 
              : 'py-3 bg-black/30 backdrop-blur-xl border border-white/10'
          }`}
        >
          <div className="px-6">
            <div className="flex items-center justify-between">
              <motion.a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
                className="text-xl font-display font-bold gradient-text hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Draft
              </motion.a>

              <nav className="hidden md:flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-text-secondary hover:text-white transition-all duration-300 font-medium relative group text-sm"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <StarBorder 
                    as="a"
                    href="#contact"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      handleNavClick('#contact');
                    }}
                    color="#6C63FF" 
                    speed="4s" 
                    className="hover:scale-105 transition-transform text-sm"
                  >
                    Contact Me
                  </StarBorder>
                </motion.div>
              </nav>

              <motion.button 
                className="md:hidden p-2 rounded-xl glass-button hover:bg-white/20 transition-all"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu size={18} />
              </motion.button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-6">
              <motion.button 
                className="p-3 rounded-2xl glass-button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />
              </motion.button>
            </div>
            <div className="flex flex-col items-center justify-center h-full -mt-20">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-3xl py-6 text-text-secondary hover:text-white transition-all duration-300 hover:scale-110"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 + 0.2 }}
                className="mt-8"
              >
                <StarBorder 
                  as="a"
                  href="#contact"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  color="#6C63FF" 
                  speed="4s"
                >
                  Contact Me
                </StarBorder>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;