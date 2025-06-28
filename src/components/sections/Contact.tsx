import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle, Calendar, CheckCircle, Clock, Globe, Zap } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const contactInfo = [
    { 
      icon: <Mail size={20} />, 
      label: 'Email', 
      value: 'hello@draft.dev',
      color: 'from-primary/20 to-primary/5',
      iconColor: 'text-primary',
      description: 'Drop me a line anytime'
    },
    { 
      icon: <Phone size={20} />, 
      label: 'Phone', 
      value: '+1 (555) 123-4567',
      color: 'from-accent/20 to-accent/5',
      iconColor: 'text-accent',
      description: 'Call for urgent matters'
    },
    { 
      icon: <MapPin size={20} />, 
      label: 'Location', 
      value: 'New York, USA',
      color: 'from-secondary/20 to-secondary/5',
      iconColor: 'text-secondary',
      description: 'Available worldwide'
    },
  ];

  const features = [
    { icon: <Clock size={16} />, text: 'Usually responds within 24 hours', color: 'text-primary' },
    { icon: <Globe size={16} />, text: 'Available for remote work', color: 'text-accent' },
    { icon: <Zap size={16} />, text: 'Fast project turnaround', color: 'text-secondary' },
    { icon: <Calendar size={16} />, text: 'Flexible scheduling', color: 'text-success' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <Section 
      id="contact" 
      title="Get In Touch"
      subtitle="Have a project in mind? Let's work together to bring your ideas to life"
      className="bg-gradient-to-b from-background-light to-background"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Enhanced Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h3 className="heading-md mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Let's Talk About Your Project
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you. 
              Fill out the form, and I'll get back to you as soon as possible.
            </p>
          </div>
          
          {/* Enhanced Contact Information Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <GlassCard className="hover:scale-105 transition-all duration-300 cursor-pointer group interactive-card">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 relative`}>
                      <span className={item.iconColor}>{item.icon}</span>
                      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-text-secondary text-sm mb-1">{item.label}</p>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors mb-1">
                        {item.value}
                      </p>
                      <p className="text-text-secondary text-xs">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Why Work With Me</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className={feature.color}>{feature.icon}</span>
                  <span className="text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-white/10"
          >
            <h4 className="font-semibold mb-2 text-white">Ready to Start?</h4>
            <p className="text-text-secondary text-sm mb-4">
              Let's discuss your project and see how I can help bring your vision to life.
            </p>
            <div className="flex items-center space-x-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success">Available for new projects</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GlassCard className="relative overflow-hidden">
            {/* Enhanced Success Overlay */}
            {formStatus === 'sent' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-success/20 backdrop-blur-sm flex items-center justify-center z-10 rounded-2xl"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", duration: 0.8 }}
                    className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                  >
                    <CheckCircle size={40} className="text-success" />
                    <div className="absolute inset-0 rounded-full bg-success/10 animate-ping"></div>
                  </motion.div>
                  <motion.h4 
                    className="text-2xl font-semibold mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Message Sent!
                  </motion.h4>
                  <motion.p 
                    className="text-text-secondary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Thanks for reaching out. I'll get back to you soon.
                  </motion.p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder-text-secondary/50 hover:bg-white/10"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder-text-secondary/50 hover:bg-white/10"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder-text-secondary/50 hover:bg-white/10"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-text-secondary mb-2">
                  Project Budget (Optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:bg-white/10"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-plus">$25,000+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none placeholder-text-secondary/50 hover:bg-white/10"
                  placeholder="Tell me about your project, goals, and timeline..."
                ></textarea>
              </div>
              
              <Button 
                variant="primary" 
                size="lg" 
                type="submit"
                disabled={formStatus === 'sending'}
                icon={formStatus === 'sending' ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send size={16} />
                  </motion.div>
                ) : (
                  <Send size={16} />
                )}
                className="w-full hover:scale-105 transition-all duration-300 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </span>
              </Button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;