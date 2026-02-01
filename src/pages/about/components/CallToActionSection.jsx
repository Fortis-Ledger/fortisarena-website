import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { SOCIAL_LINKS } from '../../../config/socialLinks';

const CallToActionSection = () => {
  const actionCards = [
    {
      icon: "Gamepad2",
      title: "Start Playing",
      description: "Join the revolution and experience true gaming ownership",
      action: "Play Now",
      link: "/homepage",
      color: "from-accent to-blue-600",
      delay: 0
    },
    {
      icon: "Users",
      title: "Join Community",
      description: "Connect with thousands of players building the future",
      action: "Join Discord",
      link: SOCIAL_LINKS.discord,
      color: "from-neon-purple to-purple-600",
      delay: 0.1,
      external: true
    },
    {
      icon: "FileText",
      title: "Read Whitepaper",
      description: "Deep dive into our technical vision and roadmap",
      action: "Download PDF",
      link: "/docs/FortisArena White Paper.pdf",
      color: "from-success to-emerald-600",
      delay: 0.2,
      external: true
    },
    {
      icon: "Coins",
      title: "Explore Tokenomics",
      description: "Understand the $FRT token economy and rewards",
      action: "Learn More",
      link: "/tokenomics",
      color: "from-golden-cta to-yellow-600",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gaming-dark via-gaming-secondary to-gaming-dark text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-network opacity-20"></div>
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-6">
            <Icon name="Rocket" size={20} className="text-golden-cta" />
            <span className="text-golden-cta font-medium">Join the Revolution</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Ready to Own Your
            <span className="block text-transparent bg-gradient-to-r from-electric-blue via-neon-purple to-golden-cta bg-clip-text">
              Gaming Destiny?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            The future of gaming is decentralized, transparent, and player-owned. 
            Don't just play the game—own it, shape it, and profit from it.
          </p>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-16"
          >
            <button 
              className="button text-lg px-12 py-6"
            >
              <span>Claim Your Gaming Throne</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {actionCards?.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card?.delay }}
              viewport={{ once: true, amount: 0.1 }}
              className="group"
            >
              {card?.external ? (
                <a href={card?.link} target="_blank" rel="noopener noreferrer">
                  <div className="glassmorphism rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-white/10 hover:border-white/30">
                    <div className={`w-16 h-16 bg-gradient-to-br ${card?.color} rounded-xl flex items-center justify-center mb-6 group-hover:gaming-glow transition-all duration-300`}>
                      <Icon name={card?.icon} size={28} className="text-white" />
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold mb-4">
                      {card?.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {card?.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-electric-blue font-semibold group-hover:text-golden-cta transition-colors duration-300">
                      <span>{card?.action}</span>
                      <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              ) : (
                <Link to={card?.link}>
                  <div className="glassmorphism rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-white/10 hover:border-white/30">
                    <div className={`w-16 h-16 bg-gradient-to-br ${card?.color} rounded-xl flex items-center justify-center mb-6 group-hover:gaming-glow transition-all duration-300`}>
                      <Icon name={card?.icon} size={28} className="text-white" />
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold mb-4">
                      {card?.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {card?.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-electric-blue font-semibold group-hover:text-golden-cta transition-colors duration-300">
                      <span>{card?.action}</span>
                      <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
          className="glassmorphism rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-electric-blue mb-2"
              >
                50K+
              </motion.div>
              <div className="text-gray-300">Early Adopters</div>
              <div className="text-sm text-gray-400 mt-1">Ready for launch</div>
            </div>
            
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-neon-purple mb-2"
              >
                $2M+
              </motion.div>
              <div className="text-gray-300">In Rewards Ready</div>
              <div className="text-sm text-gray-400 mt-1">For early players</div>
            </div>
            
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-golden-cta mb-2"
              >
                Q1 2025
              </motion.div>
              <div className="text-gray-300">Platform Launch</div>
              <div className="text-sm text-gray-400 mt-1">The revolution begins</div>
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The gaming industry has been controlled by corporations for too long. 
            It's time for players to take back control. 
            <span className="text-golden-cta font-semibold"> The revolution starts with you.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;