import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import GlassCard from '../../../components/GlassCard';
import { GlowButton } from '../../../components/MagneticButton';
import { StatsCard } from '../../../components/AnimatedCounter';
import { GradientMesh } from '../../../components/ParticleField';
import { SOCIAL_LINKS } from '../../../config/socialLinks';

const CommunitySection = () => {
  const communityStats = [
    {
      platform: 'Discord',
      icon: 'MessageSquare',
      members: '500+',
      description: 'Active community members',
      color: 'purple',
      link: SOCIAL_LINKS.discord
    },
    {
      platform: 'Twitter',
      icon: 'Twitter',
      members: '1000+',
      description: 'Followers and supporters',
      color: 'cyan',
      link: SOCIAL_LINKS.twitter
    },
    {
      platform: 'Telegram',
      icon: 'Send',
      members: '500+',
      description: 'Community discussions',
      color: 'cyan',
      link: SOCIAL_LINKS.telegram
    },
    {
      platform: 'YouTube',
      icon: 'Youtube',
      members: '1000+',
      description: 'Subscribers and viewers',
      color: 'orange',
      link: SOCIAL_LINKS.youtube
    }
  ];

  const benefits = [
    {
      icon: 'Trophy',
      title: 'Exclusive Tournaments',
      description: 'Access to members-only competitions with premium prize pools'
    },
    {
      icon: 'Gift',
      title: 'Early Access',
      description: 'Be the first to try new features and earn exclusive rewards'
    },
    {
      icon: 'Users',
      title: 'Network & Connect',
      description: 'Build relationships with pro gamers and industry leaders'
    },
    {
      icon: 'Vote',
      title: 'Shape the Future',
      description: 'Participate in governance and influence platform decisions'
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <GradientMesh />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
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
            className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6"
          >
            Join the Movement
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join Our Growing
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Connect with passionate gamers, creators, and innovators building the future of decentralized gaming together.
          </p>
        </motion.div>

        {/* Community Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {communityStats.map((stat, index) => (
            <motion.a
              key={stat.platform}
              href={stat.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="block"
            >
              <GlassCard className="p-6 h-full group cursor-pointer" glowColor={stat.color}>
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                    stat.color === 'purple' ? 'from-purple-500 to-indigo-500' :
                    stat.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                    'from-orange-500 to-red-500'
                  } flex items-center justify-center mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    boxShadow: stat.color === 'purple' 
                      ? '0 0 30px rgba(139, 92, 246, 0.3)'
                      : stat.color === 'cyan'
                        ? '0 0 30px rgba(6, 182, 212, 0.3)'
                        : '0 0 30px rgba(249, 115, 22, 0.3)'
                  }}
                >
                  <Icon name={stat.icon} size={28} className="text-white" />
                </motion.div>
                
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.members}
                </div>
                <div className="text-white font-medium mb-1">{stat.platform}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
                
                {/* Hover arrow */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Join Now</span>
                  <Icon name="ArrowRight" size={16} />
                </motion.div>
              </GlassCard>
            </motion.a>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Why Join FortisArena?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon name={benefit.icon} size={28} className="text-cyan-400" />
                </motion.div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <GlassCard className="p-8 md:p-12 text-center" glowColor="cyan">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join the Revolution?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Be part of the fastest-growing Web3 gaming community. Connect, compete, and earn together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GlowButton
                variant="primary"
                size="lg"
                onClick={() => window.open(SOCIAL_LINKS.discord, '_blank')}
              >
                <Icon name="MessageSquare" className="w-5 h-5" />
                <span>Join Discord</span>
              </GlowButton>
              
              <GlowButton
                variant="secondary"
                size="lg"
                onClick={() => window.open(SOCIAL_LINKS.twitter, '_blank')}
              >
                <Icon name="Twitter" className="w-5 h-5" />
                <span>Follow on X</span>
              </GlowButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
