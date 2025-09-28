import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Button from '../../components/ui/Button';
import CommunityStats from './components/CommunityStats';
import DAOGovernance from './components/DAOGovernance';
import CommunityLeaderboard from './components/CommunityLeaderboard';
import CommunityMap from './components/CommunityMap';
import UserTestimonials from './components/UserTestimonials';
import CommunityContent from './components/CommunityContent';
import SocialIntegration from './components/SocialIntegration';
import { AnimatedShinyText } from '../../components/ui/AnimatedShinyText';
import Icon from '../../components/AppIcon';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Community - FortisArena | Gaming Liberation Hub</title>
        <meta name="description" content="Join the FortisArena community - DAO governance, global leaderboards, social integration, and community-generated content. Shape the future of decentralized gaming." />
        <meta name="keywords" content="FortisArena community, DAO governance, gaming community, esports community, Web3 gaming, blockchain gaming community" />
      </Helmet>
      <Header />
      <main className="pt-14 sm:pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gaming-dark">
          <div className="absolute inset-0 neural-network opacity-30"></div>
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)]?.map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="group rounded-full border border-white/10 bg-white/5 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-white/10 mb-6 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1.5 transition ease-out hover:text-neutral-300 hover:duration-300">
                  <Icon name="Users" size={14} className="text-accent mr-2" />
                  <span>500+ Active Members</span>
                </AnimatedShinyText>
              </motion.div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Community
                <span className="block text-transparent bg-gradient-to-r from-electric-blue via-neon-purple to-golden-cta bg-clip-text">
                  Nexus
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Join the revolution. Shape the future. Own your gaming destiny through community governance, 
                global competitions, and decentralized decision-making.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <button
                  className="button w-full sm:w-auto"
                  onClick={() => window.open('https://discord.com/invite/qTTYxTnK3s', '_blank')}
                >
                  <span>Join Discord Community</span>
                </button>
                
                <button
                  className="button w-full sm:w-auto"
                >
                  <span>Participate in DAO</span>
                </button>
              </motion.div>
            </motion.div>

        {/* Community Stats Overview */}
        <CommunityStats />
      </div>
    </section>

        {/* DAO Governance Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DAOGovernance />
          </div>
        </section>

        {/* Community Features Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Leaderboard */}
              <CommunityLeaderboard />
              
              {/* Global Community Map */}
              <CommunityMap />
            </div>
          </div>
        </section>

        {/* User Testimonials */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <UserTestimonials />
          </div>
        </section>

        {/* Community Content Showcase */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CommunityContent />
          </div>
        </section>

        {/* Social Integration Hub */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SocialIntegration />
          </div>
        </section>

        {/* Community Call-to-Action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-gaming-secondary to-gaming-dark"></div>
          <div className="absolute inset-0 neural-network opacity-20"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Icon name="Zap" size={48} className="text-golden-cta mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of gamers who are building the next generation of decentralized gaming. 
                Your voice matters, your skills count, and your participation drives innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon name="Vote" size={20} className="text-electric-blue sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Govern</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Vote on proposals and shape platform decisions</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon name="Trophy" size={20} className="text-neon-purple sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Compete</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Join tournaments and climb the leaderboards</p>
              </div>
              
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-golden-cta/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon name="Coins" size={20} className="text-golden-cta sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Earn</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Get rewarded for your contributions and skills</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
              <button 
                className="button w-full sm:w-auto"
              >
                <span>Start Your Journey</span>
              </button>
              
              <button 
                className="button w-full sm:w-auto"
              >
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CommunityPage;