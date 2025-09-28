import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'AI-Powered Matchmaking',
      description: 'Advanced algorithms ensure fair competition by matching players based on skill level, play style, and performance metrics.',
      benefits: ['Fair Competition', 'Skill-Based Matching', 'Real-time Analysis'],
      color: 'from-white to-gray-300',
      delay: 0.1
    },
    {
      icon: 'Shield',
      title: 'Blockchain Security',
      description: 'Immutable tournament records and transparent reward distribution powered by cutting-edge blockchain technology.',
      benefits: ['Transparent Results', 'Secure Transactions', 'Immutable Records'],
      color: 'from-white to-gray-300',
      delay: 0.2
    },
    {
      icon: 'Coins',
      title: 'Play-to-Earn Economy',
      description: 'Earn $FRT tokens through gameplay, tournament victories, and community participation in our sustainable economy.',
      benefits: ['Token Rewards', 'NFT Prizes', 'Staking Benefits'],
      color: 'from-white to-gray-300',
      delay: 0.3
    },
    {
      icon: 'Vote',
      title: 'DAO Governance',
      description: 'Community-driven decision making where token holders vote on platform updates, tournament rules, and ecosystem changes.',
      benefits: ['Community Control', 'Voting Rights', 'Proposal System'],
      color: 'from-white to-gray-300',
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-gaming-dark relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/3 rounded-full blur-3xl floating" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
          Revolutionary Gaming
          <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
            Features
          </span>
        </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of competitive gaming with features designed for fairness, transparency, and player empowerment.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features?.map((feature, index) => (
            <motion.div
              key={feature?.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature?.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="glassmorphism-card p-8 rounded-2xl border border-border hover:border-primary/20 card-3d h-full relative overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-6 gaming-glow floating relative z-10"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon name={feature?.icon} size={40} className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4 relative z-10">
                  <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature?.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {feature?.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {feature?.benefits?.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <span className="font-body text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ 
                  background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glassmorphism-card p-8 rounded-2xl border border-border max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="font-body text-muted-foreground mb-8 text-lg">
              Join thousands of gamers who are already earning, competing, and governing in the decentralized gaming ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="button"
                >
                  <span>Explore Platform</span>
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="button"
                  onClick={() => window.open('https://discord.com/invite/qTTYxTnK3s', '_blank')}
                >
                  <span>Join Discord</span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;