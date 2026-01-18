import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-6 py-3 mb-6">
            <Icon name="MessageSquare" size={20} className="text-success" />
            <span className="text-success font-medium">Industry Voices</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industry Voices
            <span className="block text-transparent bg-gradient-to-r from-success to-accent bg-clip-text">
              Coming Soon
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building partnerships with industry leaders, professional gamers, 
            and blockchain experts. Their voices will be featured here soon.
          </p>
        </motion.div>

        {/* Coming Soon Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glassmorphism rounded-3xl p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-accent/20 to-success/20 rounded-full flex items-center justify-center">
              <Icon name="Users" size={40} className="text-accent" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Industry Voices Coming Soon
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're currently building partnerships with industry leaders, professional gamers, 
              blockchain experts, and content creators. Their testimonials and insights will be 
              featured here as we grow our community.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="Clock" size={20} />
                <span className="font-medium">Stay tuned for updates</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="CheckCircle" size={20} />
                <span className="font-medium">Partnerships in progress</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;