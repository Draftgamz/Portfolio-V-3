import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Compass, Sparkles, Play, Download } from 'lucide-react';
import CircularText from '../ui/CircularText';
import StarBorder from '../ui/StarBorder';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center relative pt-24 pb-16 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/15 rounded-full filter blur-[80px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-32 left-10 w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-secondary/60 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Enhanced status badge */}
            <motion.div 
              className="flex items-center mb-8 space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              ></motion.div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <Sparkles size={16} className="text-primary animate-pulse" />
                <p className="text-text-secondary font-medium tracking-wide text-sm">Available for Projects</p>
              </div>
            </motion.div>
            
            <motion.h1 
              className="heading-xl mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Hi, I'm <span className="gradient-text relative">
                Draft
                <motion.span
                  className="absolute -top-2 -right-2 text-2xl"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  ✨
                </motion.span>
              </span>, 
              <br /> 
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent"
              >
                Creative Developer
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-text-secondary text-xl mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Crafting beautiful digital experiences with clean code and innovative design.
              Specialized in creating modern websites and web applications that make an impact.
            </motion.p>
            
            {/* Enhanced CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <StarBorder 
                color="#6C63FF" 
                speed="4s" 
                className="hover:scale-105 transition-transform group"
                as="a"
                href="#projects"
              >
                <span className="flex items-center space-x-2">
                  <Play size={16} className="group-hover:scale-110 transition-transform" />
                  <span>View My Work</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </StarBorder>
              <StarBorder 
                color="#FF6584" 
                speed="5s" 
                className="hover:scale-105 transition-transform group"
                as="a"
                href="#contact"
              >
                <span className="flex items-center space-x-2">
                  <Download size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Download CV</span>
                </span>
              </StarBorder>
            </motion.div>

            {/* Enhanced stats */}
            <motion.div 
              className="hidden lg:flex items-center space-x-8 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-text-secondary text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.a 
                href="#about" 
                className="flex items-center space-x-3 text-text-secondary hover:text-white transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <span className="text-sm tracking-wide">Discover More</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown size={18} className="group-hover:text-primary transition-colors" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="w-full max-w-lg mx-auto aspect-square relative">
              {/* Enhanced Circular Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <CircularText
                  text="CREATIVE*DEVELOPER*DESIGNER*INNOVATOR*"
                  spinDuration={20}
                  onHover="speedUp"
                  className="w-full h-full text-primary/80 text-sm font-medium"
                />
              </div>
              
              {/* Enhanced Profile Image */}
              <motion.div 
                className="absolute inset-12 rounded-full overflow-hidden flex items-center justify-center shadow-2xl shadow-primary/20"
                style={{
                  background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(255, 101, 132, 0.1))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Draft" 
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-accent/20"></div>
              </motion.div>
              
              {/* Enhanced floating cards */}
              <motion.div 
                className="absolute top-8 -left-12 glass-card p-5 animate-float shadow-xl"
                style={{ animationDelay: '1s' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl">
                    <Code size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Developer</p>
                    <p className="text-sm text-text-secondary">5+ Years</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 right-8 glass-card p-5 animate-float shadow-xl"
                style={{ animationDelay: '1.5s' }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl">
                    <Compass size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Designer</p>
                    <p className="text-sm text-text-secondary">Creative Mind</p>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced decorative elements */}
              <motion.div
                className="absolute top-1/4 -right-8 w-4 h-4 bg-accent rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="absolute bottom-1/3 -left-6 w-3 h-3 bg-secondary rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;