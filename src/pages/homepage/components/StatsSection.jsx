import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const [stats, setStats] = useState({
    players: 0,
    tournaments: 0,
    rewards: 0,
    communities: 0
  });

  const finalStats = {
    players: 125000,
    tournaments: 2500,
    rewards: 15000000,
    communities: 850
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setStats({
        players: Math.floor(finalStats?.players * easeOutQuart),
        tournaments: Math.floor(finalStats?.tournaments * easeOutQuart),
        rewards: Math.floor(finalStats?.rewards * easeOutQuart),
        communities: Math.floor(finalStats?.communities * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000)?.toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000)?.toFixed(0) + 'K';
    }
    return num?.toLocaleString();
  };

  const statsData = [
    {
      icon: 'Users',
      value: formatNumber(stats?.players),
      label: 'Active Players',
      description: 'Competitive gamers worldwide',
      color: 'from-electric-blue to-cyan-300'
    },
    {
      icon: 'Trophy',
      value: formatNumber(stats?.tournaments),
      label: 'Tournaments Hosted',
      description: 'Decentralized competitions',
      color: 'from-golden-cta to-yellow-300'
    },
    {
      icon: 'DollarSign',
      value: '$' + formatNumber(stats?.rewards),
      label: 'Total Rewards',
      description: 'Distributed to players',
      color: 'from-neon-purple to-purple-300'
    },
    {
      icon: 'Globe',
      value: formatNumber(stats?.communities),
      label: 'Gaming Communities',
      description: 'Connected ecosystems',
      color: 'from-emerald-500 to-green-300'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gaming-dark to-gaming-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-transparent to-neon-purple/20"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Powering the Gaming
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Revolution
            </span>
          </h2>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
            Real numbers from a real community building the future of decentralized gaming
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData?.map((stat, index) => (
            <motion.div
              key={stat?.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="glassmorphism p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 gaming-glow">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat?.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={stat?.icon} size={32} className="text-white" />
                </div>

                {/* Value */}
                <div className="mb-4">
                  <div className={`font-heading text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat?.color} bg-clip-text text-transparent`}>
                    {stat?.value}
                  </div>
                </div>

                {/* Label */}
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  {stat?.label}
                </h3>

                {/* Description */}
                <p className="font-body text-gray-400 text-sm">
                  {stat?.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mt-12"
        >
          <div className="flex items-center space-x-3 glassmorphism px-6 py-3 rounded-full border border-white/10">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-body text-gray-300 text-sm">
              Live data • Updated every 5 minutes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;