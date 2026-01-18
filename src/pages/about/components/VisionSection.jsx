import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const VisionSection = () => {
  const visionPoints = [
    {
      icon: "Crown",
      title: "Player Ownership",
      description: "True ownership of in-game assets, achievements, and digital identity through blockchain technology."
    },
    {
      icon: "Zap",
      title: "Skill-Based Rewards",
      description: "Direct correlation between gaming skill, creativity, and financial rewards in a transparent ecosystem."
    },
    {
      icon: "Users",
      title: "Community Governance",
      description: "Players collectively shape the platform's future through decentralized autonomous organization (DAO) voting."
    },
    {
      icon: "Globe",
      title: "Global Accessibility",
      description: "Breaking down geographical and economic barriers to competitive gaming participation."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-3 mb-6">
            <Icon name="Eye" size={20} className="text-accent" />
            <span className="text-accent font-medium">Our Vision</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Future of
            <span className="block text-transparent bg-gradient-to-r from-accent to-neon-purple bg-clip-text">
              Decentralized Gaming
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We envision a gaming ecosystem where every player has true ownership, 
            every skill is rewarded, and every voice matters in shaping the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionPoints?.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="group"
            >
              <div className="glassmorphism rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-neon-purple rounded-xl flex items-center justify-center mb-6 group-hover:gaming-glow transition-all duration-300">
                  <Icon name={point?.icon} size={28} className="text-white" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {point?.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {point?.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mt-16"
        >
          <div className="glassmorphism rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-6">
              Ready to Own Your Gaming Destiny?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of players who are already building the future of decentralized gaming. 
              Your skills, your rewards, your community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold px-8 py-4 rounded-xl electric-pulse transition-all duration-300 flex items-center space-x-2">
                <Icon name="Gamepad2" size={20} />
                <span>Start Playing</span>
              </button>
              <button className="border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-2">
                <Icon name="Users" size={20} />
                <span>Join Community</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;