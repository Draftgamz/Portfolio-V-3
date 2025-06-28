import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Eye, Calendar, Users, TrendingUp, Award } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { Project } from '../../types';

const projects: Project[] = [
  {
    id: 'project1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, payment integration, and real-time inventory management.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 'project2',
    title: 'Task Management App',
    description: 'A productivity application for managing tasks and projects. Built with Vue.js and Firebase, featuring drag-and-drop functionality, real-time collaboration, and advanced analytics.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    demoUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 'project3',
    title: 'Weather Dashboard',
    description: 'A comprehensive weather application providing current conditions, forecasts, and weather maps for locations worldwide. Features beautiful data visualizations and location-based services.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['JavaScript', 'API Integration', 'Chart.js'],
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    id: 'project4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website designed and developed to showcase work and skills. Features dark mode, glass morphism design, smooth animations, and responsive layout.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    id: 'project5',
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media management tool with analytics, scheduling, and multi-platform integration. Built for agencies and content creators.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['React', 'GraphQL', 'PostgreSQL'],
    demoUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 'project6',
    title: 'AI Chat Interface',
    description: 'An intelligent chat interface with natural language processing capabilities. Features real-time messaging, file sharing, and AI-powered responses.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['Next.js', 'OpenAI', 'WebSocket'],
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.tags.includes(filter));

  const filters = [
    { value: 'all', label: 'All Projects', count: projects.length, icon: <TrendingUp size={16} /> },
    { value: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length, icon: <Star size={16} /> },
    { value: 'React', label: 'React', count: projects.filter(p => p.tags.includes('React')).length, icon: <Award size={16} /> },
    { value: 'Vue.js', label: 'Vue.js', count: projects.filter(p => p.tags.includes('Vue.js')).length, icon: <Users size={16} /> },
    { value: 'Node.js', label: 'Node.js', count: projects.filter(p => p.tags.includes('Node.js')).length, icon: <Calendar size={16} /> },
  ];

  return (
    <Section 
      id="projects" 
      title="My Projects"
      subtitle="A showcase of my recent work and creative solutions"
    >
      {/* Enhanced Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {filters.map((item, index) => (
          <motion.div
            key={item.value}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Button
              variant={filter === item.value ? 'primary' : 'glass'}
              size="sm"
              onClick={() => setFilter(item.value)}
              className="relative group hover:scale-105 transition-all duration-300"
              icon={item.icon}
            >
              <span className="flex items-center space-x-2">
                <span>{item.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  filter === item.value 
                    ? 'bg-white/20' 
                    : 'bg-primary/20 text-primary group-hover:bg-primary/30'
                }`}>
                  {item.count}
                </span>
              </span>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            layout
          >
            <GlassCard className="h-full flex flex-col overflow-hidden group hover:scale-[1.02] transition-all duration-500 interactive-card">
              {/* Enhanced Image Section */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Enhanced Featured Badge */}
                {project.featured && (
                  <motion.div 
                    className="absolute top-4 left-4 flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-primary/90 to-accent/90 backdrop-blur-sm rounded-full text-white text-xs font-medium shadow-lg"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  >
                    <Star size={12} fill="currentColor" className="animate-pulse" />
                    <span>Featured</span>
                  </motion.div>
                )}

                {/* Enhanced Hover Actions */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {project.demoUrl && (
                    <motion.button
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary/30 transition-all duration-300 group/btn"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <Eye size={16} className="text-white group-hover/btn:text-primary transition-colors" />
                    </motion.button>
                  )}
                  {project.repoUrl && (
                    <motion.button
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-accent/30 transition-all duration-300 group/btn"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open(project.repoUrl, '_blank')}
                    >
                      <Github size={16} className="text-white group-hover/btn:text-accent transition-colors" />
                    </motion.button>
                  )}
                </div>

                {/* Enhanced Tags Overlay */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <motion.span 
                      key={tag} 
                      className="text-xs py-1 px-3 rounded-full bg-black/60 backdrop-blur-sm text-white border border-white/20 hover:border-primary/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 2 && (
                    <motion.span 
                      className="text-xs py-1 px-3 rounded-full bg-black/60 backdrop-blur-sm text-white border border-white/20 hover:border-secondary/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      +{project.tags.length - 2}
                    </motion.span>
                  )}
                </div>
              </div>
              
              {/* Enhanced Content Section */}
              <div className="flex-grow space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="heading-sm group-hover:text-primary transition-colors duration-300 flex-1">
                    {project.title}
                  </h3>
                  <motion.div 
                    className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ rotate: 15 }}
                  >
                    <ExternalLink size={18} className="text-text-secondary hover:text-primary transition-colors" />
                  </motion.div>
                </div>
                
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Enhanced All Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tag} 
                      className="text-xs py-1 px-3 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Action Buttons */}
              <div className="flex space-x-3 mt-6 pt-4 border-t border-white/10">
                {project.demoUrl && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    icon={<ExternalLink size={16} />}
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="flex-1 hover:bg-primary/20 hover:text-primary hover:border-primary/50 group/btn"
                  >
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                      Live Demo
                    </span>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    icon={<Github size={16} />}
                    onClick={() => window.open(project.repoUrl, '_blank')}
                    className="flex-1 hover:bg-accent/20 hover:text-accent hover:border-accent/50 group/btn"
                  >
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                      Code
                    </span>
                  </Button>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <GlassCard className="max-w-md mx-auto">
            <div className="p-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Star size={24} className="text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
              <p className="text-text-secondary">Try selecting a different filter to see more projects.</p>
            </div>
          </GlassCard>
        </motion.div>
      )}

      {/* Enhanced Project Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <GlassCard className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed', icon: <Award size={24} className="text-primary" /> },
              { number: '30+', label: 'Happy Clients', icon: <Users size={24} className="text-accent" /> },
              { number: '5+', label: 'Years Experience', icon: <Calendar size={24} className="text-secondary" /> },
              { number: '100%', label: 'Success Rate', icon: <TrendingUp size={24} className="text-success" /> }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </Section>
  );
};

export default Projects;