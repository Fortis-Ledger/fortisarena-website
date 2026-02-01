import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { RainbowButton } from '../../../components/ui/RainbowButton';
import Input from '../../../components/ui/Input';
import { SOCIAL_LINKS } from '../../../config/socialLinks';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: 'Zap',
      title: 'Early Access',
      description: 'Be first to try new features and tournaments'
    },
    {
      icon: 'Gift',
      title: 'Exclusive Rewards',
      description: 'Special airdrops and bonus tokens for subscribers'
    },
    {
      icon: 'TrendingUp',
      title: 'Market Insights',
      description: 'Weekly analysis of gaming and crypto trends'
    },
    {
      icon: 'Users',
      title: 'Community Updates',
      description: 'Latest news from the FortisArena ecosystem'
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-b from-gaming-secondary to-gaming-dark relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glassmorphism p-12 rounded-3xl border border-white/10"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6 gaming-glow">
              <Icon name="Check" size={40} className="text-white" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Welcome to the Revolution!
            </h2>
            <p className="font-body text-gray-300 text-lg mb-8">
              You're now part of the FortisArena community. Check your email for a special welcome bonus!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="button"
                onClick={() => window.open(SOCIAL_LINKS.discord, '_blank')}
              >
                <span>Join Discord</span>
              </button>
              <button
                className="button"
              >
                <span>Download Whitepaper</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gaming-secondary to-gaming-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Ahead of the
                <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
                  Gaming Revolution
                </span>
              </h2>
              <p className="font-body text-xl text-gray-300 leading-relaxed">
                Get exclusive updates, early access to features, and insider insights into the future of decentralized gaming.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits?.map((benefit, index) => (
                <motion.div
                  key={benefit?.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={benefit?.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-1">
                      {benefit?.title}
                    </h3>
                    <p className="font-body text-gray-400 text-sm">
                      {benefit?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="glassmorphism p-8 rounded-3xl border border-white/10 gaming-glow">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-golden-cta to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Join 50,000+ Gamers
                </h3>
                <p className="font-body text-gray-300">
                  Get the latest updates delivered to your inbox
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                />

                <RainbowButton
                  type="submit"
                  fullWidth
                  loading={isLoading}
                  disabled={!email}
                  className="font-semibold"
                  iconName="Send"
                  iconPosition="right"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe Now'}
                </RainbowButton>
              </form>

              <div className="mt-6 text-center">
                <p className="font-body text-xs text-gray-400">
                  By subscribing, you agree to our{' '}
                  <a href="#" className="text-electric-blue hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-electric-blue hover:underline">
                    Terms of Service
                  </a>
                </p>
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;