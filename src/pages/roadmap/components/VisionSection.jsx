import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VisionSection = () => {
  const visionPoints = [
    {
      icon: "Globe",
      title: "Global Gaming Economy",
      description: "A unified ecosystem where players worldwide can compete, earn, and govern together in a truly decentralized environment."
    },
    {
      icon: "Cpu",
      title: "AI-Powered Matchmaking",
      description: "Advanced algorithms ensuring fair competition by matching players based on skill, latency, and gaming preferences."
    },
    {
      icon: "Shield",
      title: "Transparent Governance",
      description: "Community-driven decision making through DAO mechanisms, giving players real ownership of the platform's future."
    },
    {
      icon: "Zap",
      title: "Instant Rewards",
      description: "Real-time reward distribution through smart contracts, eliminating delays and ensuring transparent payouts."
    }
  ];

  return (
    <motion.div 
      className="bg-gradient-to-br from-gaming-dark via-gaming-secondary to-gaming-dark rounded-2xl p-8 lg:p-12 text-white mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
          The Future of Gaming is <span className="text-electric-blue">Decentralized</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Our roadmap leads to a revolutionary gaming ecosystem where players have true ownership, 
          fair competition is guaranteed, and community governance shapes the platform's evolution.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {visionPoints?.map((point, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center">
              <Icon name={point?.icon} size={24} className="text-electric-blue" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">{point?.title}</h3>
              <p className="text-gray-300">{point?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button
          variant="default"
          size="lg"
          className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold electric-pulse"
          iconName="ArrowRight"
          iconPosition="right"
        >
          Join the Revolution
        </Button>
      </div>
    </motion.div>
  );
};

export default VisionSection;