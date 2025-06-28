import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server, Lightbulb, Zap, Star } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import { Skill } from '../../types';

const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', icon: <Code size={18} />, level: 9, category: 'frontend' },
  { name: 'CSS3', icon: <Code size={18} />, level: 9, category: 'frontend' },
  { name: 'JavaScript', icon: <Code size={18} />, level: 8, category: 'frontend' },
  { name: 'TypeScript', icon: <Code size={18} />, level: 8, category: 'frontend' },
  { name: 'React', icon: <Code size={18} />, level: 9, category: 'frontend' },
  { name: 'Vue', icon: <Code size={18} />, level: 7, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <Code size={18} />, level: 9, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: <Server size={18} />, level: 7, category: 'backend' },
  { name: 'Express', icon: <Server size={18} />, level: 7, category: 'backend' },
  { name: 'MongoDB', icon: <Server size={18} />, level: 6, category: 'backend' },
  { name: 'PostgreSQL', icon: <Server size={18} />, level: 6, category: 'backend' },
  
  // Design
  { name: 'Figma', icon: <Palette size={18} />, level: 8, category: 'design' },
  { name: 'Adobe XD', icon: <Palette size={18} />, level: 7, category: 'design' },
  { name: 'Photoshop', icon: <Palette size={18} />, level: 7, category: 'design' },
  { name: 'Illustrator', icon: <Palette size={18} />, level: 6, category: 'design' },
  
  // Other
  { name: 'Git', icon: <Lightbulb size={18} />, level: 8, category: 'other' },
  { name: 'Webpack', icon: <Lightbulb size={18} />, level: 7, category: 'other' },
  { name: 'Vite', icon: <Lightbulb size={18} />, level: 8, category: 'other' },
  { name: 'RESTful APIs', icon: <Lightbulb size={18} />, level: 8, category: 'other' },
];

const SkillBar: React.FC<{ level: number; delay: number }> = ({ level, delay }) => {
  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full relative"
        initial={{ width: 0 }}
        whileInView={{ width: `${level * 10}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut', delay }}
      >
        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
      </motion.div>
    </div>
  );
};

const Skills: React.FC = () => {
  const categories = [
    { 
      id: 'frontend', 
      label: 'Frontend Development', 
      icon: <Code size={24} />, 
      color: 'from-primary/20 to-primary/5',
      iconColor: 'text-primary',
      description: 'Building beautiful user interfaces'
    },
    { 
      id: 'backend', 
      label: 'Backend Development', 
      icon: <Server size={24} />, 
      color: 'from-accent/20 to-accent/5',
      iconColor: 'text-accent',
      description: 'Creating robust server solutions'
    },
    { 
      id: 'design', 
      label: 'UI/UX Design', 
      icon: <Palette size={24} />, 
      color: 'from-secondary/20 to-secondary/5',
      iconColor: 'text-secondary',
      description: 'Crafting intuitive experiences'
    },
    { 
      id: 'other', 
      label: 'Tools & Technologies', 
      icon: <Zap size={24} />, 
      color: 'from-success/20 to-success/5',
      iconColor: 'text-success',
      description: 'Essential development tools'
    },
  ];

  return (
    <Section 
      id="skills" 
      title="My Skills"
      subtitle="Technologies and tools I use to bring ideas to life"
      className="bg-gradient-to-b from-background to-background-light"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            <GlassCard className="h-full hover:scale-[1.02] transition-all duration-500 group">
              {/* Enhanced header */}
              <div className="flex items-center mb-8 space-x-4">
                <div className={`p-4 bg-gradient-to-br ${category.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 relative`}>
                  <span className={category.iconColor}>{category.icon}</span>
                  <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1">
                  <h3 className="heading-sm mb-1">{category.label}</h3>
                  <p className="text-text-secondary text-sm mb-2">{category.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-text-secondary text-xs">
                      {skills.filter(skill => skill.category === category.id).length} skills
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={`${i < 4 ? category.iconColor : 'text-white/20'}`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <span className={`${category.iconColor} group-hover/skill:scale-110 transition-transform`}>
                            {skill.icon}
                          </span>
                          <span className="font-medium group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-text-secondary text-sm font-medium">{skill.level}/10</span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  i < Math.ceil(skill.level / 2) 
                                    ? `${category.iconColor.replace('text-', 'bg-')}` 
                                    : 'bg-white/20'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <SkillBar level={skill.level} delay={skillIndex * 0.1 + categoryIndex * 0.2} />
                    </motion.div>
                  ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Enhanced skills summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16"
      >
        <GlassCard className="text-center">
          <h3 className="heading-sm mb-4">Always Learning</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
            frameworks, and best practices. Currently exploring AI integration and advanced animation techniques.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js', 'Three.js', 'GraphQL', 'Docker', 'AWS'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-text-secondary hover:text-primary hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </Section>
  );
};

export default Skills;