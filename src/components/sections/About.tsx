import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, Heart, Coffee, Users, Zap, Code, Palette, Server, Lightbulb } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import CardSwap, { Card } from '../ui/CardSwap';

const About: React.FC = () => {
  const stats = [
    { icon: <Calendar size={20} />, label: 'Experience', value: '5+ Years', color: 'from-primary/20 to-primary/5' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'New York, USA', color: 'from-accent/20 to-accent/5' },
    { icon: <Award size={20} />, label: 'Completed', value: '50+ Projects', color: 'from-secondary/20 to-secondary/5' },
    { icon: <Users size={20} />, label: 'Happy Clients', value: '30+ Clients', color: 'from-success/20 to-success/5' },
  ];

  const highlights = [
    { icon: <Heart size={16} />, text: 'Passionate about clean code', color: 'text-secondary' },
    { icon: <Coffee size={16} />, text: 'Fueled by coffee & creativity', color: 'text-accent' },
    { icon: <Zap size={16} />, text: 'Fast learner & problem solver', color: 'text-primary' },
    { icon: <BookOpen size={16} />, text: 'Continuous learning mindset', color: 'text-success' },
  ];

  const cardData = [
    {
      icon: <Code size={24} className="text-primary" />,
      title: "Frontend Expert",
      description: "Specializing in React, TypeScript, and modern CSS frameworks to create stunning user interfaces.",
      stats: [
        { value: "5+", label: "Years" },
        { value: "30+", label: "Projects" }
      ]
    },
    {
      icon: <Palette size={24} className="text-secondary" />,
      title: "UI/UX Designer",
      description: "Creating intuitive and beautiful designs that enhance user experience and drive engagement.",
      stats: [
        { value: "50+", label: "Designs" },
        { value: "95%", label: "Satisfaction" }
      ]
    },
    {
      icon: <Server size={24} className="text-accent" />,
      title: "Full Stack",
      description: "Building complete web applications with modern backend technologies and cloud infrastructure.",
      stats: [
        { value: "20+", label: "APIs" },
        { value: "99%", label: "Uptime" }
      ]
    },
    {
      icon: <Lightbulb size={24} className="text-success" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions through creative thinking and technical expertise.",
      stats: [
        { value: "100+", label: "Solutions" },
        { value: "24/7", label: "Support" }
      ]
    }
  ];

  return (
    <Section 
      id="about"
      title="About Me"
      subtitle="Get to know me better and discover my journey in tech"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="About Draft"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Enhanced overlay with stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary">5+</div>
                      <div className="text-text-secondary">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-accent">50+</div>
                      <div className="text-text-secondary">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-secondary">30+</div>
                      <div className="text-text-secondary">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="absolute -bottom-8 -right-8 w-48 h-48 border-4 border-background rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Draft close-up"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Enhanced decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-primary/50 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 left-0 w-6 h-6 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 right-4 w-4 h-4 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </motion.div>

        <div className="space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="heading-md mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Passionate Developer & Designer
            </h3>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p className="text-lg">
                Hello! I'm Draft, a passionate web developer and designer with a keen eye for creating beautiful, functional digital experiences. I specialize in front-end development and UI/UX design, combining technical expertise with creative vision.
              </p>
              <p>
                With over 5 years of experience in the industry, I've worked on a variety of projects from small business websites to complex web applications. I'm dedicated to writing clean, efficient code and crafting intuitive user interfaces that make technology accessible and enjoyable.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying up-to-date with the latest technologies and best practices.
              </p>
            </div>
          </motion.div>

          {/* Enhanced highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">What Drives Me</h4>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className={highlight.color}>{highlight.icon}</span>
                  <span className="text-sm">{highlight.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <GlassCard className="hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-primary">{stat.icon}</span>
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm mb-1">{stat.label}</p>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">{stat.value}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* GSAP Card Stack - positioned absolutely */}
          <motion.div
            className="hidden lg:block absolute -right-16 top-0"
            style={{ height: '500px', width: '300px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CardSwap
              width={280}
              height={360}
              cardDistance={30}
              verticalDistance={40}
              delay={3500}
              pauseOnHover={true}
              easing="elastic"
              skewAmount={3}
            >
              {cardData.map((card, index) => (
                <Card key={index}>
                  <div className="card-content">
                    <div className="card-icon">
                      {card.icon}
                    </div>
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                    <div className="card-stats">
                      {card.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="card-stat">
                          <span className="card-stat-value">{stat.value}</span>
                          <span className="card-stat-label">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;