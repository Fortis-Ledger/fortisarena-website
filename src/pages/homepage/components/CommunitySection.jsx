import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { RainbowButton } from '../../../components/ui/RainbowButton';

const CommunitySection = () => {
  const communityStats = [
    {
      platform: 'Discord',
      icon: 'MessageSquare',
      members: '45,000+',
      description: 'Active community members',
      color: 'from-indigo-500 to-purple-500',
      link: 'https://discord.com/invite/qTTYxTnK3s'
    },
    {
      platform: 'Twitter',
      icon: 'Twitter',
      members: '28,000+',
      description: 'Followers and supporters',
      color: 'from-blue-400 to-cyan-400',
      link: 'https://x.com/fortisarena'
    },
    {
      platform: 'Telegram',
      icon: 'Send',
      members: '15,000+',
      description: 'Community discussions',
      color: 'from-blue-500 to-blue-600',
      link: 'https://t.me/fortisarena'
    },
    {
      platform: 'YouTube',
      icon: 'Play',
      members: '12,000+',
      description: 'Subscribers and viewers',
      color: 'from-red-500 to-red-600',
      link: 'https://youtube.com/@fortisarena'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Pro Gamer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: `FortisArena has completely changed how I approach competitive gaming. The fair matchmaking and transparent rewards system make every tournament feel legitimate and rewarding.`,
      rating: 5
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Content Creator',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: `The creator tools and community engagement features are incredible. I've grown my audience and earnings significantly since joining the FortisArena ecosystem.`,
      rating: 5
    },
    {
      name: 'Marcus Johnson',role: 'Tournament Organizer',avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: `Organizing tournaments has never been easier. The blockchain integration ensures complete transparency, and the community response has been phenomenal.`,
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gaming-dark via-gaming-secondary to-gaming-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.3),transparent_50%)]"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Growing
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with passionate gamers, creators, and innovators building the future of decentralized gaming together.
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {communityStats?.map((stat, index) => (
            <motion.div
              key={stat?.platform}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
              onClick={() => window.open(stat?.link, '_blank')}
            >
              <div className="glassmorphism p-6 rounded-2xl border border-white/10 hover:border-white/20 card-hover text-center gaming-glow">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat?.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 icon-float`}>
                  <Icon name={stat?.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {stat?.platform}
                </h3>
                <div className={`font-heading text-2xl font-bold bg-gradient-to-r ${stat?.color} bg-clip-text text-transparent mb-2`}>
                  {stat?.members}
                </div>
                <p className="font-body text-gray-400 text-sm">
                  {stat?.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-heading text-3xl font-bold text-white text-center mb-12">
            What Our Community Says
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={testimonial?.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-golden-cta fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="font-body text-gray-300 mb-6 leading-relaxed">
                  "{testimonial?.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-electric-blue/30"
                  />
                  <div>
                    <h4 className="font-heading font-semibold text-white">
                      {testimonial?.name}
                    </h4>
                    <p className="font-body text-sm text-gray-400">
                      {testimonial?.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glassmorphism p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl font-bold text-white mb-4">
              Ready to Join the Revolution?
            </h3>
            <p className="font-body text-gray-300 mb-8 text-lg">
              Connect with like-minded gamers and be part of the decentralized gaming movement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="glow"
                size="glow-lg"
                className="font-semibold"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => window.open('https://discord.com/invite/qTTYxTnK3s', '_blank')}
              >
                Join Discord
              </Button>
              <Button
                variant="glow-accent"
                size="glow-lg"
                className="font-semibold"
                iconName="Bell"
                iconPosition="left"
                onClick={() => window.open('https://substack.com/@fortisarena', '_blank')}
              >
                Get Updates
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;