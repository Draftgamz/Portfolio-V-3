import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Twitter, Mail, Heart, ArrowUp, Code, Coffee } from 'lucide-react';
import { SocialLink } from '../../types';
import StarBorder from '../ui/StarBorder';

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: <GitHub size={20} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/',
    icon: <Linkedin size={20} />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: <Twitter size={20} />,
  },
  {
    name: 'Email',
    url: 'mailto:hello@draft.dev',
    icon: <Mail size={20} />,
  },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradient container */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-light"></div>
      
      {/* Floating footer container */}
      <motion.footer 
        className="relative max-w-7xl mx-auto bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-display font-bold gradient-text mb-4">Draft</h3>
              <p className="text-text-secondary text-lg leading-relaxed mb-6 max-w-md">
                Crafting beautiful digital experiences with passion and precision. 
                Turning ideas into reality through code and design.
              </p>
              <div className="flex items-center space-x-4 text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Code size={16} className="text-primary" />
                  <span className="text-sm">Clean Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee size={16} className="text-accent" />
                  <span className="text-sm">Coffee Powered</span>
                </div>
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <div className="space-y-3">
                {['About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                  <motion.a 
                    key={link}
                    href={`#${link.toLowerCase()}`} 
                    className="block text-text-secondary hover:text-primary transition-all duration-300 hover:translate-x-2"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Let's Connect</h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
                    aria-label={link.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <span className="text-text-secondary group-hover:text-primary transition-colors">
                      {link.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
              <StarBorder 
                as="a" 
                href="#contact" 
                color="#FF6584" 
                speed="5s" 
                className="inline-flex hover:scale-105 transition-transform"
              >
                Get In Touch
              </StarBorder>
            </motion.div>
          </div>
          
          {/* Bottom Section */}
          <motion.div 
            className="pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <p className="text-text-secondary flex items-center gap-2">
                  Made with <Heart size={16} className="text-secondary animate-pulse" /> by Draft
                </p>
                <span className="text-text-secondary">•</span>
                <p className="text-text-secondary text-sm">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} className="text-text-secondary group-hover:text-primary transition-colors" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;