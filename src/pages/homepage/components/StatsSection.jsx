import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { StatsCard } from '../../../components/AnimatedCounter';
import { GradientMesh } from '../../../components/ParticleField';
import LogoMarquee from '../../../components/LogoMarquee';

const StatsSection = () => {
  const statsData = [
    {
      icon: 'Users',
      value: 125,
      suffix: 'K+',
      label: 'Active Players',
      sublabel: 'Competitive gamers worldwide',
      color: 'cyan'
    },
    {
      icon: 'Trophy',
      value: 2.5,
      suffix: 'K+',
      label: 'Tournaments Hosted',
      sublabel: 'Decentralized competitions',
      color: 'orange'
    },
    {
      icon: 'DollarSign',
      value: 15,
      prefix: '$',
      suffix: 'M+',
      label: 'Total Rewards',
      sublabel: 'Distributed to players',
      color: 'purple'
    },
    {
      icon: 'Globe',
      value: 850,
      suffix: '+',
      label: 'Gaming Communities',
      sublabel: 'Connected ecosystems',
      color: 'green'
    }
  ];

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <GradientMesh />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
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
            className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6"
          >
            Our Goals
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powering the Gaming
            <span className="block mt-2 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Revolution
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real numbers from a real community building the future of decentralized gaming
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatsCard
              key={stat.label}
              icon={(props) => <Icon name={stat.icon} {...props} />}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              sublabel={stat.sublabel}
              color={stat.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Live Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex items-center justify-center mt-12"
        >
          <div 
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-gray-400 text-sm">
              Live data • Updated every 5 minutes
            </span>
          </div>
        </motion.div>

        {/* Partners/Backers Section - Auto-scroll Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 pt-10 border-t border-white/10"
        >
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
            Trusted by Leading Web3 Innovators
          </p>
          
          <LogoMarquee speed={35} className="py-4" />
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
