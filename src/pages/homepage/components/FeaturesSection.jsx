import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import GlassCard, { FeatureCard } from '../../../components/GlassCard';
import { GlowButton } from '../../../components/MagneticButton';
import { GradientMesh } from '../../../components/ParticleField';
import { SOCIAL_LINKS } from '../../../config/socialLinks';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'AI-Powered Matchmaking',
      description: 'Advanced algorithms ensure fair competition by matching players based on skill level, play style, and performance metrics.',
      features: ['Fair Competition', 'Skill-Based Matching', 'Real-time Analysis'],
      color: 'cyan',
    },
    {
      icon: 'Shield',
      title: 'Blockchain Security',
      description: 'Immutable tournament records and transparent reward distribution powered by cutting-edge blockchain technology.',
      features: ['Transparent Results', 'Secure Transactions', 'Immutable Records'],
      color: 'purple',
    },
    {
      icon: 'Coins',
      title: 'Play-to-Earn Economy',
      description: 'Earn $FRT tokens through gameplay, tournament victories, and community participation in our sustainable economy.',
      features: ['Token Rewards', 'NFT Prizes', 'Staking Benefits'],
      color: 'green',
    },
    {
      icon: 'Vote',
      title: 'DAO Governance',
      description: 'Community-driven decision making where token holders vote on platform updates, tournament rules, and ecosystem changes.',
      features: ['Community Control', 'Voting Rights', 'Proposal System'],
      color: 'orange',
    }
  ];

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <GradientMesh />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6"
          >
            Platform Features
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Revolutionary Gaming
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of competitive gaming with features designed for fairness, transparency, and player empowerment.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={(props) => <Icon name={feature.icon} {...props} />}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              color={feature.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <GlassCard className="p-8 md:p-12 text-center" glowColor="mixed">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of gamers who are already earning, competing, and governing in the decentralized gaming ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/waitlist'}
              >
                <span>Explore Platform</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </GlowButton>
              
              <GlowButton
                variant="secondary"
                size="lg"
                onClick={() => window.open(SOCIAL_LINKS.discord, '_blank')}
              >
                <Icon name="MessageSquare" className="w-5 h-5" />
                <span>Join Discord</span>
              </GlowButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
