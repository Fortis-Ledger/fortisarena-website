import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProblemSolutionSection = () => {
  const [activeTab, setActiveTab] = useState('problem');

  const problemPoints = [
    {
      icon: "AlertTriangle",
      title: "Centralized Control",
      description: "Gaming platforms control player assets, achievements, and economic opportunities without transparency."
    },
    {
      icon: "DollarSign",
      title: "Unfair Revenue Distribution",
      description: "Players generate billions in value but receive minimal compensation for their time and skill."
    },
    {
      icon: "Lock",
      title: "Limited Asset Ownership",
      description: "In-game purchases and achievements are locked to specific platforms with no real ownership."
    },
    {
      icon: "TrendingDown",
      title: "Lack of Transparency",
      description: "Opaque algorithms determine matchmaking, rewards, and tournament outcomes without player input."
    }
  ];

  const solutionPoints = [
    {
      icon: "Shield",
      title: "Blockchain Ownership",
      description: "True ownership of digital assets through NFTs and smart contracts on Polygon network."
    },
    {
      icon: "Coins",
      title: "Fair Token Economics",
      description: "Players earn $FRT tokens based on skill, participation, and community contribution."
    },
    {
      icon: "Vote",
      title: "DAO Governance",
      description: "Community-driven decision making for platform features, rules, and economic policies."
    },
    {
      icon: "Zap",
      title: "AI-Powered Fairness",
      description: "Transparent AI matchmaking and reward systems with open-source algorithms."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-destructive/10 border border-destructive/20 rounded-full px-6 py-3 mb-6">
            <Icon name="Target" size={20} className="text-destructive" />
            <span className="text-destructive font-medium">Problem & Solution</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforming eSports
            <span className="block text-transparent bg-gradient-to-r from-destructive to-accent bg-clip-text">
              Economics Forever
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The current gaming industry has fundamental flaws that limit player potential. 
            FortisArena provides revolutionary solutions for a player-owned future.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glassmorphism rounded-2xl p-2 flex space-x-2">
            <button
              onClick={() => setActiveTab('problem')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'problem' ?'bg-destructive text-white shadow-lg' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="AlertCircle" size={20} />
              <span>The Problem</span>
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'solution' ?'bg-success text-white shadow-lg' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="CheckCircle" size={20} />
              <span>Our Solution</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'problem' ? problemPoints : solutionPoints)?.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`glassmorphism rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105 ${
                  activeTab === 'problem' ?'border-destructive/20 hover:border-destructive/40' :'border-success/20 hover:border-success/40'
                }`}>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:gaming-glow transition-all duration-300 ${
                    activeTab === 'problem' ?'bg-gradient-to-br from-destructive to-red-600' :'bg-gradient-to-br from-success to-emerald-600'
                  }`}>
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
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glassmorphism rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">$180B</div>
                <div className="text-muted-foreground">Global Gaming Market Size</div>
                <div className="text-sm text-muted-foreground mt-1">Yet players own nothing</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-neon-purple mb-2">3.2B</div>
                <div className="text-muted-foreground">Active Gamers Worldwide</div>
                <div className="text-sm text-muted-foreground mt-1">Ready for ownership</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-golden-cta mb-2">95%</div>
                <div className="text-muted-foreground">Revenue to Platforms</div>
                <div className="text-sm text-muted-foreground mt-1">Time to change this</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;