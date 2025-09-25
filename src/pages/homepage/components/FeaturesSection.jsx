import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'AI-Powered Matchmaking',
      description: 'Advanced algorithms ensure fair competition by matching players based on skill level, play style, and performance metrics.',
      benefits: ['Fair Competition', 'Skill-Based Matching', 'Real-time Analysis'],
      color: 'from-primary to-electric-blue',
      delay: 0.1
    },
    {
      icon: 'Shield',
      title: 'Blockchain Security',
      description: 'Immutable tournament records and transparent reward distribution powered by cutting-edge blockchain technology.',
      benefits: ['Transparent Results', 'Secure Transactions', 'Immutable Records'],
      color: 'from-accent to-neon-purple',
      delay: 0.2
    },
    {
      icon: 'Coins',
      title: 'Play-to-Earn Economy',
      description: 'Earn $FRT tokens through gameplay, tournament victories, and community participation in our sustainable economy.',
      benefits: ['Token Rewards', 'NFT Prizes', 'Staking Benefits'],
      color: 'from-golden-cta to-cyber-orange',
      delay: 0.3
    },
    {
      icon: 'Vote',
      title: 'DAO Governance',
      description: 'Community-driven decision making where token holders vote on platform updates, tournament rules, and ecosystem changes.',
      benefits: ['Community Control', 'Voting Rights', 'Proposal System'],
      color: 'from-neon-green to-matrix-green',
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-gaming-dark relative overflow-hidden">
      {/* Ultra Minimalistic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>
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
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
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
              <div className="glassmorphism-card p-8 rounded-2xl border border-border hover:border-primary/20 card-hover h-full">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature?.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 gaming-glow icon-float`}>
                  <Icon name={feature?.icon} size={40} className="text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
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
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature?.color}`}></div>
                        <span className="font-body text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
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
              <Button
                variant="glow"
                size="glow-lg"
                className="font-semibold"
                iconName="Play"
                iconPosition="left"
              >
                Explore Platform
              </Button>
              <Button
                variant="glow-accent"
                size="glow-lg"
                className="font-semibold"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => window.open('https://discord.com/invite/qTTYxTnK3s', '_blank')}
              >
                Join Discord
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;